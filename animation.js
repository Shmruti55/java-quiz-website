// =============================================================================
// ANIMATION CONTROLLER - animations.js
// =============================================================================
// Include this file AFTER animations.css
// <script src="animations.js"></script>

(function() {
    'use strict';

    // =============================================================================
    // CONFIGURATION
    // =============================================================================
    
    const CONFIG = {
        scrollThreshold: 0.15, // Element must be 15% visible to trigger
        observerOptions: {
            threshold: [0, 0.15, 0.3, 0.5, 0.7, 1],
            rootMargin: '0px'
        }
    };

    // =============================================================================
    // SCROLL ANIMATIONS - Intersection Observer
    // =============================================================================
    
    function initScrollAnimations() {
        // Check if browser supports Intersection Observer
        if (!('IntersectionObserver' in window)) {
            console.log('Intersection Observer not supported, animations will be instant');
            revealAllElements();
            return;
        }

        const observer = new IntersectionObserver(handleIntersection, CONFIG.observerOptions);
        
        // Observe all elements with scroll-animate class
        const animatedElements = document.querySelectorAll('.scroll-animate');
        animatedElements.forEach(el => observer.observe(el));
    }

    function handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.intersectionRatio >= CONFIG.scrollThreshold) {
                entry.target.classList.add('visible');
                // Stop observing once animated
                if (entry.target.classList.contains('animate-once')) {
                    entry.target.observer?.unobserve(entry.target);
                }
            } else if (!entry.target.classList.contains('animate-once')) {
                // Remove visible class if element scrolls out (unless animate-once)
                entry.target.classList.remove('visible');
            }
        });
    }

    function revealAllElements() {
        // Fallback for browsers without Intersection Observer
        const elements = document.querySelectorAll('.scroll-animate');
        elements.forEach(el => el.classList.add('visible'));
    }

    // =============================================================================
    // AUTO-APPLY ANIMATIONS TO COMMON ELEMENTS
    // =============================================================================
    
    function autoApplyAnimations() {
        // Apply animations to module cards
        const moduleCards = document.querySelectorAll('.module-card');
        moduleCards.forEach((card, index) => {
            card.classList.add('card-animate');
            card.style.animationDelay = `${index * 0.1}s`;
        });

        // Apply animations to stat cards
        const statCards = document.querySelectorAll('.stat-card');
        statCards.forEach((card, index) => {
            card.classList.add('animate-fadeInUp', `animate-delay-${Math.min(index + 1, 6)}`);
        });

        // Apply animations to history cards
        const historyCards = document.querySelectorAll('.history-card');
        historyCards.forEach((card, index) => {
            card.classList.add('scroll-animate', 'animate-once');
        });

        // Apply hover effects to cards
        const cards = document.querySelectorAll('.quiz-header, .question-card, .stat-card, .history-card, .module-card');
        cards.forEach(card => {
            if (!card.classList.contains('no-hover')) {
                card.classList.add('hover-lift');
            }
        });

        // Apply hover effects to buttons
        const buttons = document.querySelectorAll('.btn:not(.no-animate)');
        buttons.forEach(btn => {
            btn.classList.add('btn-press');
            
            // Add ripple container
            if (!btn.querySelector('.ripple-container')) {
                btn.style.position = 'relative';
                btn.style.overflow = 'hidden';
                btn.addEventListener('click', createRipple);
            }
        });

        // Apply animations to options
        const options = document.querySelectorAll('.option');
        options.forEach((option, index) => {
            option.style.animationDelay = `${index * 0.05}s`;
        });
    }

    // =============================================================================
    // RIPPLE EFFECT ON BUTTON CLICK
    // =============================================================================
    
    function createRipple(event) {
        const button = event.currentTarget;
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        ripple.classList.add('ripple-effect');

        // Remove existing ripples
        const existingRipple = button.querySelector('.ripple-effect');
        if (existingRipple) {
            existingRipple.remove();
        }

        button.appendChild(ripple);

        // Remove ripple after animation
        setTimeout(() => ripple.remove(), 600);
    }

    // Add ripple styles dynamically
    function injectRippleStyles() {
        if (document.getElementById('ripple-styles')) return;

        const style = document.createElement('style');
        style.id = 'ripple-styles';
        style.textContent = `
            .ripple-effect {
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.6);
                transform: scale(0);
                animation: ripple-animation 0.6s ease-out;
                pointer-events: none;
            }

            @keyframes ripple-animation {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }

    // =============================================================================
    // PAGE TRANSITION EFFECTS
    // =============================================================================
    
    function initPageTransitions() {
        // Fade in page content
        document.body.style.opacity = '0';
        
        window.addEventListener('load', () => {
            setTimeout(() => {
                document.body.style.transition = 'opacity 0.5s ease';
                document.body.style.opacity = '1';
            }, 100);
        });

        // Smooth scroll to top on page load
        if ('scrollBehavior' in document.documentElement.style) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    // =============================================================================
    // NAVBAR SCROLL EFFECT
    // =============================================================================
    
    function initNavbarScrollEffect() {
        const navbar = document.querySelector('.navbar');
        if (!navbar) return;

        let lastScroll = 0;

        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;

            // Add shadow when scrolled
            if (currentScroll > 10) {
                navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
            } else {
                navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
            }

            lastScroll = currentScroll;
        });
    }

    // =============================================================================
    // COUNTER ANIMATION (for stats)
    // =============================================================================
    
    function animateCounters() {
        const counters = document.querySelectorAll('.stat-value, .result-value');
        
        counters.forEach(counter => {
            // Skip if already animated
            if (counter.dataset.animated === 'true') return;

            const target = parseInt(counter.textContent.replace(/\D/g, '')) || 0;
            const duration = 1000; // 1 second
            const increment = target / (duration / 16); // 60 fps
            let current = 0;

            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    counter.textContent = formatCounterValue(target, counter.textContent);
                    clearInterval(timer);
                    counter.dataset.animated = 'true';
                } else {
                    counter.textContent = formatCounterValue(Math.floor(current), counter.textContent);
                }
            }, 16);
        });
    }

    function formatCounterValue(value, originalText) {
        // Preserve % or other suffixes
        if (originalText.includes('%')) return value + '%';
        if (originalText.includes('h')) return value + 'h';
        if (originalText.includes('m')) return value + 'm';
        return value.toString();
    }

    // =============================================================================
    // PROGRESS BAR ANIMATION
    // =============================================================================
    
    function animateProgressBars() {
        const progressBars = document.querySelectorAll('.progress-bar, .bar-fill');
        
        progressBars.forEach(bar => {
            // Skip if already animated
            if (bar.dataset.animated === 'true') return;

            const targetWidth = bar.style.width || '0%';
            bar.style.width = '0%';

            // Use Intersection Observer to trigger when visible
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            bar.style.transition = 'width 1s ease-out';
                            bar.style.width = targetWidth;
                            bar.dataset.animated = 'true';
                        }, 100);
                        observer.unobserve(bar);
                    }
                });
            }, { threshold: 0.5 });

            observer.observe(bar);
        });
    }

    // =============================================================================
    // SHAKE EFFECT FOR WRONG ANSWERS
    // =============================================================================
    
    function addShakeEffect(element) {
        element.classList.add('animate-shake');
        setTimeout(() => {
            element.classList.remove('animate-shake');
        }, 500);
    }

    // =============================================================================
    // CONFETTI EFFECT (for quiz completion)
    // =============================================================================
    
    function createConfetti() {
        const colors = ['#667eea', '#764ba2', '#f093fb', '#4facfe'];
        const confettiCount = 50;

        for (let i = 0; i < confettiCount; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.animationDelay = Math.random() * 3 + 's';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            document.body.appendChild(confetti);

            // Remove after animation
            setTimeout(() => confetti.remove(), 5000);
        }
    }

    function injectConfettiStyles() {
        if (document.getElementById('confetti-styles')) return;

        const style = document.createElement('style');
        style.id = 'confetti-styles';
        style.textContent = `
            .confetti {
                position: fixed;
                width: 10px;
                height: 10px;
                top: -10px;
                z-index: 9999;
                animation: confetti-fall 3s linear forwards;
            }

            @keyframes confetti-fall {
                to {
                    transform: translateY(100vh) rotate(360deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }

    // =============================================================================
    // LOADING ANIMATION
    // =============================================================================
    
    function showLoader() {
        const loader = document.createElement('div');
        loader.id = 'page-loader';
        loader.innerHTML = `
            <div class="spinner"></div>
            <p>Loading...</p>
        `;
        document.body.appendChild(loader);
    }

    function hideLoader() {
        const loader = document.getElementById('page-loader');
        if (loader) {
            loader.style.opacity = '0';
            setTimeout(() => loader.remove(), 300);
        }
    }

    // =============================================================================
    // TOAST NOTIFICATION
    // =============================================================================
    
    function showToast(message, type = 'info', duration = 3000) {
        const toast = document.createElement('div');
        toast.className = `toast toast-${type} animate-slideInDown`;
        toast.textContent = message;
        
        document.body.appendChild(toast);

        // Remove after duration
        setTimeout(() => {
            toast.style.animation = 'fadeInUp 0.3s ease
