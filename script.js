// Builder Next Door - JavaScript Functionality

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNav = document.getElementById('mobileNav');
    
    if (mobileMenuBtn && mobileNav) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileNav.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on links
        const mobileLinks = mobileNav.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileNav.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
            });
        });
    }
    
    // Smooth Scrolling for Navigation Links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Active Navigation Link Highlighting
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let currentSection = '';
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveNavLink);
    updateActiveNavLink(); // Initial call
    
    // Chatbot Functionality
    const chatbotButton = document.getElementById('chatbotButton');
    const chatbotWindow = document.getElementById('chatbotWindow');
    const chatbotClose = document.getElementById('chatbotClose');
    const chatbotContent = document.getElementById('chatbotContent');
    const chatbotOptions = document.getElementById('chatbotOptions');
    
    if (chatbotButton && chatbotWindow) {
        chatbotButton.addEventListener('click', function() {
            chatbotWindow.classList.toggle('active');
        });
        
        if (chatbotClose) {
            chatbotClose.addEventListener('click', function() {
                chatbotWindow.classList.remove('active');
            });
        }
        
        // Chatbot Option Handlers
        if (chatbotOptions) {
            const options = chatbotOptions.querySelectorAll('.chatbot-option');
            options.forEach(option => {
                option.addEventListener('click', function() {
                    const optionType = this.getAttribute('data-option');
                    handleChatbotOption(optionType, this.textContent);
                });
            });
        }
    }
    
    function handleChatbotOption(optionType, optionText) {
        // Add user message
        addChatbotMessage(optionText, 'user');
        
        // Clear options
        chatbotOptions.innerHTML = '';
        
        // Add bot response based on option
        setTimeout(() => {
            let botResponse = '';
            let newOptions = [];
            
            switch(optionType) {
                case 'coaching':
                    botResponse = "Perfect! 1-on-1 coaching is my most popular service. I'll work with you personally to develop a strategy that fits your specific situation and goals.";
                    newOptions = [
                        { text: "What's included in coaching?", action: "coaching-details" },
                        { text: "How much does it cost?", action: "coaching-price" },
                        { text: "Book a call now", action: "book-call" }
                    ];
                    break;
                    
                case 'feedback':
                    botResponse = "Great choice! I can provide expert feedback on your business ideas and help you assess their market viability. This is perfect if you have ideas but want professional input before moving forward.";
                    newOptions = [
                        { text: "How does feedback work?", action: "feedback-details" },
                        { text: "What's the cost?", action: "feedback-price" },
                        { text: "Submit an idea", action: "submit-idea" }
                    ];
                    break;
                    
                case 'resources':
                    botResponse = "Excellent! I have several free resources to help you get started. My most popular is the '5 Steps to Start Charging for What You Know' guide.";
                    newOptions = [
                        { text: "Get the free guide", action: "free-guide" },
                        { text: "See all resources", action: "all-resources" },
                        { text: "What else is available?", action: "more-resources" }
                    ];
                    break;
                    
                case 'learn':
                    botResponse = "I'm Tyler Roberts, and I help tradespeople and entrepreneurs turn their skills into income. I've been where you are - working hard but wanting to create additional income streams from what I already know.";
                    newOptions = [
                        { text: "Tell me your story", action: "tyler-story" },
                        { text: "See success stories", action: "success-stories" },
                        { text: "How can you help me?", action: "how-help" }
                    ];
                    break;
                    
                default:
                    botResponse = "I'd be happy to help you with that! Let me connect you with the right information.";
                    newOptions = [
                        { text: "Book a call", action: "book-call" },
                        { text: "Get free resources", action: "free-guide" },
                        { text: "Start over", action: "restart" }
                    ];
            }
            
            addChatbotMessage(botResponse, 'bot');
            addChatbotOptions(newOptions);
            
        }, 1000);
    }
    
    function addChatbotMessage(message, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `chatbot-message ${sender}-message`;
        messageDiv.innerHTML = `<p>${message}</p>`;
        chatbotContent.appendChild(messageDiv);
        chatbotContent.scrollTop = chatbotContent.scrollHeight;
    }
    
    function addChatbotOptions(options) {
        const optionsDiv = document.createElement('div');
        optionsDiv.className = 'chatbot-options';
        
        options.forEach(option => {
            const button = document.createElement('button');
            button.className = 'chatbot-option';
            button.textContent = option.text;
            button.setAttribute('data-option', option.action);
            
            button.addEventListener('click', function() {
                const optionType = this.getAttribute('data-option');
                handleChatbotOption(optionType, this.textContent);
            });
            
            optionsDiv.appendChild(button);
        });
        
        chatbotContent.appendChild(optionsDiv);
        chatbotContent.scrollTop = chatbotContent.scrollHeight;
    }
    
    // Form Handling
    const resourceForm = document.getElementById('resourceForm');
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');
    const successText = document.getElementById('successText');
    
    if (resourceForm) {
        resourceForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleFormSubmission('resource', this);
        });
    }
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleFormSubmission('contact', this);
        });
    }
    
    function handleFormSubmission(formType, form) {
        // Get form data
        const formData = new FormData(form);
        const data = {};
        
        for (let [key, value] of formData.entries()) {
            data[key] = value;
        }
        
        // Show loading state
        const submitButton = form.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        
        // Simulate form submission (replace with actual API call)
        setTimeout(() => {
            // Reset button
            submitButton.textContent = originalText;
            submitButton.disabled = false;
            
            // Show success message
            if (formType === 'resource') {
                showSuccessMessage('Thanks! Check your email for the free guide.');
            } else {
                showSuccessMessage('Message sent successfully! I\'ll get back to you soon.');
            }
            
            // Reset form
            form.reset();
            
            // Log form data (for development - remove in production)
            console.log(`${formType} form submitted:`, data);
            
        }, 2000);
    }
    
    function showSuccessMessage(message) {
        if (successMessage && successText) {
            successText.textContent = message;
            successMessage.classList.add('show');
            
            setTimeout(() => {
                successMessage.classList.remove('show');
            }, 5000);
        }
    }
    
    // Scroll Animations
    function animateOnScroll() {
        const elements = document.querySelectorAll('.feature-card, .service-card, .stat-card');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('fade-in-up');
            }
        });
    }
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial call
    
    // Header Scroll Effect
    const header = document.querySelector('.header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            header.style.backgroundColor = 'rgba(247, 240, 234, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.backgroundColor = 'var(--warm-off-white)';
            header.style.backdropFilter = 'none';
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Keyboard Navigation
    document.addEventListener('keydown', function(e) {
        // Close chatbot with Escape key
        if (e.key === 'Escape' && chatbotWindow && chatbotWindow.classList.contains('active')) {
            chatbotWindow.classList.remove('active');
        }
        
        // Close success message with Escape key
        if (e.key === 'Escape' && successMessage && successMessage.classList.contains('show')) {
            successMessage.classList.remove('show');
        }
    });
    
    // Click outside to close chatbot
    document.addEventListener('click', function(e) {
        if (chatbotWindow && chatbotWindow.classList.contains('active')) {
            if (!chatbotWindow.contains(e.target) && !chatbotButton.contains(e.target)) {
                chatbotWindow.classList.remove('active');
            }
        }
    });
    
    // Form Validation Enhancement
    function enhanceFormValidation() {
        const inputs = document.querySelectorAll('input[required], select[required], textarea[required]');
        
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
            });
            
            input.addEventListener('input', function() {
                if (this.classList.contains('error')) {
                    validateField(this);
                }
            });
        });
    }
    
    function validateField(field) {
        const value = field.value.trim();
        let isValid = true;
        let errorMessage = '';
        
        // Required field validation
        if (field.hasAttribute('required') && !value) {
            isValid = false;
            errorMessage = 'This field is required';
        }
        
        // Email validation
        if (field.type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                isValid = false;
                errorMessage = 'Please enter a valid email address';
            }
        }
        
        // Phone validation (if provided)
        if (field.type === 'tel' && value) {
            const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
            if (!phoneRegex.test(value.replace(/[\s\-\(\)]/g, ''))) {
                isValid = false;
                errorMessage = 'Please enter a valid phone number';
            }
        }
        
        // Update field appearance
        if (isValid) {
            field.classList.remove('error');
            removeErrorMessage(field);
        } else {
            field.classList.add('error');
            showErrorMessage(field, errorMessage);
        }
        
        return isValid;
    }
    
    function showErrorMessage(field, message) {
        removeErrorMessage(field);
        
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        errorDiv.style.color = '#dc2626';
        errorDiv.style.fontSize = '14px';
        errorDiv.style.marginTop = '4px';
        
        field.parentNode.appendChild(errorDiv);
    }
    
    function removeErrorMessage(field) {
        const existingError = field.parentNode.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }
    }
    
    // Initialize form validation
    enhanceFormValidation();
    
    // Performance: Lazy load images (if any are added later)
    function lazyLoadImages() {
        const images = document.querySelectorAll('img[data-src]');
        
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
    
    // Initialize lazy loading if supported
    if ('IntersectionObserver' in window) {
        lazyLoadImages();
    }
    
    // Analytics tracking (placeholder - replace with actual analytics)
    function trackEvent(eventName, eventData = {}) {
        console.log('Event tracked:', eventName, eventData);
        
        // Example: Google Analytics 4
        // if (typeof gtag !== 'undefined') {
        //     gtag('event', eventName, eventData);
        // }
        
        // Example: Facebook Pixel
        // if (typeof fbq !== 'undefined') {
        //     fbq('track', eventName, eventData);
        // }
    }
    
    // Track form submissions
    if (resourceForm) {
        resourceForm.addEventListener('submit', () => {
            trackEvent('lead_generation', { form_type: 'resource_download' });
        });
    }
    
    if (contactForm) {
        contactForm.addEventListener('submit', () => {
            trackEvent('contact_form_submission', { form_type: 'contact' });
        });
    }
    
    // Track chatbot interactions
    if (chatbotButton) {
        chatbotButton.addEventListener('click', () => {
            trackEvent('chatbot_opened');
        });
    }
    
    // Track CTA clicks
    const ctaButtons = document.querySelectorAll('.btn-primary');
    ctaButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const buttonText = e.target.textContent.trim();
            trackEvent('cta_click', { button_text: buttonText });
        });
    });
    
    console.log('Builder Next Door website initialized successfully!');
});

