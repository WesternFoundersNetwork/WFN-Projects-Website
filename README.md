# Auto Deployment & Static Content Management Guide



## **⚡ TLDR i am too lazy and like to do stupid shit that breaks things**
- **🚀 Pushing to `main` deploys to production** → If you break stuff, it's on you. Test in local or use a branch and deploy the branch to vercel.
- **📂 Only edit the 4 static data files (`year-data.ts`, `team-data.ts`, `awards-data.ts`, `demo-day.ts`) (see below)** → Touching anything else? Think twice.  
- **🛠️ Format your files properly by copying previous data styles exactly** (ie: If data in a year-data.ts is formatted "2024-2025" previously, format your new info the same way like "2025-2026" and not "2025/26" or "2025/2026". Same applies to image names and covers)

## TLDR but i am extra dumb or auto deploy isn't working
- **🔧 `.env.production` controls deployment & image compression** → Read it before making dumb changes.  
- ** 🔧 `Image Compression` Most photos are automatically compressed. **Do not upload HEIC files or anything other than a .jpg, .jpeg, or png file** for images. Convert them before, otherwise you might break the deployment script. If it breaks, exclude the image from compression with .env.production (see below).
- ** 🔧 `Help me I broke everything` If you broke literally everything and cannot get the thing to auto deploy, **you can always turn off this feature by turning the AUTO_DEPLOY flag in .env.production off** and any new pushes to main will not auto deploy and you can manually deploy the repo on your own cloud system.

🙃 **Break things at your own risk.**


## **🚀 For people who have more than 2 brain cells**
### **⚠️ Important Notice: Pushing to `main` Triggers Production Deployment**
Our project is set up for **continuous deployment**, meaning **any push to the `main` branch will automatically deploy the latest version to the production site**. Because of this, it is **vital** to ensure that your changes are **fully tested and functional** before merging or pushing to `main`.

To avoid accidental deployments, double-check your changes and verify everything is working locally before pushing.

---

## **📂 Constant Data Files (Static Content Management)**
Our static content is **data-driven**, meaning most updates to the site **only require modifying a few specific files**. These are the **only files you should be editing 99% of the time** unless you are changing the UI.

We manage four core data files:

### **1️⃣ `year-data.ts`** (Home Page Data)
- This file contains **data for the homepage** (e.g., `2024-2025` school year). and the **/teams** directory.
- It is structured as a **data sheet for the home page**.
- You can see more about the `slug` format in `@/types/index`.

### **2️⃣ `team-data.ts`** (Teams & Projects)
- This file adds **new teams to `/teams/project`**.
- Each team must have a **unique slug**, typically formatted as:
  ```
  /firstNameVP-lastNameVP-year
  ```
  Example:
  ```
  /john-Doe-2025
  ```
- **Without a unique slug, the team will not be added**.
- **Also add that team to year-data.ts to actually generate UI to navigate to that team, otherwise the page will generate, but no UI to navigate to it will generate.

### **3️⃣ `awards-data.ts`** (Awards Page)
- This file manages awards shown on `/awards`.
- The structure follows this `Award` type:
  ```typescript
  export type Award = {
    hackathon: string;
    projectName: string;
    awardTitle: string;
    teamMembers: string[];
    alumni?: string[]; // Highlight alumni if needed
    repoLink?: string;
    devpostLink?: string;
    description: string;
  }
  ```
- **Alumni Feature:** If enabled, alumni members of a team will be highlighted. You can choose to highlight **only WFN members** or all team members.

### **4️⃣ `demo-day.ts`** (Demo Page) **[TBD]**
- This file will contain **data for the demo day page**.
- Similar to the awards file, but details are yet to be finalized.

---

## **🛠️ Editing Static Content**
- If you want to **change any static content on the site**, **edit the above files ONLY**.
- **Do not modify any other files unless changing UI elements.**
- **Format the files properly** before committing to avoid errors.
- Incorrect formatting may lead to **unexpected bugs** due to required structures and default file names.

---

## **🔧 Production Environment Configuration (`.env.production`)**
Our production environment is controlled using the **`.env.production`** file. Below are key configurations you can adjust:

### **🚀 Deployment Control**
- If you do **not** want to deploy when pushing to `main`, set:
  ```
  AUTO_DEPLOY=false
  ```

### **🖼️ Image Compression**
- If you **do not** want images at all turn on this flag (on by default).
  ```
  COMPRESS_IMAGE_FLAG=false
  ```
- If you don't want compression on certain pictures, specify the path with public as the starting directory (ie: image in ~/public/awards/image.jpg should be saved as ./awards/image.jpg)  
 ```
  DO_NOT_COMPRESS_ME=["./awards/image.jpg"]
  ```
- If you want to change the **compression resolution** for specific images, use the `specificCompression` object,
  ```json
  SPECIFIC_COMPRESSION={
    "./team/ethan/photoExample.jpg": "245" // Size in KB
  }
  ```
  This ensures `photoExample.jpg` is compressed to **245KB**.

---

## **📌 Final Notes**
- **Be mindful when pushing to `main`** since it will automatically deploy.
- **Use the four data files** for content updates instead of modifying UI code.
- **Keep `.env.production` configurations updated** if necessary.
- **Proper formatting is crucial** to prevent errors in static content.


Here’s your final addition:  

---

**If you absolutely fucked everything and no one in projects knows how tf to fix this, feel free to send a message to ethan.rong@gmail.com**  
  
Hopefully, you don’t fuck things up, e




