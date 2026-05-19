# Workshop Site Updates

## Content Corrections (2026-05-19)

### Fixed Pronto Agent Structure
- ✅ Removed incorrect references to "Customer Service subagent"
- ✅ Updated instructions to add actions directly to Pronto agent (matching standard Agentforce Builder Workshop)
- ✅ Changed "Pronto Customer Service Agent" to "Pronto Agent" throughout
- ✅ Updated agent configuration steps to reflect correct workflow
- ✅ Modified testing section to reference Pronto agent directly

### Files Updated
- `index.html` - 8 references corrected across Overview, Prerequisites, Step 3, Step 5, and Step 6
- `DEPLOY-FROM-VIBES.md` - 2 references corrected in README section

### Changes Summary
- Prerequisites now require "A configured Pronto agent" (not "with Customer Service subagent")
- Step 3 prompts for "Pronto agent configuration" (not "Customer Service subagent")
- Step 5 adds actions to "Pronto Agent" directly via Actions tab
- Step 6 testing validates "Pronto agent" recognition (not routing to subagent)

# Workshop Site Updates

## Visual Improvements

### Images & Screenshots
- ✅ Downloaded 4 official workshop images from Salesforce Vibes Workshop
- ✅ Added screenshots showing:
  - Setup menu with Agentforce Vibes option
  - Terms and conditions acceptance screen
  - Explorer sidebar interface
  - Org Browser with cloud icon
- ✅ Images styled with rounded corners, borders, and subtle shadows
- ✅ Responsive image sizing (full-width and small variants)

### Icons & Visual Elements
- ✅ Created Salesforce-style logo icon (cloud and star pattern)
- ✅ Updated all "TIP" callouts with info icon (matching workshop style)
- ✅ Changed TIP callout background to amber/yellow (#fef3c7) like official workshop
- ✅ Consistent icon styling throughout
- ✅ Maintained warning and success icon styles

### Layout Refinements
- ✅ Added border dividers between major content sections
- ✅ Improved spacing and visual hierarchy
- ✅ Updated page title to "Agentforce Vibes Workshop"
- ✅ Refined step headers with cleaner circular badges
- ✅ Enhanced screenshot captions and inline icons

## Content Structure
- Workshop-style progressive learning
- 6 clear exercises with screenshots
- Real Salesforce workshop images
- Professional callouts and tips
- Comprehensive testing section

## Files Added
- `/assets/launch-vibes.webp` - Setup menu screenshot
- `/assets/meet-agentforce.webp` - Welcome/terms screen
- `/assets/sidebar-explorer.webp` - Explorer icon
- `/assets/sidebar-org-browser.webp` - Org Browser with cloud icon

## Preview
View at: http://localhost:8000

## Deploy to GitHub Pages
```bash
git init
git add .
git commit -m "Complete Agentforce Vibes workshop site with images"
git remote add origin YOUR_REPO_URL
git push -u origin main
```

Then enable GitHub Pages in repository settings.
