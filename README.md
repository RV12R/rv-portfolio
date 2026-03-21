# Rahul AV — Personal Portfolio

A minimalist, dark, cyberpunk-themed portfolio website for **Rahul AV**, Full Stack Engineer & Web3 Security Researcher.

![Portfolio Preview](./public/preview.png) *(Add a screenshot here later)*

## 🚀 Tech Stack

This project is intentionally lightweight and blisteringly fast. It uses a **Vanilla JS + Vite** stack without any heavy frameworks.

- **Build Tool:** [Vite](https://vitejs.dev/)
- **Structure:** HTML5 (Single Page Application structure)
- **Styling:** Vanilla CSS3 (Custom Cyberpunk Green + White Design System)
- **Interactivity:** Vanilla JavaScript (`IntersectionObserver` for scroll-reveal, custom typing effect, dynamic particle generator)
- **Typography:** Google Fonts (Space Grotesk & JetBrains Mono)
- **Deployment:** Vercel (Static HTML/CSS/JS export)

## 🛠️ How to Run Locally

You only need Node.js installed on your machine.

1. **Clone the repository**
   ```bash
   git clone https://github.com/RV12R/rv-portfolio.git
   cd rv-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   *(Note: The only dependency is Vite for the dev server and build process)*

3. **Start the development server**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173`.

4. **Build for production**
   ```bash
   npm run build
   ```
   This generates a highly optimized static bundle in the `dist/` folder (total size ~50KB).

## 📜 How to Add Certificates

The "Certifications" section currently has 12 placeholders labeled `cert1` through `cert12`. To add your real certificates:

1. Upload your certificate images (e.g., `cert1.png`, `cert2.jpg`) into the `public/` folder in this repository.
2. Open `index.html`.
3. Locate the `<!-- ═══════════════ CERTIFICATIONS ═══════════════ -->` section (around line 384).
4. Replace the placeholder `<div>` tags with `<img>` tags pointing to your images.

**Example Change:**
*Before:*
```html
<div class="cert-card reveal">
  <div class="cert-placeholder">cert1</div>
  <span class="cert-name">Certificate 1</span>
</div>
```

*After:*
```html
<div class="cert-card reveal">
  <img class="cert-placeholder" src="/cert1.png" alt="Name of Certificate" style="object-fit: cover;" />
  <span class="cert-name">Code4rena Audit Completion</span>
</div>
```

## 🌐 How to Deploy to Vercel

Deployment is completely automated via Vercel:

1. Push this code to a public or private GitHub repository.
2. Log into [Vercel](https://vercel.com/) and click **Add New... > Project**.
3. Import your GitHub repository.
4. Vercel will automatically detect that you're using Vite.
5. Click **Deploy**. Your site will be live in seconds.

## 🤝 Contact

- GitHub: [@RV12R](https://github.com/RV12R)
- Email: [itsrahulav@gmail.com](mailto:itsrahulav@gmail.com)

---
*Designed and built by Rahul AV.*
