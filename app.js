// Portfolio Website JavaScript

// Application data
const portfolioData = {
  personalInfo: {
    name: "Alex Johnson",
    titles: ["Full Stack Developer", "UI/UX Designer", "Creative Coder"],
    location: "San Francisco, CA",
    email: "alex@example.com",
    phone: "+1 (555) 123-4567",
    bio: "Passionate developer with a love for creating beautiful, functional web experiences. I combine technical expertise with creative design to build applications that users love.",
    yearsExperience: 5,
    projectsCompleted: 50,
    clientsSatisfied: 25
  },
  skills: [
    {
      category: "Frontend",
      technologies: ["React", "Vue.js", "TypeScript", "HTML5", "CSS3", "Sass"]
    },
    {
      category: "Backend", 
      technologies: ["Node.js", "Python", "Express", "FastAPI", "PostgreSQL", "MongoDB"]
    },
    {
      category: "Tools",
      technologies: ["Git", "Docker", "AWS", "Figma", "Webpack", "Jest"]
    },
    {
      category: "Design",
      technologies: ["UI/UX", "Photoshop", "Illustrator", "Prototyping", "Wireframing"]
    }
  ],
  projects: [
    {
      title: "E-Commerce Platform",
      description: "A modern, scalable e-commerce solution with advanced features like AI-powered recommendations, real-time inventory, and seamless payment processing.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "AI/ML"],
      category: "fullstack",
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Creative Portfolio Website",
      description: "An interactive portfolio site featuring 3D animations, particle systems, and creative transitions to showcase design work.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop",
      technologies: ["Three.js", "GSAP", "HTML5", "CSS3"],
      category: "frontend",
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Task Management App",
      description: "A collaborative project management tool with real-time updates, team chat, file sharing, and advanced analytics dashboard.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      technologies: ["Vue.js", "Express", "Socket.io", "PostgreSQL"],
      category: "fullstack",
      liveUrl: "#", 
      githubUrl: "#",
      featured: false
    },
    {
      title: "Weather Dashboard",
      description: "A beautiful weather application with interactive maps, detailed forecasts, and location-based recommendations.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
      technologies: ["React", "D3.js", "API Integration", "CSS3"],
      category: "frontend",
      liveUrl: "#",
      githubUrl: "#", 
      featured: false
    },
    {
      title: "Social Media Analytics",
      description: "A comprehensive analytics platform for social media management with data visualization and automated reporting features.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      technologies: ["Python", "FastAPI", "React", "Chart.js"],
      category: "fullstack",
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Mobile Fitness App",
      description: "A cross-platform mobile app for fitness tracking with workout plans, progress monitoring, and social features.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop",
      technologies: ["React Native", "Firebase", "Redux", "Node.js"],
      category: "mobile",
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    }
  ]
};

// DOM Elements
let elements = {};

// Smooth scrolling variables
let isScrolling = false;
let scrollTimeout;

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
  // Cache DOM elements
  cacheElements();
  
  // Initialize all features
  initializeApp();
});

// Cache frequently used DOM elements
function cacheElements() {
  elements = {
    loadingScreen: document.getElementById('loading-screen'),
    topNav: document.getElementById('topNav'),
    navLinks: document.querySelectorAll('.nav-link'),
    mobileNavLinks: document.querySelectorAll('.mobile-nav-link'),
    mobileMenuToggle: document.getElementById('mobileMenuToggle'),
    mobileNavMenu: document.getElementById('mobileNavMenu'),
    themeToggle: document.getElementById('themeToggle'),
    nameText: document.getElementById('nameText'),
    rotatingTitle: document.getElementById('rotatingTitle'),
    statNumbers: document.querySelectorAll('.stat-number'),
    projectsGrid: document.getElementById('projectsGrid'),
    filterBtns: document.querySelectorAll('.filter-btn'),
    contactForm: document.getElementById('contactForm'),
    projectModal: document.getElementById('projectModal'),
    modalOverlay: document.getElementById('modalOverlay'),
    modalClose: document.getElementById('modalClose'),
    modalBody: document.getElementById('modalBody'),
    particlesBg: document.getElementById('particles-bg')
  };
}

