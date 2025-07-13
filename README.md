# Autopatch Security Dashboard

CI/CD based automated patching architecture for banking systems.

## Features

- 🛡️ **Security Dashboard**: Monitor and manage security vulnerabilities
- 🔍 **Server Scanning**: Scan servers for OS information and CVE analysis
- 📊 **CVE Management**: View and filter CVE data with pagination
- 🎨 **Modern UI**: Beautiful admin interface with Tailwind CSS
- 📱 **Responsive Design**: Works on desktop and mobile devices

## Tech Stack

- **React 18** with Vite
- **Tailwind CSS** for styling
- **AWS Amplify** for deployment
- **REST APIs** for backend communication

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## AWS Amplify Deployment

### Prerequisites

1. **AWS Account** with appropriate permissions
2. **GitHub/GitLab/Bitbucket** repository with your code
3. **AWS Amplify Console** access

### Deployment Steps

#### Method 1: AWS Amplify Console (Recommended)

1. **Login to AWS Amplify Console**
   ```
   https://console.aws.amazon.com/amplify/
   ```

2. **Connect Repository**
   - Click "New app" → "Host web app"
   - Choose your Git provider (GitHub, GitLab, Bitbucket)
   - Select your repository
   - Choose the branch to deploy (usually `main` or `master`)

3. **Configure Build Settings**
   - Amplify will auto-detect the `amplify.yml` configuration
   - Verify the build settings:
     - Build command: `npm run build`
     - Output directory: `dist`
     - Node.js version: 18.x (recommended)

4. **Deploy**
   - Click "Save and deploy"
   - Amplify will build and deploy your app
   - Your app will be available at: `https://[app-id].amplifyapp.com`

#### Method 2: AWS CLI

1. **Install AWS CLI and Amplify CLI**
   ```bash
   npm install -g @aws-amplify/cli
   amplify configure
   ```

2. **Initialize Amplify in your project**
   ```bash
   amplify init
   ```

3. **Add hosting**
   ```bash
   amplify add hosting
   ```

4. **Deploy**
   ```bash
   amplify publish
   ```

### Environment Variables

If you need to set environment variables:

1. Go to your app in Amplify Console
2. Navigate to "Environment variables"
3. Add variables like:
   ```
   VITE_API_BASE_URL=https://your-api-gateway-url.amazonaws.com
   ```

### Custom Domain

1. In Amplify Console, go to "Domain management"
2. Click "Add domain"
3. Enter your domain name
4. Configure DNS settings as instructed

### Continuous Deployment

- **Automatic**: Every push to your main branch triggers a new deployment
- **Manual**: You can trigger builds manually from the Amplify Console
- **Preview**: Pull requests create preview deployments automatically

## API Configuration

The app uses these APIs:
- **Fetch OS Info**: `https://seviux19m7.execute-api.us-east-1.amazonaws.com/prod/fetch-os-info`
- **Parse CVE**: `https://seviux19m7.execute-api.us-east-1.amazonaws.com/prod/parse-cve`

## Build Configuration

The `amplify.yml` file configures:
- **Pre-build**: Install dependencies with `npm ci`
- **Build**: Create production build with `npm run build`
- **Artifacts**: Serve files from `dist` directory
- **Cache**: Cache `node_modules` for faster builds

## Troubleshooting

### Common Issues

1. **Build Fails**
   - Check Node.js version (use 18.x)
   - Verify all dependencies are in `package.json`
   - Check build logs in Amplify Console

2. **API Errors**
   - Verify API endpoints are accessible
   - Check CORS settings on your APIs
   - Ensure API Gateway is properly configured

3. **Styling Issues**
   - Verify Tailwind CSS is properly configured
   - Check that `index.css` includes Tailwind directives

### Support

For AWS Amplify issues:
- [AWS Amplify Documentation](https://docs.aws.amazon.com/amplify/)
- [Amplify Console](https://console.aws.amazon.com/amplify/)

## License

This project is part of the Autopatch Security system.
