/* ═══════════════════════════════════════════════════
   MAIN.JS — Portfolio Interactivity
   ═══════════════════════════════════════════════════ */

// ─── Name Transition: RV → Rahul AV ───
const heroName = document.getElementById('hero-name');
const startName = 'RV';
const fullName = 'Rahul AV';

function animateNameTransition() {
  // Phase 1: Show "RV" with a glow pulse
  heroName.style.opacity = '1';

  // After 1.5s, transition RV → Rahul AV
  setTimeout(() => {
    // Glitch-out effect
    heroName.classList.add('glitching');

    setTimeout(() => {
      // Build character-by-character
      heroName.textContent = '';
      heroName.setAttribute('data-text', fullName);

      const chars = fullName.split('');
      chars.forEach((char, i) => {
        const span = document.createElement('span');
        span.className = 'name-char';
        span.textContent = char === ' ' ? '\u00A0' : char;

        // Highlight R and V with green glow
        if ((i === 0 && char === 'R') || (i === 5 && char === 'A') || (i === 6 && char === 'V')) {
          // Keep R and V white, others white too
        }

        heroName.appendChild(span);

        // Stagger reveal each char
        setTimeout(() => {
          span.classList.add('visible');
        }, 80 + i * 100);
      });

      heroName.classList.remove('glitching');
    }, 300);
  }, 1800);
}

// Run name animation on load
animateNameTransition();

// ─── Typing Effect ───
const typedPhrases = [
  'build dApps.',
  'audit smart contracts.',
  'write Solidity.',
  'compete on Kaggle.',
  'secure the blockchain.',
  'ship full-stack apps.',
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedEl = document.getElementById('typed-text');

function typeEffect() {
  const currentPhrase = typedPhrases[phraseIndex];
  if (isDeleting) {
    typedEl.textContent = currentPhrase.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typedEl.textContent = currentPhrase.substring(0, charIndex + 1);
    charIndex++;
  }

  let speed = isDeleting ? 40 : 80;

  if (!isDeleting && charIndex === currentPhrase.length) {
    speed = 2000; // pause at end
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % typedPhrases.length;
    speed = 400;
  }

  setTimeout(typeEffect, speed);
}
typeEffect();

// ─── Particles ───
function createParticles() {
  const container = document.getElementById('particles');
  const count = 30;
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.classList.add('particle');
    p.style.left = Math.random() * 100 + '%';
    p.style.animationDuration = 6 + Math.random() * 10 + 's';
    p.style.animationDelay = Math.random() * 8 + 's';
    p.style.width = 1 + Math.random() * 3 + 'px';
    p.style.height = p.style.width;
    container.appendChild(p);
  }
}
createParticles();

// ─── Navbar Scroll ───
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ─── Mobile Nav Toggle ───
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('active');
  navMenu.classList.toggle('open');
});

// Close mobile menu on link click
navMenu.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('active');
    navMenu.classList.remove('open');
  });
});

// ─── Active Nav Highlighting ───
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-link:not(.nav-link--cta)');

function updateActiveLink() {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
}
window.addEventListener('scroll', updateActiveLink);

// ─── Scroll Reveal (IntersectionObserver) ───
const revealElements = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 80);
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
);
revealElements.forEach(el => revealObserver.observe(el));

// ─── Smooth Scroll for anchor links ───
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
