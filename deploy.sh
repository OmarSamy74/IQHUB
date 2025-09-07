#!/bin/bash

# Barça Innovation Hub - Netlify Deployment Script

echo "🚀 Starting deployment to Netlify..."

# Build the project
echo "📦 Building the project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "📁 Static files generated in 'out' directory"
    echo ""
    echo "🌐 Ready for deployment!"
    echo ""
    echo "Next steps:"
    echo "1. Go to https://netlify.com"
    echo "2. Drag and drop the 'out' folder to deploy"
    echo "3. Or connect your Git repository for automatic deployments"
    echo ""
    echo "Your site will be live at: https://your-site-name.netlify.app"
else
    echo "❌ Build failed! Please check the errors above."
    exit 1
fi