// Initialize all app features
function initializeApp() {
  // Show loading screen briefly
  setTimeout(() => {
    hideLoadingScreen();
  }, 1500);
  
  // Initialize features
  initializeParticles();
  initializeTopNavigation();
  initializeMobileNavigation();
  initializeTypewriter();
  initializeRotatingTitle();
  initializeStatCounters();
  initializeScrollAnimations();
  initializeProjects();
  initializeContactForm();
  initializeThemeToggle();
  initializeModal();
  
  // Add enhanced smooth scrolling
  initializeSmoothScrolling();
  
  // Initialize scroll effects
  initializeScrollEffects();
  
  // Initialize brand logo click
  initializeBrandClick();
}

// Loading screen
function hideLoadingScreen() {
  if (elements.loadingScreen) {
    elements.loadingScreen.classList.add('hidden');
    document.body.style.overflow = 'visible';
  }
}

// Particle background animation
function initializeParticles() {
  const particlesContainer = elements.particlesBg;
  if (!particlesContainer) return;
  
  const particleCount = 50;
  
  for (let i = 0; i < particleCount; i++) {
    createParticle(particlesContainer);
  }
}

function createParticle(container) {
  const particle = document.createElement('div');
  particle.className = 'particle';
  
  // Random position
  particle.style.left = Math.random() * 100 + '%';
  particle.style.top = Math.random() * 100 + '%';
  
  // Random animation duration
  particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
  particle.style.animationDelay = Math.random() * 2 + 's';
  
  // Random opacity
  particle.style.opacity = Math.random() * 0.5 + 0.3;
  
  container.appendChild(particle);
  
  // Remove and recreate particle after animation
  setTimeout(() => {
    if (particle.parentNode) {
      particle.remove();
      createParticle(container);
    }
  }, 8000);
}

// Top Navigation
function initializeTopNavigation() {
  // Add click handlers to nav links
  const allNavLinks = [...elements.navLinks, ...elements.mobileNavLinks];
  
  allNavLinks.forEach(link => {
    link.addEventListener('click', handleNavClick);
  });
  
  // Update active nav on scroll
  window.addEventListener('scroll', throttle(updateActiveNav, 100));
  
  // Handle scroll effects
  window.addEventListener('scroll', throttle(handleNavScroll, 10));
}

function handleNavClick(e) {
  e.preventDefault();
  const targetId = this.getAttribute('href').substring(1);
  const targetElement = document.getElementById(targetId);
  
  if (targetElement) {
    // Close mobile menu if open
    closeMobileMenu();
    
    // Smooth scroll to target with proper offset
    const navHeight = window.innerWidth <= 768 ? 70 : 60;
    const targetPosition = targetElement.offsetTop - navHeight;
    
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }
  
  // Update active state
  updateNavActiveState(this);
}

function updateNavActiveState(activeLink) {
  const section = activeLink.getAttribute('data-section');
  
  // Update desktop nav
  elements.navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('data-section') === section);
  });
  
  // Update mobile nav
  elements.mobileNavLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('data-section') === section);
  });
}

function updateActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navHeight = window.innerWidth <= 768 ? 70 : 60;
  const scrollPos = window.scrollY + navHeight + 50;
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
    
    if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
      // Update desktop nav
      elements.navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('data-section') === sectionId);
      });
      
      // Update mobile nav
      elements.mobileNavLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('data-section') === sectionId);
      });
    }
  });
}

function handleNavScroll() {
  const scrolled = window.scrollY > 50;
  elements.topNav.classList.toggle('scrolled', scrolled);
}

// Mobile Navigation
function initializeMobileNavigation() {
  if (elements.mobileMenuToggle) {
    elements.mobileMenuToggle.addEventListener('click', toggleMobileMenu);
  }
  
  // Close mobile menu when clicking outside
  if (elements.mobileNavMenu) {
    elements.mobileNavMenu.addEventListener('click', (e) => {
      if (e.target === elements.mobileNavMenu) {
        closeMobileMenu();
      }
    });
  }
  
  // Close on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && elements.mobileNavMenu && elements.mobileNavMenu.classList.contains('active')) {
      closeMobileMenu();
    }
  });
}

function toggleMobileMenu() {
  const isActive = elements.mobileNavMenu.classList.contains('active');
  
  if (isActive) {
    closeMobileMenu();
  } else {
    openMobileMenu();
  }
}

