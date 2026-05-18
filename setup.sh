#!/bin/bash

echo "==================================="
echo "GatePro Website Setup Script"
echo "==================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "ERROR: Node.js is not installed. Please install Node.js 16+ first."
    echo "Visit: https://nodejs.org/"
    exit 1
fi

NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 16 ]; then
    echo "ERROR: Node.js version 16+ required. Current version: $(node -v)"
    exit 1
fi

echo "Node.js version: $(node -v)"
echo ""

# Create React app
echo "Step 1: Creating React app..."
npx create-react-app gatepro-website
cd gatepro-website

# Install dependencies
echo ""
echo "Step 2: Installing dependencies..."
npm install react-router-dom framer-motion lucide-react react-intersection-observer react-helmet-async

# Install Tailwind
echo ""
echo "Step 3: Installing Tailwind CSS..."
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

echo ""
echo "==================================="
echo "Setup Complete!"
echo "==================================="
echo ""
echo "Next steps:"
echo "1. Copy all source files from the provided package into your project"
echo "2. Replace src/ folder contents"
echo "3. Replace public/index.html"
echo "4. Update package.json, tailwind.config.js, postcss.config.js"
echo "5. Run: npm start"
echo ""
echo "Your website will be available at: http://localhost:3000"
