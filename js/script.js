const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  burger.classList.toggle('toggle');
});

// Close mobile menu when clicking a link
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    burger.classList.remove('toggle');
  });
});

// Lightbox functionality
const lightbox = document.querySelector('#lightbox');
const lightboxImage = document.querySelector('#lightbox-image');
const lightboxClose = document.querySelector('.lightbox-close');
const galerieItems = document.querySelectorAll('.galerie-item img');

galerieItems.forEach(item => {
  item.addEventListener('click', () => {
    lightboxImage.src = item.dataset.large;
    lightbox.classList.add('active');
  });
});

lightboxClose.addEventListener('click', () => {
  lightbox.classList.remove('active');
});

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.classList.remove('active');
  }
});

// Scroll animations avec Intersection Observer
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observer toutes les sections
document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});

// Animation des éléments USP avec délai
document.querySelectorAll('.usp-item').forEach((item, index) => {
  item.style.animationDelay = `${0.2 + (index * 0.1)}s`;
});

// Animation des témoignages avec délai
document.querySelectorAll('.testimonial').forEach((item, index) => {
  item.style.animationDelay = `${0.3 + (index * 0.15)}s`;
});

// Animation des produits avec délai
document.querySelectorAll('.product-item').forEach((item, index) => {
  item.style.animationDelay = `${0.2 + (index * 0.1)}s`;
});

// E-commerce functionality
document.addEventListener('DOMContentLoaded', function() {
  // Color selection
  document.querySelectorAll('.color-option').forEach(option => {
    option.addEventListener('click', function() {
      // Remove selected class from siblings
      this.parentNode.querySelectorAll('.color-option').forEach(sibling => {
        sibling.classList.remove('selected');
      });
      // Add selected class to clicked option
      this.classList.add('selected');
    });
  });

  // Style selection
  document.querySelectorAll('.style-option').forEach(option => {
    option.addEventListener('click', function() {
      // Remove selected class from siblings
      this.parentNode.querySelectorAll('.style-option').forEach(sibling => {
        sibling.classList.remove('selected');
      });
      // Add selected class to clicked option
      this.classList.add('selected');
    });
  });

  // Quantity controls
  document.querySelectorAll('.quantity-selector').forEach(selector => {
    const minusBtn = selector.querySelector('.minus');
    const plusBtn = selector.querySelector('.plus');
    const input = selector.querySelector('.qty-input');

    minusBtn.addEventListener('click', function() {
      let currentValue = parseInt(input.value);
      if (currentValue > 1) {
        input.value = currentValue - 1;
      }
    });

    plusBtn.addEventListener('click', function() {
      let currentValue = parseInt(input.value);
      if (currentValue < 99) {
        input.value = currentValue + 1;
      }
    });

    input.addEventListener('change', function() {
      let value = parseInt(this.value);
      if (value < 1) this.value = 1;
      if (value > 99) this.value = 99;
    });
  });

  // Add to cart functionality
  document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const productCard = this.closest('.product-card');
      const productName = productCard.querySelector('h3').textContent;
      const selectedSize = productCard.querySelector('.size-selector')?.value;
      const selectedColor = productCard.querySelector('.color-option.selected')?.dataset.color;
      const selectedStyle = productCard.querySelector('.style-option.selected')?.dataset.style;
      const quantity = productCard.querySelector('.qty-input').value;

      // Animation effect
      this.style.transform = 'scale(0.95)';
      setTimeout(() => {
        this.style.transform = 'scale(1)';
      }, 150);

      // Show confirmation (you can replace this with actual cart functionality)
      let message = `Produit ajouté!\n\n${productName}\n`;
      if (selectedSize) message += `Taille: ${selectedSize}\n`;
      if (selectedColor) message += `Couleur: ${selectedColor}\n`;
      if (selectedStyle) message += `Style: ${selectedStyle}\n`;
      message += `Quantité: ${quantity}`;

      // For demo purposes, show alert. In real implementation, this would add to cart
      alert(message);
    });
  });
});

// Smooth scroll pour les liens internes
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Animation du header au scroll
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrollTop > lastScrollTop && scrollTop > 100) {
    // Scroll vers le bas
    navbar.style.transform = 'translateY(-100%)';
  } else {
    // Scroll vers le haut
    navbar.style.transform = 'translateY(0)';
  }
  
  lastScrollTop = scrollTop;
});