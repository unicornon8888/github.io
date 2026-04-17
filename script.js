// Tab switching functionality
function switchTab(tabName) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        content.classList.remove('active');
    });

    // Remove active class from all buttons
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(btn => {
        btn.classList.remove('active');
    });

    // Show selected tab content
    const selectedTab = document.getElementById(tabName);
    if (selectedTab) {
        selectedTab.classList.add('active');
    }

    // Add active class to clicked button
    event.target.classList.add('active');
}

// Form submission
document.addEventListener('DOMContentLoaded', function() {
    const quoteForm = document.getElementById('quoteForm');
    if (quoteForm) {
        quoteForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Collect form data
            const formData = new FormData(this);
            const data = {
                company: formData.get('company') || this.elements[0].value,
                name: formData.get('name') || this.elements[1].value,
                email: formData.get('email') || this.elements[2].value,
                phone: formData.get('phone') || this.elements[3].value,
                country: formData.get('country') || this.elements[4].value,
                category: this.elements[5].value,
                quantity: this.elements[6].value,
                requirements: this.elements[7].value,
                timestamp: new Date().toISOString()
            };

            // Log form data (in a real application, this would be sent to a server)
            console.log('Quote Request Submitted:', data);

            // Show success message
            alert('Thank you for your quote request! Our team will review your request and contact you within 24 hours.');

            // Reset form
            this.reset();
        });
    }

    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all cards and sections
    const elements = document.querySelectorAll('.product-card, .value-card, .partner-card, .country-flag');
    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Set first tab as active by default
    const firstTab = document.querySelector('.tab-btn');
    if (firstTab) {
        firstTab.classList.add('active');
    }
});

// Mobile menu toggle (if needed in future)
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) {
        navLinks.style.display = navLinks.style.display === 'none' ? 'flex' : 'none';
    }
}

// Utility function to handle form input
function handleFormInput(event) {
    const input = event.target;
    input.style.borderColor = input.value ? 'var(--accent-color)' : 'var(--border-color)';
}

// Add form input listeners
document.addEventListener('DOMContentLoaded', function() {
    const formInputs = document.querySelectorAll('.quote-form input, .quote-form select, .quote-form textarea');
    formInputs.forEach(input => {
        input.addEventListener('input', handleFormInput);
        input.addEventListener('change', handleFormInput);
    });
});
