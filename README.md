# Verdant Haven Invites

Prompt ini merangkum estetika "Tropical Green Garden" (Daun Palem, Rumput Hijau, Nuansa Hutan Tropis) dari gambar referensi Anda, dipadukan dengan standar animasi tingkat tinggi: kupu-kupu tropis terbang, dedaunan yang bergoyang, pendaran cahaya matahari (sunbeams), dan transisi pembukaan sinematik.

---

Act as an Expert Front-End Engineer and Senior Creative Developer. Build a highly modular, premium, mobile-first single-column web application for a Digital Wedding Invitation (Pernikahan 2027).

REFERENCE FOR UX/UI FLOW:
Target UX/UI Reference: https://byattari.com/sofa-akmal/?to=Silva&cat=2
Replicate the luxurious, smooth scroll-triggered animations and precise modular section spacing from this reference.

CRITICAL VISUAL REQUIREMENT:
The aesthetic MUST be "High-End Realistic Digital Illustration / Botanical Watercolor Art".
DO NOT use flat vectors. Use rich watercolor/realistic textures. The theme is "Tropical Green Garden": Lush Emerald Green, Sage Green, Warm Ivory (bg), and subtle Peach/Pink floral accents.

1. ADVANCED ECOSYSTEM ANIMATION CHOREOGRAPHY (COVER PAGE):
   Implement a living botanical ecosystem using nested `<motion.div>` from Framer Motion:

- SUNBEAMS (Environment): Magical rays of light filtering through the canopy. `animate={{ opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}`.
- PALM LEAVES (Foreground Flora - Top): Hanging from top corners, swaying gently. `transform-origin: top center`. `animate={{ rotate: [-2, 2, -2] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}`.
- LUSH GRASS (Foreground Flora - Bottom): Grass swaying at the bottom. `transform-origin: bottom center`. `animate={{ skewX: [-2, 2, -2] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}`.
- WINGED FAUNA (Tropical Butterfly): Flies into the frame and lands on a leaf. Parent (Flight): `animate={{ x: [-200, 50, -20, 0], y: [-100, 20, -10, 0], opacity: [0, 1, 1, 1] }} transition={{ duration: 5, ease: "easeOut" }}`. Child (Wing Flap): `animate={{ scaleX: [1, 0.3, 1] }} transition={{ duration: 0.4, repeat: 12 }}` (Flaps while flying, stops when landed).

2. CINEMATIC "BUKA UNDANGAN" TRANSITION (SMOOTH REVEAL):
   When the Sage Green "Buka Undangan" button is clicked, execute a deeply smooth, cinematic transition:

- The Cover Container scales up slightly, fades out, and slides up: `animate={{ y: "-100vh", opacity: 0, scale: 1.05 }} transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}`.
- The Content Sections below enter with a staggered, luxurious fade-in and slide-up (`y: [50, 0], opacity: [0, 1]`) delayed by 0.5s, creating a seamless magical entrance.

3. PAGE 1: COVER LAYERS (Absolute Positioning in h-screen overflow-hidden)

- LAYER 1: Background (Misty lush green forest illustration).
- LAYER 2: Environment (Animated Sunbeams).
- LAYER 3: Foreground Flora Bottom (Animated Lush Grass).
- LAYER 4: Foreground Flora Top (Animated Palm/Monstera leaves).
- LAYER 5: Fauna (Animated Tropical Butterfly).
- LAYER 6: UI (Glassmorphism white/ivory card). "THE WEDDING OF", "Gilang Dwi Amardan & Ayunda", "2027" in elegant Dark Green font. Solid Sage Green button "Buka Undangan".

4. LUXURIOUS CONTENT SECTIONS (MUST FOLLOW THIS EXACT ORDER WITH SCROLL ANIMATIONS)
   Every section MUST use `<motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 50 }} transition={{ duration: 0.8, ease: "easeOut" }} viewport={{ once: true, margin: "-100px" }}>`:

- PAGE 2: HOLY VERSE / OPENING QUOTE (White card framed with watercolor green leaves).
- PAGE 3: BRIDE & GROOM PROFILE (Portraits framed with realistic botanical leaves and subtle peach flowers).
- PAGE 4: LOVE STORY (Vertical timeline with a winding dashed line, dark Sage Green background).
- PAGE 5: EVENT DETAILS (White cards with elegant green typography, surrounded by lush foliage and peach flowers).
- PAGE 6: COUNTDOWN (White rounded boxes on a botanical background).
- PAGE 7: PHOTO / VIDEO GALLERY (Masonry grid with subtle green overlays on hover).
- PAGE 8: GIFT (TANDA KASIH) (3 Tabs: QRIS, Transfer, Kirim Kado. Clean white/green aesthetic).
- PAGE 9: RSVP & GUESTBOOK (CRITICAL UX CONSTRAINTS):
    a) Form: Minimalist green-outlined inputs.
    b) Main Grid View: Display the submitted wishes below the form.
    c) TEXT WRAP RULE: You MUST use `break-words` and `whitespace-pre-wrap` heavily on the message text. It MUST NEVER break the flex/grid layout or cause horizontal scrolling.
    d) PANGKAT/TITLE RULE: NEVER display guest ranks, academic titles, or prefix titles in the main table grid. Hide secondary data strictly in a 'Details' view to keep the UI exceptionally clean.

Generate the complete React code incorporating these ultra-advanced cinematic animations.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://verdant-whispers-invites.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/172a69ac-144a-47df-8e19-3c929f58cd23).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
