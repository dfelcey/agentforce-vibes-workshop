# 🚀 Quick Start Guide

## Three Ways to Use This Workshop

### 1️⃣ View the Workshop Site Locally

**Test before deploying:**

```bash
cd /Users/davefelcey/Documents/projects/demo/vibes-site
python3 -m http.server 8000
```

Open: **http://localhost:8000**

---

### 2️⃣ Deploy Workshop Site to GitHub Pages

**Share the workshop with others:**

```bash
cd /Users/davefelcey/Documents/projects/demo/vibes-site

# Initialize and push
git init
git add .
git commit -m "Deploy Agentforce Vibes workshop"
git remote add origin https://github.com/YOUR_USERNAME/agentforce-vibes-workshop.git
git push -u origin main
```

**Then:** Enable GitHub Pages in repo Settings → Pages → Source: `main` branch

**Your workshop will be live at:**  
`https://YOUR_USERNAME.github.io/agentforce-vibes-workshop/`

---

### 3️⃣ Export Your Vibes Code to GitHub

**After completing the workshop, publish your generated code:**

```bash
# Authenticate with Salesforce
sf org login web --alias my-vibes-org

# Create project and retrieve code
sf project generate --name pronto-extension
cd pronto-extension
sf project retrieve start --metadata ApexClass:OrderStatusAction --target-org my-vibes-org

# Push to GitHub
git init
git add .
git commit -m "Vibes-generated OrderStatusAction for Pronto"
git remote add origin https://github.com/YOUR_USERNAME/pronto-extension.git
git push -u origin main
```

**Full guide:** See [DEPLOY-FROM-VIBES.md](DEPLOY-FROM-VIBES.md)

---

## 📋 What's Included

| File | Purpose |
|------|---------|
| `index.html` | Complete workshop with 6 exercises |
| `styles.css` | Salesforce-style design system |
| `script.js` | Interactive features (scroll, copy buttons) |
| `assets/` | Official Salesforce workshop screenshots |
| `README.md` | Complete documentation |
| `DEPLOY-FROM-VIBES.md` | Export code to GitHub guide |
| `CHANGELOG.md` | Update history |

---

## ✨ Workshop Features

- ✅ 6 progressive exercises (setup → build → deploy → test)
- ✅ Real screenshots from Salesforce Vibes Workshop
- ✅ Code examples with copy buttons
- ✅ TIP callouts throughout
- ✅ Responsive design (mobile/tablet/desktop)
- ✅ Smooth scrolling navigation
- ✅ ~30 minute completion time

---

## 🎯 Learning Path

```
1. Launch Vibes in Salesforce
   ↓
2. Configure Project (pull metadata)
   ↓
3. Generate Apex Action (natural language)
   ↓
4. Deploy to Org
   ↓
5. Configure in Agent Builder
   ↓
6. Test in Preview
   ↓
7. Export to GitHub (optional)
```

---

## 🆘 Need Help?

- **Workshop site issues**: Check [README.md](README.md)
- **Deploying from Vibes**: Read [DEPLOY-FROM-VIBES.md](DEPLOY-FROM-VIBES.md)
- **Salesforce questions**: Visit [Trailblazer Community](https://trailblazer.salesforce.com)
- **GitHub Pages**: See [GitHub Pages Docs](https://docs.github.com/en/pages)

---

## 📞 Support Channels

- [Trailblazer Community](https://trailblazer.salesforce.com)
- [Salesforce Developer Forums](https://developer.salesforce.com/forums)
- [Agentforce Documentation](https://developer.salesforce.com/docs/einstein/genai/guide/agentforce-vibes.html)
- [Salesforce DX Setup Guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_setup.meta/)

---

**Built with ❤️ for the Salesforce Developer Community**