function openMobileMenu() {
  elements.mobileNavMenu.classList.add('active');
  elements.mobileMenuToggle.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
  elements.mobileNavMenu.classList.remove('active');
  elements.mobileMenuToggle.classList.remove('active');
  document.body.style.overflow = 'visible';
}

// Enhanced Smooth Scrolling
function initializeSmoothScrolling() {
  // Add smooth scrolling to all anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        const navHeight = window.innerWidth <= 768 ? 70 : 60;
        const targetPosition = targetElement.offsetTop - navHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
        
        // Close mobile menu if open
        closeMobileMenu();
      }
    });
  });
  
  // Enhanced mouse wheel scrolling for desktop
  if (window.innerWidth > 768) {
    let isWheelScrolling = false;
    
    document.addEventListener('wheel', (e) => {
      if (isWheelScrolling) return;
      
      // Allow normal scrolling but with enhanced smoothness
      const delta = e.deltaY;
      
      if (Math.abs(delta) > 100) {
        e.preventDefault();
        isWheelScrolling = true;
        
        const currentScroll = window.scrollY;
        const targetScroll = Math.max(0, Math.min(
          document.documentElement.scrollHeight - window.innerHeight,
          currentScroll + (delta > 0 ? 300 : -300)
        ));
        
        window.scrollTo({
          top: targetScroll,
          behavior: 'smooth'
        });
        
        setTimeout(() => {
          isWheelScrolling = false;
        }, 500);
      }
    }, { passive: false });
  }
}

// Brand logo click
function initializeBrandClick() {
  const brandText = document.querySelector('.brand-text');
  if (brandText) {
    brandText.addEventListener('click', () => {
      const homeSection = document.getElementById('home');
      if (homeSection) {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
        
        // Update active nav
        elements.navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('data-section') === 'home');
        });
        elements.mobileNavLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('data-section') === 'home');
        });
      }
    });
  }
}

// Scroll Effects
function initializeScrollEffects() {
  let ticking = false;
  
  function updateScrollEffects() {
    // Add any additional scroll-based animations here
    ticking = false;
  }
  
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(updateScrollEffects);
      ticking = true;
    }
  });
}

// Typewriter effect
function initializeTypewriter() {
  const nameElement = elements.nameText;
  if (!nameElement) return;
  
  const originalText = nameElement.textContent;
  let currentIndex = 0;
  
  nameElement.textContent = '';
  
  function typeNextCharacter() {
    if (currentIndex < originalText.length) {
      nameElement.textContent += originalText[currentIndex];
      currentIndex++;
      setTimeout(typeNextCharacter, 100);
    }
  }
  
  // Start typewriter effect after a delay
  setTimeout(typeNextCharacter, 1000);
}

// Rotating job titles
function initializeRotatingTitle() {
  const titleElement = elements.rotatingTitle;
  if (!titleElement) return;
  
  const titles = portfolioData.personalInfo.titles;
  let currentTitleIndex = 0;
  
  function rotateTitle() {
    titleElement.style.opacity = '0';
    titleElement.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
      currentTitleIndex = (currentTitleIndex + 1) % titles.length;
      titleElement.textContent = titles[currentTitleIndex];
      titleElement.style.opacity = '1';
      titleElement.style.transform = 'translateY(0)';
    }, 500);
  }
  
  // Rotate titles every 3 seconds
  setInterval(rotateTitle, 3000);
}

// Animated counters
function initializeStatCounters() {
  const observerOptions = {
    threshold: 0.7,
    rootMargin: '0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  elements.statNumbers.forEach(stat => {
    observer.observe(stat);
  });
}

function animateCounter(element) {
  const target = parseInt(element.getAttribute('data-target'));
  const duration = 2000;
  const step = target / (duration / 16);
  let current = 0;
  
  const timer = setInterval(() => {
    current += step;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    element.textContent = Math.floor(current);
  }, 16);
}

// Scroll animations
function initializeScrollAnimations() {
  const animatedElements = document.querySelectorAll('.skill-category, .timeline-item, .project-card');
  
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
  
  animatedElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(element);
  });
}

// Projects functionality
function initializeProjects() {
  renderProjects();
  initializeProjectFilters();
}

