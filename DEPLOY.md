# Deploying to GitHub Pages

This guide will help you deploy your static React site to GitHub Pages using the built files from the `dist` folder.

## Prerequisites

1. A GitHub account
2. Git installed on your computer
3. The repository pushed to GitHub

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

### 2. Build Your Site

Run the build command to create the static files:

```bash
npm run build
```

This creates a `dist` folder with all the static files ready for deployment.

### 3. Deploy to GitHub Pages

1. **Build your site** (if you haven't already):
   ```bash
   npm run build
   ```

2. **Commit the `dist` folder**:
   ```bash
   git add dist
   git commit -m "Deploy to GitHub Pages"
   git push
   ```

3. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click **Settings** (top menu)
   - Scroll down to **Pages** in the left sidebar
   - Under **Source**, select **Deploy from a branch**
   - Choose **main** branch and **/dist** folder (not root!)
   - Click **Save**

### 4. Access Your Site

After deployment (may take a few minutes), your site will be available at:
- `https://your-username.github.io/repo-name/` (if repo has a custom name)
- `https://your-username.github.io/` (if repo is `username.github.io`)

### 5. Updating Your Site

Whenever you make changes:

1. Make your changes to the source code
2. Build: `npm run build`
3. Commit and push the updated `dist` folder:
   ```bash
   git add dist
   git commit -m "Update site"
   git push
   ```

## Troubleshooting

- **404 errors**: Make sure the `base` path in `vite.config.js` matches your repository name exactly
- **Assets not loading**: Check that the base path is correct and includes the trailing slash
- **White screen**: Verify the base path matches your repo name (case-sensitive)

## Custom Domain (Optional)

To use a custom domain:
1. Create a `public` folder in your project root
2. Add a `CNAME` file inside `public` with your domain name (e.g., `example.com`)
3. Rebuild and redeploy
4. Configure DNS settings with your domain provider
5. Update GitHub Pages settings with your custom domain
