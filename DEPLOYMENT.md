# Deployment Guide - Netlify

This guide will help you deploy your Para Profile project to Netlify.

## Prerequisites

1. A GitHub account with your project repository
2. A Netlify account (free tier available)

## Deployment Steps

### Option 1: Deploy via Netlify UI (Recommended)

1. **Push your code to GitHub**

   ```bash
   git add .
   git commit -m "Prepare for Netlify deployment"
   git push origin main
   ```

2. **Connect to Netlify**

   - Go to [netlify.com](https://netlify.com) and sign in
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub account and select your repository

3. **Configure build settings**

   - Build command: `npm run build`
   - Publish directory: `out`
   - Node version: `18` (or higher)

4. **Deploy**
   - Click "Deploy site"
   - Netlify will automatically build and deploy your site

### Option 2: Deploy via Netlify CLI

1. **Install Netlify CLI**

   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**

   ```bash
   netlify login
   ```

3. **Initialize and deploy**
   ```bash
   netlify init
   netlify deploy --prod
   ```

## Configuration Files

The following files have been configured for Netlify deployment:

- `netlify.toml` - Netlify configuration
- `next.config.ts` - Next.js static export configuration
- `package.json` - Build scripts

## Build Process

The build process:

1. Runs `npm run build` which executes `next build`
2. Next.js generates static files in the `out` directory
3. Netlify serves the static files from the `out` directory

## Custom Domain (Optional)

After deployment:

1. Go to your site settings in Netlify
2. Navigate to "Domain management"
3. Add your custom domain
4. Configure DNS settings as instructed

## Environment Variables

If you need environment variables:

1. Go to Site settings → Environment variables
2. Add any required environment variables
3. Redeploy your site

## Troubleshooting

### Build fails

- Check the build logs in Netlify
- Ensure all dependencies are in `package.json`
- Verify the build command and publish directory

### Site not loading

- Check if the `out` directory contains the built files
- Verify the publish directory setting in Netlify
- Check for any console errors

### 404 errors

- The `netlify.toml` includes redirects for SPA routing
- If issues persist, check the redirect configuration

## Support

For more help:

- [Netlify Documentation](https://docs.netlify.com/)
- [Next.js Static Export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
