# GitHub Actions Deployment Setup

## Prerequisites

Before the workflow can run successfully, you need to configure the following secrets in your GitHub repository:

### Setting up GitHub Secrets

1. Go to your GitHub repository
2. Click on **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Add the following secrets:

### Required Secrets

- **FTP_SERVER**: Your GoDaddy FTP server address (e.g., `ftp.yourdomain.com`)
- **FTP_USERNAME**: Your GoDaddy FTP username
- **FTP_PASSWORD**: Your GoDaddy FTP password

## GoDaddy FTP Credentials

To find your GoDaddy FTP credentials:

1. Log in to your GoDaddy account
2. Go to **Web Hosting** 
3. Click **Manage** next to your hosting plan
4. Navigate to **FTP/SFTP** or **Settings** section
5. You'll find your FTP server address and can create/reset FTP credentials there

## Workflow Configuration

### Deployment Trigger

The workflow triggers on:
- Every push to the `main` branch
- Manual trigger via GitHub Actions UI (workflow_dispatch)

### Deployment Process

1. **Frontend Deployment**: 
   - Builds the Vite application
   - Deploys the `dist/` folder to `public_html/` on GoDaddy

2. **Backend Deployment**:
   - Deploys backend code to a separate `backend/` directory
   - Excludes node_modules and git files

### Customization

You may need to adjust:
- **server-dir**: The target directory on your GoDaddy server (default is `public_html/`)
- **Branch**: Change from `main` to your default branch if different
- **Node version**: Currently set to Node 20

## Important Notes

- Make sure your GoDaddy hosting plan supports Node.js if you're deploying the backend
- The backend deployment assumes you'll install dependencies on the server
- Consider using environment variables for backend configuration
- For production, ensure you have proper `.env` files configured on the server

## Manual Deployment

To manually trigger the deployment:
1. Go to **Actions** tab in your repository
2. Select **Deploy to GoDaddy** workflow
3. Click **Run workflow**
4. Select the branch and click **Run workflow**
