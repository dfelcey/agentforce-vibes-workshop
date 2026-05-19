# Workshop Site Updates

## Added Retrieval Option Guidance (2026-05-19)

### Step 2: Choose Retrieval Option
- ✅ Added section explaining Vibes retrieval options (A vs B)
- ✅ Shows exact Vibes prompt users will see
- ✅ Clear guidance to choose Option A (no-manifest)
- ✅ Explains WHY: faster, simpler, Vibes auto-determines components
- ✅ Explains Option B complexity: requires exact metadata type names

### Why This Matters
Users were getting confused when Vibes asked to choose between
options A and B. Now they know:
- What the prompt means
- Which option to choose (A)
- Why Option A is better for workshops
- When Option B might be used (advanced scenarios)

## Added Visual UI Diagram (2026-05-19)

### Step 2: Visual Guide with Red Highlights
- ✅ Interactive UI mockup of Agentforce Vibes interface
- ✅ Animated red pulsing highlight boxes on key areas
- ✅ Labeled callouts with arrows showing:
  1. Chat icon (💬) in Activity Bar
  2. Chat input box location
- ✅ Professional VS Code-style mockup
- ✅ Pure CSS implementation (no images needed)

### CSS Added
- UI diagram styles (.ui-diagram, .ui-mockup, .ui-highlight)
- Animated pulse effect for red boxes
- Label callouts with directional arrows
- Responsive chat panel and sidebar mockup

## Enhanced Loyalty Subagent Configuration (2026-05-19)

### Improved Subagent Description
- ✅ Added comprehensive description for the Loyalty subagent
- ✅ Includes routing keywords: loyalty, points, rewards, membership, tiers
- ✅ Explains the subagent's purpose and scope clearly
- ✅ Added TIP callout about why descriptions matter for routing

### Simplified Subagent Instructions
- ✅ Clear, concise instructions (9 lines total)
- ✅ Explains role: "You help customers with loyalty program questions"
- ✅ Action trigger: "When customer asks about points, use Get Loyalty Points"
- ✅ Includes program details: 1 point per dollar, 100 points = $1 off
- ✅ Friendly tone guidance
- ✅ Routing boundary: refer order questions elsewhere

### Configuration Flow Improvements
- ✅ Added step to open the newly created subagent
- ✅ Changed TIP callout to WARNING callout emphasizing importance
- ✅ Explains how instructions impact routing decisions

### Why Simple Instructions Work Better
- Easy for users to understand and modify
- Clear action trigger without over-engineering
- Covers essential behavior without complexity
- Workshop-appropriate (not production deep-dive)

## Improved Vibes Workflow (2026-05-19)

### Added Plan-First Approach
- ✅ Updated Step 3 prompts to ask Vibes to create a plan first
- ✅ Added "Review and Approve the Plan" section in Step 3
- ✅ Updated Step 6 prompts to follow same plan-first pattern
- ✅ Added explanation of why planning first is a best practice
- ✅ Included approval prompts ("Looks good, please proceed")

### Why Plan-First?
- Vibes creates better code when it plans the approach first
- Allows you to review architecture before implementation
- Ensures the solution matches your requirements
- Follows Agentforce Vibes best practices

### Prompts Now Include:
- Clear requirement bullets (inputs, outputs, fields)
- Explicit "Please create a plan first" instruction
- Separate approval step before code generation
- More structured and detailed requirements

## Major Content Redesign (2026-05-19)

### Redesigned Steps 5-7 to Build Loyalty Subagent
- ✅ **NEW Step 5:** Create a Loyalty Subagent with custom instructions
- ✅ **NEW Step 6:** Generate and deploy LoyaltyPointsAction using Vibes
- ✅ **NEW Step 7:** Test the Loyalty subagent and verify routing
- ✅ Removed outdated content about "Pronto Customer Service Agent" that doesn't exist
- ✅ Workshop now teaches subagent creation, not just adding actions to main agent
- ✅ Added comprehensive testing for multi-subagent routing

### Workshop Now Builds Two Features
1. **Order Status Action** (Steps 3-4) - Query Order__c records
2. **Loyalty Subagent** (Steps 5-7) - Dedicated subagent with LoyaltyPointsAction

### Updated Content
- Overview section updated to describe both features
- Navigation updated with new step titles
- Duration increased from ~30 to ~45 minutes
- Success section updated to reflect new accomplishments
- Next Steps section enhanced with subagent-specific challenges
- Prerequisites simplified (no reference to non-existent subagent)

### Files Updated
- `index.html` - Major restructuring of Steps 5-7, navigation, overview, success section
- `README.md` - Updated duration and added "What You'll Build" section
- `CHANGELOG.md` - This entry

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
