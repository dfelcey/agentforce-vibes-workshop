# Screenshots Needed for Step 2

## Screenshot 1: Agentforce Chat Icon
**Filename:** `assets/vibes-chat-icon.webp`

**What to capture:**
- The Activity Bar on the left side of Agentforce Vibes
- Show all the icons in the Activity Bar
- Make sure the Agentforce/Chat icon is visible (💬 or similar)
- Crop to just show the Activity Bar icons clearly

**Annotations needed:**
- Add a red box around the Agentforce/Chat icon
- Add a red arrow or label pointing to it saying "Click here"

---

## Screenshot 2: Chat Input Box
**Filename:** `assets/vibes-chat-input.webp`

**What to capture:**
- The Agentforce chat panel on the right side
- Show the chat header ("Agentforce" title)
- Show the input box at the bottom where users type prompts
- Include enough context to show this is the chat panel

**Annotations needed:**
- Add a red box around the input text field
- Add a red arrow or label saying "Type prompt here"

---

## Screenshot 3: Full Vibes Interface (Optional)
**Filename:** `assets/vibes-interface-full.webp`

**What to capture:**
- Full Agentforce Vibes window
- Show Activity Bar on left
- Show chat panel on right
- This gives users context for the overall layout

**Annotations needed:**
- Red box around chat icon in Activity Bar
- Red box around chat input field
- Numbers: "1" and "2" to show the sequence

---

## How to Add Red Boxes

### Option 1: Using Preview (Mac)
1. Open image in Preview
2. Click the Markup toolbar button
3. Select Rectangle tool
4. Set stroke to red, thickness to 3-4px
5. Set fill to transparent
6. Draw boxes around the target areas
7. Add text annotations if needed

### Option 2: Using Any Image Editor
- Photoshop, GIMP, Pixelmator, etc.
- Use red color: #ef4444
- Box border: 3-4px thick
- No fill (transparent inside)
- Optional: add drop shadow for visibility

---

## Once Screenshots Are Ready

Place them in the `assets/` folder and update the workshop:
```bash
# Add the new images
git add assets/vibes-chat-icon.webp
git add assets/vibes-chat-input.webp

# Commit
git commit -m "Add annotated Vibes UI screenshots"
git push
```

Then let me know and I'll update the HTML to use these images!
