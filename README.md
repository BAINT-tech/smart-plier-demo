# Smart Shock-Suppressing Plier Demo

## Concept
This is a **zero-budget prototype demo** of a smart plier that:  
- Measures voltage and current  
- Protects the user from electric shock using embedded suppression concepts  
- Sends readings to a smartphone app (mocked in this demo)  

**Goal:** Show how the device works conceptually without any hardware.

---

## Demo Features
- **Interactive app mockup:** Click "Generate Reading" to see simulated voltage, current, and safety alerts.  
- **Shock alert simulation:** Red warning when readings exceed safe thresholds.  
- **Color-coded status:**  
  - Green = Safe  
  - Orange = Caution  
  - Red = Shock Alert  

---

## How to Test
1. Open [GitHub Pages URL] on your phone or browser  
2. Click **Generate Reading** button  
3. Observe voltage/current readings and status changes  
4. Visualizes how a real plier would interact with a smartphone  

---

## Files in This Repo
- `/images/sketches.png` → concept illustration of plier + phone  
- `index.html` → main interactive app page  
- `style.css` → app styles  
- `script.js` → simulates live readings and alerts  

---

## Next Steps
- Add a **history log** to record past readings  
- Expand **mockup to include multiple app screens**  
- Build **functional prototype** with microcontroller when funding is available