function renderProjects() {
  if (!elements.projectsGrid) return;
  
  elements.projectsGrid.innerHTML = '';
  
  portfolioData.projects.forEach(project => {
    const projectCard = createProjectCard(project);
    elements.projectsGrid.appendChild(projectCard);
  });
}

function createProjectCard(project) {
  const card = document.createElement('div');
  card.className = `project-card`;
  card.setAttribute('data-category', project.category);
  
  card.innerHTML = `
    <div class="project-image">
      <img src="${project.image}" alt="${project.title}" onerror="this.style.display='none'">
      <div class="project-overlay">
        <div class="project-actions">
          <a href="${project.liveUrl}" target="_blank" title="Live Demo">
            <i class="fas fa-external-link-alt"></i>
          </a>
          <a href="${project.githubUrl}" target="_blank" title="View Code">
            <i class="fab fa-github"></i>
          </a>
        </div>
      </div>
    </div>
    <div class="project-content">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="project-tech">
        ${project.technologies.map(tech => `<span class="project-tech-badge">${tech}</span>`).join('')}
      </div>
    </div>
  `;
  
  // Add click handler for modal
  card.addEventListener('click', () => openProjectModal(project));
  
  return card;
}

function initializeProjectFilters() {
  elements.filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');
      
      // Update active button
      elements.filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      // Filter projects
      filterProjects(filter);
    });
  });
}

function filterProjects(filter) {
  const projectCards = elements.projectsGrid.querySelectorAll('.project-card');
  
  projectCards.forEach(card => {
    const category = card.getAttribute('data-category');
    
    if (filter === 'all' || category === filter) {
      card.style.display = 'block';
      card.style.opacity = '0';
      card.style.transform = 'scale(0.8)';
      
      setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'scale(1)';
      }, 100);
    } else {
      card.style.opacity = '0';
      card.style.transform = 'scale(0.8)';
      
      setTimeout(() => {
        card.style.display = 'none';
      }, 300);
    }
  });
}

// Modal functionality
function initializeModal() {
  if (elements.modalOverlay) {
    elements.modalOverlay.addEventListener('click', closeProjectModal);
  }
  if (elements.modalClose) {
    elements.modalClose.addEventListener('click', closeProjectModal);
  }
  
  // Close modal with escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && elements.projectModal && !elements.projectModal.classList.contains('hidden')) {
      closeProjectModal();
    }
  });
}

function openProjectModal(project) {
  if (!elements.modalBody || !elements.projectModal) return;
  
  elements.modalBody.innerHTML = `
    <div class="modal-project">
      <img src="${project.image}" alt="${project.title}" style="width: 100%; height: 300px; object-fit: cover; border-radius: 12px; margin-bottom: 24px;" onerror="this.style.display='none'">
      <h2 style="color: var(--color-text); margin-bottom: 16px;">${project.title}</h2>
      <p style="color: var(--color-text-secondary); line-height: 1.6; margin-bottom: 24px;">${project.description}</p>
      <div style="margin-bottom: 24px;">
        <h4 style="color: var(--color-text); margin-bottom: 12px;">Technologies Used:</h4>
        <div style="display: flex; flex-wrap: wrap; gap: 8px;">
          ${project.technologies.map(tech => `<span class="project-tech-badge">${tech}</span>`).join('')}
        </div>
      </div>
      <div style="display: flex; gap: 16px;">
        <a href="${project.liveUrl}" target="_blank" class="btn btn--primary neon-glow">
          <i class="fas fa-external-link-alt" style="margin-right: 8px;"></i>
          Live Demo
        </a>
        <a href="${project.githubUrl}" target="_blank" class="btn btn--outline">
          <i class="fab fa-github" style="margin-right: 8px;"></i>
          View Code
        </a>
      </div>
    </div>
  `;
  
  elements.projectModal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  if (!elements.projectModal) return;
  
  elements.projectModal.classList.add('hidden');
  document.body.style.overflow = 'visible';
}

// Contact form
function initializeContactForm() {
  if (!elements.contactForm) return;
  
  elements.contactForm.addEventListener('submit', handleContactSubmit);
  
  // Add focus effects to form inputs
  const formInputs = elements.contactForm.querySelectorAll('.form-control');
  formInputs.forEach(input => {
    input.addEventListener('focus', () => {
      input.parentElement.classList.add('focused');
    });
    
    input.addEventListener('blur', () => {
      if (!input.value) {
        input.parentElement.classList.remove('focused');
      }
    });
  });
}

