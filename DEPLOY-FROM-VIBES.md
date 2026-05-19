# Publishing from Agentforce Vibes to GitHub

A complete guide for exporting your Vibes-generated code from Salesforce and publishing it to GitHub.

## 🔄 Overview

When you build with Agentforce Vibes inside Salesforce, your code lives in your org. To version control it, deploy it elsewhere, or publish documentation, you need to export it to GitHub.

## 📋 Prerequisites

- Salesforce CLI (`sf`) installed on your local machine
- GitHub account
- Git installed locally
- Access to your Salesforce org with Agentforce Vibes

## 🚀 Step-by-Step Guide

### Step 1: Set Up Salesforce CLI Authentication

First, authenticate the Salesforce CLI with your org where you used Vibes:

```bash
# Authenticate with your org (opens browser for login)
sf org login web --alias my-vibes-org

# Or if you have a DevHub
sf org login web --set-default-dev-hub --alias my-hub
```

**Verify connection:**
```bash
sf org list
```

You should see your org listed with the alias you created.

---

### Step 2: Create a Local Salesforce DX Project

Create a new SFDX project structure on your local machine:

```bash
# Create project directory
mkdir pronto-vibes-extension
cd pronto-vibes-extension

# Initialize Salesforce DX project
sf project generate --name pronto-vibes-extension

# Navigate into the project
cd pronto-vibes-extension
```

**Project structure created:**
```
pronto-vibes-extension/
├── force-app/
│   └── main/
│       └── default/
├── sfdx-project.json
├── config/
└── scripts/
```

---

### Step 3: Retrieve Metadata from Your Org

Pull the code you created in Vibes from your Salesforce org:

```bash
# Retrieve specific components (your Apex classes)
sf project retrieve start --metadata ApexClass:OrderStatusAction --target-org my-vibes-org

# Or retrieve specific objects and configs
sf project retrieve start --metadata CustomObject:Order__c --target-org my-vibes-org

# Or retrieve ALL metadata (if you want everything)
sf project retrieve start --metadata ApexClass,CustomObject,AiApplicationConfig --target-org my-vibes-org
```

**Alternative: Retrieve by manifest file**

Create a `package.xml` file to specify exactly what to retrieve:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>OrderStatusAction</members>
        <members>OrderStatusActionTest</members>
        <name>ApexClass</name>
    </types>
    <types>
        <members>Order__c</members>
        <name>CustomObject</name>
    </types>
    <types>
        <members>Pronto_Customer_Service_Agent</members>
        <name>AiApplicationConfig</name>
    </types>
    <version>60.0</version>
</Package>
```

Then retrieve using the manifest:
```bash
sf project retrieve start --manifest package.xml --target-org my-vibes-org
```

**Verify retrieved files:**
```bash
# Check what was retrieved
ls -la force-app/main/default/classes/
ls -la force-app/main/default/objects/
```

---

### Step 4: Initialize Git Repository

Set up version control for your retrieved code:

```bash
# Initialize git
git init

