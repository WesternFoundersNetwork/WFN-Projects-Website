import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

require('dotenv').config({ path: '.env.production' });

const PUBLIC_DIR = './public';
const compressFlag = process.env.COMPRESS_IMAGE_FLAG !== 'false';
const skipList = JSON.parse(process.env.DO_NOT_COMPRESS_ME || '[]');
const specificCompression = JSON.parse(process.env.SPECIFIC_COMPRESSION || '{}');

function getAllImages(dir: string): string[] {
  let results: string[] = [];
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllImages(fullPath));
    } else if (/\.(jpg|jpeg|png)$/i.test(fullPath)) {
      results.push(fullPath);
    }
  });
  return results;
}

async function compressImage(imagePath: string, targetKB?: number) {
  const img = sharp(imagePath);
  const metadata = await img.metadata();
  let output = imagePath;

  let quality = 80;
  if (targetKB) {
    // very basic iterative compression to hit target KB
    let buffer = await img.jpeg({ quality }).toBuffer();
    while (buffer.length / 1024 > targetKB && quality > 10) {
      quality -= 10;
      buffer = await img.jpeg({ quality }).toBuffer();
    }
    fs.writeFileSync(output, buffer);
  } else {
    await img.jpeg({ quality }).toFile(output);
  }
}

(async () => {
  if (!compressFlag) {
    console.log("Image compression disabled via .env.production");
    return;
  }

  const images = getAllImages(PUBLIC_DIR);
  for (const imagePath of images) {
    const relative = imagePath.replace(PUBLIC_DIR, '.');
    if (skipList.includes(relative)) {
      console.log(`❌ Skipping compression: ${relative}`);
      continue;
    }

    const target = specificCompression[relative];
    await compressImage(imagePath, target ? parseInt(target) : undefined);
    console.log(`✅ Compressed: ${relative}`);
  }
})();