function showSuccessMessage() {
  // Remove any existing success message
  const existingMessage = document.querySelector('.success-message');
  if (existingMessage) {
    existingMessage.remove();
  }
  
  const successMessage = document.createElement('div');
  successMessage.className = 'success-message';
  successMessage.style.cssText = `
    position: fixed;
    top: 90px;
    right: 20px;
    background: linear-gradient(135deg, var(--portfolio-neon-cyan), var(--portfolio-neon-purple));
    color: var(--portfolio-bg-primary);
    padding: 16px 24px;
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(0, 245, 255, 0.3);
    z-index: 10000;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 12px;
    transform: translateX(100%);
    transition: transform 0.4s ease;
    max-width: 400px;
  `;
  
  successMessage.innerHTML = `
    <i class="fas fa-check-circle" style="font-size: 1.2rem;"></i>
    <span>Message sent successfully! I'll get back to you soon.</span>
  `;
  
  document.body.appendChild(successMessage);
  
  // Animate in
  setTimeout(() => {
    successMessage.style.transform = 'translateX(0)';
  }, 100);
  
  // Auto remove after 5 seconds
  setTimeout(() => {
    successMessage.style.transform = 'translateX(100%)';
    setTimeout(() => {
      if (successMessage.parentNode) {
        successMessage.remove();
      }
    }, 400);
  }, 5000);
}

function handleContactSubmit(e) {
  e.preventDefault();
  
  const formData = new FormData(elements.contactForm);
  const data = Object.fromEntries(formData);
  
  // Simulate form submission
  const submitBtn = elements.contactForm.querySelector('button[type="submit"]');
  const originalText = submitBtn.textContent;
  
  submitBtn.textContent = 'Sending...';
  submitBtn.disabled = true;
  
  setTimeout(() => {
    submitBtn.textContent = 'Message Sent!';
    submitBtn.style.background = 'linear-gradient(135deg, #00f5ff, #8b5cf6)';
    
    // Show success notification
    showSuccessMessage();
    
    setTimeout(() => {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
      submitBtn.style.background = '';
      elements.contactForm.reset();
      
      // Remove focused classes from form groups
      const formGroups = elements.contactForm.querySelectorAll('.form-group');
      formGroups.forEach(group => group.classList.remove('focused'));
    }, 2000);
  }, 1500);
}

// Theme toggle - FIXED
function initializeThemeToggle() {
  if (!elements.themeToggle) return;
  
  elements.themeToggle.addEventListener('click', toggleTheme);
  
  // Check for saved theme preference or system preference
  const savedTheme = localStorage.getItem('theme');
  const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = savedTheme || (systemDark ? 'dark' : 'light');
  
  document.documentElement.setAttribute('data-color-scheme', initialTheme);
  updateThemeIcon(initialTheme);
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-color-scheme') || 'dark';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  document.documentElement.setAttribute('data-color-scheme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateThemeIcon(newTheme);
  
  // Add transition class for smooth theme change
  document.body.style.transition = 'background 0.3s ease, color 0.3s ease';
  setTimeout(() => {
    document.body.style.transition = '';
  }, 300);
}

function updateThemeIcon(theme) {
  const icon = elements.themeToggle.querySelector('i');
  if (icon) {
    icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
  }
}

// Utility functions
function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  }
}

function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Handle resize events
window.addEventListener('resize', debounce(() => {
  // Close mobile menu on resize to desktop
  if (window.innerWidth > 768) {
    closeMobileMenu();
  }
  
  // Recreate particles on resize
  if (elements.particlesBg) {
    elements.particlesBg.innerHTML = '';
    initializeParticles();
  }
}, 250));

// Intersection Observer for performance
function setupIntersectionObserver() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, observerOptions);
  
  // Observe elements with animation classes
  document.querySelectorAll('[data-animation]').forEach(element => {
    observer.observe(element);
  });
}

// Service Worker registration (for PWA functionality)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(() => console.log('Service Worker registered'))
      .catch(() => console.log('Service Worker registration failed'));
  });
}

// Export functions for testing (if needed)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    initializeApp,
    portfolioData,
    createProjectCard,
    filterProjects,
    toggleTheme
  };
}