# Create .gitignore for Salesforce projects
cat > .gitignore << 'EOF'
# Salesforce
.sfdx/
.sf/
.localdevserver/
config/*.org
.vscode/
.idea/

# Logs
*.log

# OS
.DS_Store
Thumbs.db

# Dependencies
node_modules/
EOF

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Vibes-generated OrderStatusAction for Pronto agent"
```

---

### Step 5: Create GitHub Repository

**Option A: Via GitHub Web UI**

1. Go to https://github.com/new
2. Repository name: `pronto-vibes-extension`
3. Description: "Custom Apex actions for Pronto agent built with Agentforce Vibes"
4. Choose Public or Private
5. **Do NOT** initialize with README (you already have files)
6. Click "Create repository"

**Option B: Via GitHub CLI (if installed)**

```bash
gh repo create pronto-vibes-extension --public --source=. --remote=origin --push
```

---

### Step 6: Push to GitHub

Link your local repo to GitHub and push:

```bash
# Add GitHub remote (use the URL from step 5)
git remote add origin https://github.com/YOUR_USERNAME/pronto-vibes-extension.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Verify:**
Visit `https://github.com/YOUR_USERNAME/pronto-vibes-extension` to see your code!

---

### Step 7: Add Documentation

Create a README for your code repository:

```bash
cat > README.md << 'EOF'
# Pronto Agent Extension - Order Status Action

Custom Apex action built with Agentforce Vibes to extend the Pronto Customer Service agent with order lookup capabilities.

## Features

- **OrderStatusAction** - Invocable Apex class for retrieving order status
- SOQL query against Order__c custom object
- Returns order status and estimated delivery date
- 100% test coverage with OrderStatusActionTest

## Deployment

### Deploy to Sandbox
```bash
sf project deploy start --target-org sandbox-alias
```

### Deploy to Production
```bash
sf project deploy start --target-org production-alias --test-level RunLocalTests
```

## Agent Configuration

Add to Pronto Customer Service subagent in Agentforce Builder:
1. Setup → Agentforce Agents → Pronto Customer Service Agent
2. New Action → Apex → OrderStatusAction
3. Configure as "Get Order Status"

## Built With

- Agentforce Vibes (natural language to code)
- Salesforce DX
- Apex

## License

For use with Salesforce Pronto agents.
EOF

git add README.md
git commit -m "Add documentation"
git push
```

---

## 🌐 Publishing the Workshop Site to GitHub Pages

If you also want to publish THIS workshop documentation site:

### Option 1: Same Repository (Docs Folder)

```bash
# From your local machine
cd /Users/davefelcey/Documents/projects/demo/vibes-site

# Copy workshop files to your project docs folder
mkdir -p ~/pronto-vibes-extension/docs
cp -r * ~/pronto-vibes-extension/docs/

# Commit and push
cd ~/pronto-vibes-extension
git add docs/
git commit -m "Add workshop documentation site"
git push

# Enable GitHub Pages for /docs folder
# Go to Settings → Pages → Source: main branch → /docs folder
```

### Option 2: Separate Repository (Recommended)

```bash
# Create separate repo for workshop
cd /Users/davefelcey/Documents/projects/demo/vibes-site

git init
git add .
git commit -m "Initial commit: Agentforce Vibes workshop site"

# Create on GitHub
gh repo create agentforce-vibes-workshop --public --source=. --remote=origin --push

# Enable GitHub Pages
# Go to Settings → Pages → Source: main branch → / (root)
```

**Your workshop will be live at:**
`https://YOUR_USERNAME.github.io/agentforce-vibes-workshop/`

---

## 🔄 Ongoing Workflow

### When You Make Changes in Vibes

1. **Make changes in Agentforce Vibes** in Salesforce
2. **Retrieve updates** to your local project:
   ```bash
   sf project retrieve start --metadata ApexClass:OrderStatusAction --target-org my-vibes-org
   ```
3. **Review changes:**
   ```bash
   git status
   git diff
   ```
4. **Commit and push:**
   ```bash
   git add .
   git commit -m "Update: Enhanced error handling in OrderStatusAction"
   git push
   ```

### When You Need to Deploy to Another Org

```bash
# Authenticate with target org
sf org login web --alias target-org

# Deploy your code
sf project deploy start --target-org target-org

# Validate before deploying to production
sf project deploy validate --target-org production-org --test-level RunLocalTests
```

---

## 🛠️ Troubleshooting

### Issue: "This directory does not contain a valid Salesforce DX project"

**Solution:**
```bash
# Ensure you're in the project directory
cd pronto-vibes-extension

# Verify sfdx-project.json exists
ls sfdx-project.json

# If missing, regenerate:
sf project generate --name pronto-vibes-extension
```

### Issue: "No Salesforce org is authenticated"

**Solution:**
```bash
# List authenticated orgs
sf org list

# Re-authenticate
sf org login web --alias my-vibes-org
```

### Issue: "Unable to retrieve metadata"

**Solution:**
```bash
# Check metadata API name (case-sensitive)
sf org list metadata --metadata-type ApexClass --target-org my-vibes-org

# Use exact names from output
sf project retrieve start --metadata ApexClass:OrderStatusAction --target-org my-vibes-org
```

### Issue: Push rejected (non-fast-forward)

**Solution:**
```bash
# Pull latest changes first
git pull origin main --rebase

# Then push
git push
```

---

## 📚 Additional Resources

### Salesforce CLI Commands
- [Salesforce CLI Setup Guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_setup.meta/sfdx_setup/)
- [Salesforce CLI Command Reference](https://developer.salesforce.com/docs/atlas.en-us.sfdx_cli_reference.meta/)
- [Metadata API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.api_meta.meta/api_meta/)

### Git & GitHub
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub CLI](https://cli.github.com/)
- [Pro Git Book](https://git-scm.com/book/en/v2)

### Best Practices
- Commit frequently with descriptive messages
- Use branches for experimental features
- Tag releases: `git tag -a v1.0.0 -m "Initial release"`
- Keep README updated with deployment instructions

---

## 🎯 Quick Reference

```bash
# 1. Authenticate
sf org login web --alias my-org

# 2. Create project
sf project generate --name my-project && cd my-project

# 3. Retrieve code from Vibes org
sf project retrieve start --metadata ApexClass --target-org my-org

# 4. Initialize Git
git init && git add . && git commit -m "Initial commit"

# 5. Push to GitHub
git remote add origin https://github.com/USER/REPO.git
git push -u origin main

# 6. Deploy to another org
sf org login web --alias target-org
sf project deploy start --target-org target-org
```

---

**Questions?** Open an issue on GitHub or ask in the Salesforce Trailblazer Community!
