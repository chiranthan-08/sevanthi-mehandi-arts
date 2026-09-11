/**
 * Sevanthi Mehandi Arts - Interactive Script
 * Handles gallery lightbox, filtering, dynamic WhatsApp booking messages,
 * mobile drawer navigation, copy clipboard, and smooth scrolling.
 */

// Gallery Data (Genuine Photos Only)
const galleryData = [
  {
    src: 'assets/images/work-1-bridal-mandala.jpg',
    title: 'Sacred Palm Mandalas with Milestone Dates',
    category: 'Bridal & Auspicious',
    desc: 'Symmetric circular chakras, delicate fingertip capping, and customized auspicious dates & baby footprint motifs for sacred celebrations.',
    waText: 'Hi Sevanthi, I am inquiring about the Bridal Palm Mandala design with milestone dates shown on your website.'
  },
  {
    src: 'assets/images/work-2-feet-mandala.jpg',
    title: 'Royal Lotus Feet Mandalas',
    category: 'Feet Henna Art',
    desc: 'Finely balanced central mandala with arching lotus petals, delicate toe accents, and graceful curve symmetry complementing silver anklets.',
    waText: 'Hi Sevanthi, I am interested in your Royal Lotus Feet Mandala design shown on your website. Could you share pricing?'
  },
  {
    src: 'assets/images/work-3-forearm-art.jpg',
    title: 'Full Forearm Bridal Floral Jaal with Names',
    category: 'Bridal & Forearm',
    desc: 'Intricate multi-layered jharokha borders, peony florals, net grids (jaal), and personalized bride & groom script seamlessly embedded into wrist bands.',
    waText: 'Hi Sevanthi, I loved the Full Forearm Bridal Floral Jaal with personalized names on your website. What are your charges for this style?'
  },
  {
    src: 'assets/images/work-4-royal-arabic.jpg',
    title: 'Mughal Medallion & Calligraphic Forearm Art',
    category: 'Royal Arabic & Calligraphy',
    desc: 'Opulent central medallion arches with custom calligraphy crest, micro-dotted mesh, geometric bracelets, and fine shaded leaf trails.',
    waText: 'Hi Sevanthi, I would like to get pricing for the Mughal Medallion & Calligraphic Forearm artwork from your website.'
  }
];

let currentLightboxIndex = 0;

// --- Lightbox Logic ---
function openLightbox(index) {
  if (index < 0 || index >= galleryData.length) return;
  currentLightboxIndex = index;
  
  const modal = document.getElementById('lightbox-modal');
  const img = document.getElementById('lightbox-img');
  const title = document.getElementById('lightbox-title');
  const tag = document.getElementById('lightbox-tag');
  const desc = document.getElementById('lightbox-desc');
  const waBtn = document.getElementById('lightbox-wa-btn');

  const item = galleryData[currentLightboxIndex];
  img.src = item.src;
  img.alt = item.title;
  title.textContent = item.title;
  tag.textContent = item.category;
  desc.textContent = item.desc;
  waBtn.href = `https://wa.me/91740692233?text=${encodeURIComponent(item.waText)}`;

  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const modal = document.getElementById('lightbox-modal');
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function nextLightboxImage() {
  currentLightboxIndex = (currentLightboxIndex + 1) % galleryData.length;
  openLightbox(currentLightboxIndex);
}

function prevLightboxImage() {
  currentLightboxIndex = (currentLightboxIndex - 1 + galleryData.length) % galleryData.length;
  openLightbox(currentLightboxIndex);
}

// Close lightbox on backdrop click
document.addEventListener('click', (e) => {
  const modal = document.getElementById('lightbox-modal');
  if (e.target === modal) {
    closeLightbox();
  }
});

// Keyboard controls
document.addEventListener('keydown', (e) => {
  const modal = document.getElementById('lightbox-modal');
  if (modal.classList.contains('active')) {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextLightboxImage();
    if (e.key === 'ArrowLeft') prevLightboxImage();
  }
});

// --- Gallery Category Filtering ---
document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const filterValue = btn.getAttribute('data-filter');

      galleryItems.forEach(item => {
        const category = item.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          item.style.display = 'block';
          item.style.animation = 'fadeIn 0.4s ease forwards';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // Mobile Navigation Toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.contains('open');
      if (isOpen) {
        mobileMenu.classList.remove('open');
        mobileToggle.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      } else {
        mobileMenu.classList.add('open');
        mobileToggle.classList.add('active');
        mobileToggle.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
      }
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        mobileToggle.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  // Active Link Highlighter on Scroll
  const sections = document.querySelectorAll('section[id], header[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let currentSection = '';
    const scrollPos = window.pageYOffset + 120;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  });
});

// --- Dynamic WhatsApp Inquiry Builder ---
function handleInquirySubmit(event) {
  event.preventDefault();

  const name = document.getElementById('client-name').value.trim();
  const eventType = document.getElementById('event-type').value;
  const eventDate = document.getElementById('event-date').value;
  const coverage = document.getElementById('coverage-type').value;
  const location = document.getElementById('location-note').value.trim() || 'Tumakuru';
  const notes = document.getElementById('additional-notes').value.trim();

  let message = `Namaste Sevanthi! 🙏\n`;
  message += `I am visiting your website (*Sevanthi Mehandi Arts*) and would like to request price details & date availability for mehandi services:\n\n`;
  message += `👤 *Client Name:* ${name}\n`;
  message += `🎉 *Occasion:* ${eventType}\n`;
  if (eventDate) {
    message += `📅 *Expected Date:* ${eventDate}\n`;
  }
  message += `✋ *Coverage Desired:* ${coverage}\n`;
  message += `📍 *Venue / Location:* ${location}\n`;
  if (notes) {
    message += `✍️ *Design Notes:* ${notes}\n`;
  }
  message += `\nPlease let me know your package pricing and whether this date is available. Thank you!`;

  const waUrl = `https://wa.me/91740692233?text=${encodeURIComponent(message)}`;
  
  // Open in new tab
  window.open(waUrl, '_blank', 'noopener,noreferrer');
}

// --- Quick Copy to Clipboard with Toast ---
function copyToClipboard(text, successMsg = 'Copied to clipboard!') {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(successMsg);
    }).catch(() => {
      fallbackCopy(text, successMsg);
    });
  } else {
    fallbackCopy(text, successMsg);
  }
}

function fallbackCopy(text, successMsg) {
  const tempInput = document.createElement('input');
  tempInput.value = text;
  document.body.appendChild(tempInput);
  tempInput.select();
  try {
    document.execCommand('copy');
    showToast(successMsg);
  } catch (err) {
    showToast('Failed to copy');
  }
  document.body.removeChild(tempInput);
}

function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2600);
}
