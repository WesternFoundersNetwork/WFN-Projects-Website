/** @type {import('next').NextConfig} */  
import { withNetlify } from '@netlify/next';

const nextConfig = {
  images: {
    domains: ['hebbkx1anhila5yf.public.blob.vercel-storage.com'],
  },
};

export default withNetlify(nextConfig);
