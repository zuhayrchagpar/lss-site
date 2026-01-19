# Deploying to GitHub Pages

This guide will help you deploy your static React site to GitHub Pages using the `gh-pages` package.

## Prerequisites

1. A GitHub account
2. Git installed on your computer
3. The repository pushed to GitHub
4. Install dependencies: `npm install`

## Step-by-Step Instructions

### 1. Update Base Path in Vite Config

**Important**: Update the `base` path in `vite.config.js` to match your repository name:

1. Open `vite.config.js`
2. Change the `base` property:
   - If your repo is named `username.github.io`, use: `base: '/'`
   - Otherwise, use: `base: '/your-repo-name/'`
   
   For example, if your repo is `test-react-1`, use:
   ```js
   base: '/test-react-1/',
   ```

### 2. Deploy to GitHub Pages

The `gh-pages` package makes deployment easy:

1. **Build and deploy** in one command:
   ```bash
   npm run deploy
   ```

   This will:
   - Build your site (`npm run build`)
   - Deploy the `dist` folder to the `gh-pages` branch
   - Push to GitHub automatically

2. **Enable GitHub Pages** (first time only):
   - Go to your repository on GitHub
   - Click **Settings** (top menu)
   - Scroll down to **Pages** in the left sidebar
   - Under **Source**, select **Deploy from a branch**
   - Choose **gh-pages** branch and **/ (root)** folder
   - Click **Save**

### 3. Access Your Site

After deployment (may take a few minutes), your site will be available at:
- `https://your-username.github.io/repo-name/` (if repo has a custom name)
- `https://your-username.github.io/` (if repo is `username.github.io`)

### 4. Updating Your Site

Whenever you make changes:

1. Make your changes to the source code
2. Deploy: `npm run deploy`

That's it! The `gh-pages` package handles everything automatically.

## Manual Deployment (Alternative)

If you prefer to deploy manually without the npm script:

```bash
npm run build
npx gh-pages -d dist
```

Or with a custom commit message:

```bash
npm run build
npx gh-pages -d dist -m "Your custom commit message"
```

## Troubleshooting

- **404 errors**: Make sure the `base` path in `vite.config.js` matches your repository name exactly
- **Assets not loading**: Check that the base path is correct and includes the trailing slash
- **White screen**: Verify the base path matches your repo name (case-sensitive)
- **Deployment fails**: Make sure you have push access to the repository and are authenticated with GitHub

## Custom Domain (Optional)

To use a custom domain:
1. Create a `public` folder in your project root
2. Add a `CNAME` file inside `public` with your domain name (e.g., `example.com`)
3. Rebuild and redeploy
4. Configure DNS settings with your domain provider
5. Update GitHub Pages settings with your custom domain
