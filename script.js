// 🌐 Toggle Navigation Menu
function toggleMenu() {
  const nav = document.querySelector('nav ul');
  nav.classList.toggle('active');
}

// 🌙 Toggle Dark Mode
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

// 📧 Email Validation Helper
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// 💡 Lightbox Modal
function openLightbox(src) {
  const modal = document.createElement('div');
  modal.classList.add('lightbox');
  modal.innerHTML = `
    <div class="lightbox-content">
      <img src="${src}" alt="Project Image" />
      <span class="close">&times;</span>
    </div>
  `;
  document.body.appendChild(modal);

  modal.querySelector('.close').addEventListener('click', () => {
    modal.remove();
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.remove();
    }
  });
}

// 🧠 Scroll-triggered Section Animation
function revealSectionsOnScroll() {
  document.querySelectorAll('section').forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section.classList.add('visible');
    }
  });
}

// 🚀 DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  // 🍔 Hamburger Menu
  const hamburger = document.getElementById('hamburger');
  if (hamburger) {
    hamburger.addEventListener('click', toggleMenu);
  }

  // 🌙 Dark Mode Toggle
  const darkToggle = document.getElementById('dark-toggle');
  if (darkToggle) {
    darkToggle.addEventListener('click', toggleDarkMode);
  }

  // 🧭 Smooth Scrolling
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // 🖼️ Lightbox for Project Images
  const images = document.querySelectorAll('#projects img');
  images.forEach(img => {
    img.addEventListener('click', () => {
      openLightbox(img.src);
    });
  });

  // 📬 Contact Form Validation
  const form = document.querySelector('#contact form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      alert('Please fill in all fields.');
      return;
    }

    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    alert('Message sent successfully!');
    form.reset();
  });

  // 🧠 Reveal Sections on Load
  revealSectionsOnScroll();
});

// 🧠 Reveal Sections on Scroll
window.addEventListener('scroll', revealSectionsOnScroll);
