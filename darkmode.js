(function() {
    'use strict';

    // =============================================================================
    // DARK MODE CONFIGURATION
    // =============================================================================
    
    const DARK_MODE_KEY = 'darkModeEnabled';
    const THEME_TRANSITION_DURATION = 300; // milliseconds

    // =============================================================================
    // INITIALIZE DARK MODE ON PAGE LOAD
    // =============================================================================
    
    function initializeDarkMode() {
        // Check if dark mode is enabled in localStorage
        const isDarkMode = localStorage.getItem(DARK_MODE_KEY) === 'true';
        
        // Apply dark mode immediately (before page renders) to prevent flash
        if (isDarkMode) {
            document.documentElement.classList.add('dark-mode');
        }
        
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', setupDarkModeToggle);
        } else {
            setupDarkModeToggle();
        }
    }

    // =============================================================================
    // CREATE AND INSERT DARK MODE TOGGLE BUTTON
    // =============================================================================
    
    function setupDarkModeToggle() {
        // Create toggle button
        const toggleButton = createToggleButton();
        
        // Insert into navbar
        insertToggleIntoNavbar(toggleButton);
        
        // Set initial state
        updateToggleButton(toggleButton);
        
        // Add event listener
        toggleButton.addEventListener('click', toggleDarkMode);
    }

    // =============================================================================
    // CREATE TOGGLE BUTTON ELEMENT
    // =============================================================================
    
    function createToggleButton() {
        const button = document.createElement('button');
        button.id = 'darkModeToggle';
        button.className = 'dark-mode-toggle';
        button.setAttribute('aria-label', 'Toggle Dark Mode');
        button.innerHTML = `
            <span class="toggle-icon">🌙</span>
        `;
        return button;
    }

    // =============================================================================
    // INSERT TOGGLE BUTTON INTO NAVBAR
    // =============================================================================
    
    function insertToggleIntoNavbar(button) {
        // Find navbar links container
        const navLinks = document.querySelector('.nav-links');
        
        if (navLinks) {
            // Insert before logout button (last item)
            const lastLink = navLinks.lastElementChild;
            if (lastLink) {
                navLinks.insertBefore(button, lastLink);
            } else {
                navLinks.appendChild(button);
            }
        } else {
            // Fallback: append to body (fixed position will handle placement)
            document.body.appendChild(button);
        }
    }

    // =============================================================================
    // TOGGLE DARK MODE
    // =============================================================================
    
    function toggleDarkMode() {
        const html = document.documentElement;
        const isDarkMode = html.classList.contains('dark-mode');
        
        // Toggle class
        if (isDarkMode) {
            html.classList.remove('dark-mode');
            localStorage.setItem(DARK_MODE_KEY, 'false');
        } else {
            html.classList.add('dark-mode');
            localStorage.setItem(DARK_MODE_KEY, 'true');
        }
        
        // Update button
        const button = document.getElementById('darkModeToggle');
        updateToggleButton(button);
        
        // Add animation class
        html.style.transition = `background-color ${THEME_TRANSITION_DURATION}ms ease, color ${THEME_TRANSITION_DURATION}ms ease`;
        
        // Remove transition after animation completes
        setTimeout(() => {
            html.style.transition = '';
        }, THEME_TRANSITION_DURATION);
    }

    // =============================================================================
    // UPDATE TOGGLE BUTTON APPEARANCE
    // =============================================================================
    
    function updateToggleButton(button) {
        const isDarkMode = document.documentElement.classList.contains('dark-mode');
        const icon = button.querySelector('.toggle-icon');
        
        if (isDarkMode) {
            icon.textContent = '☀️';
            button.setAttribute('aria-label', 'Switch to Light Mode');
        } else {
            icon.textContent = '🌙';
            button.setAttribute('aria-label', 'Switch to Dark Mode');
        }
    }

    // =============================================================================
    // INJECT DARK MODE STYLES
    // =============================================================================
    
    function injectDarkModeStyles() {
        const styleId = 'dark-mode-styles';
        
        // Check if styles already injected
        if (document.getElementById(styleId)) {
            return;
        }
        
        const style = document.createElement('style');
        style.id = styleId;
        style.textContent = `
            /* =================================================================
               DARK MODE VARIABLES
               ================================================================= */
            
            :root {
                --bg-primary: #f5f7fa;
                --bg-secondary: #ffffff;
                --text-primary: #333333;
                --text-secondary: #666666;
                --border-color: #e0e0e0;
                --shadow-color: rgba(0, 0, 0, 0.05);
                --shadow-hover: rgba(0, 0, 0, 0.1);
                --card-bg: #ffffff;
                --input-bg: #f8f9fa;
            }

            .dark-mode {
                --bg-primary: #1a1a2e;
                --bg-secondary: #16213e;
                --text-primary: #e4e4e4;
                --text-secondary: #b0b0b0;
                --border-color: #2d3548;
                --shadow-color: rgba(0, 0, 0, 0.3);
                --shadow-hover: rgba(0, 0, 0, 0.5);
                --card-bg: #16213e;
                --input-bg: #0f1419;
            }

            /* =================================================================
               DARK MODE TOGGLE BUTTON STYLES
               ================================================================= */
            
            .dark-mode-toggle {
                background: rgba(255, 255, 255, 0.2);
                border: 2px solid rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                width: 45px;
                height: 45px;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                transition: all 0.3s ease;
                padding: 0;
                margin: 0 0.5rem;
            }

            .dark-mode-toggle:hover {
                background: rgba(255, 255, 255, 0.3);
                transform: rotate(20deg) scale(1.1);
            }

            .dark-mode-toggle .toggle-icon {
                font-size: 1.5rem;
                transition: transform 0.3s ease;
            }

            .dark-mode-toggle:active .toggle-icon {
                transform: scale(0.9);
            }

            /* =================================================================
               DARK MODE GLOBAL STYLES
               ================================================================= */
            
            .dark-mode {
                color-scheme: dark;
            }

            .dark-mode body {
                background: var(--bg-primary);
                color: var(--text-primary);
            }

            /* Cards */
            .dark-mode .quiz-header,
            .dark-mode .question-card,
            .dark-mode .results-card,
            .dark-mode .page-header,
            .dark-mode .stat-card,
            .dark-mode .filter-section,
            .dark-mode .history-card,
            .dark-mode .empty-state,
            .dark-mode .module-card,
            .dark-mode .profile-card,
            .dark-mode .leaderboard-card {
                background: var(--card-bg);
                color: var(--text-primary);
                box-shadow: 0 2px 10px var(--shadow-color);
            }

            .dark-mode .quiz-header:hover,
            .dark-mode .stat-card:hover,
            .dark-mode .history-card:hover,
            .dark-mode .module-card:hover {
                box-shadow: 0 5px 20px var(--shadow-hover);
            }

            /* Text Colors */
            .dark-mode h1,
            .dark-mode h2,
            .dark-mode h3,
            .dark-mode h4,
            .dark-mode .module-title,
            .dark-mode .page-title,
            .dark-mode .question-text,
            .dark-mode .results-title {
                color: var(--text-primary);
            }

            .dark-mode p,
            .dark-mode .stat-label,
            .dark-mode .detail-label,
            .dark-mode .quiz-date,
            .dark-mode .page-subtitle {
                color: var(--text-secondary);
            }

            /* Options */
            .dark-mode .option {
                background: var(--input-bg);
                border-color: var(--border-color);
                color: var(--text-primary);
            }

            .dark-mode .option:hover:not(.disabled) {
                background: rgba(102, 126, 234, 0.15);
                border-color: #667eea;
            }

            .dark-mode .option.selected {
                background: rgba(102, 126, 234, 0.2);
                border-color: #667eea;
            }

            /* Forms and Inputs */
            .dark-mode input[type="text"],
            .dark-mode input[type="email"],
            .dark-mode input[type="password"],
            .dark-mode select,
            .dark-mode textarea,
            .dark-mode .filter-select {
                background: var(--input-bg);
                color: var(--text-primary);
                border-color: var(--border-color);
            }

            .dark-mode input[type="text"]:focus,
            .dark-mode input[type="email"]:focus,
            .dark-mode input[type="password"]:focus,
            .dark-mode select:focus,
            .dark-mode textarea:focus,
            .dark-mode .filter-select:focus {
                border-color: #667eea;
                background: var(--bg-secondary);
            }

            /* Quiz Details */
            .dark-mode .quiz-details,
            .dark-mode .result-item {
                background: var(--input-bg);
            }

            .dark-mode .detail-value,
            .dark-mode .result-value {
                color: var(--text-primary);
            }

            /* Explanation Box */
            .dark-mode .explanation-box {
                background: rgba(102, 126, 234, 0.15);
                border-left-color: #667eea;
            }

            .dark-mode .explanation-text {
                color: var(--text-secondary);
            }

            /* Progress Bar */
            .dark-mode .progress-container {
                background: var(--border-color);
            }

            /* Secondary Button */
            .dark-mode .btn-secondary {
                background: #2d3548;
                color: var(--text-primary);
            }

            .dark-mode .btn-secondary:hover:not(:disabled) {
                background: #3d4558;
            }

            /* Outline Button */
            .dark-mode .btn-outline {
                background: transparent;
                color: #8b9cff;
                border-color: #8b9cff;
            }

            .dark-mode .btn-outline:hover {
                background: #8b9cff;
                color: #1a1a2e;
            }

            /* Tables */
            .dark-mode table {
                color: var(--text-primary);
            }

            .dark-mode thead {
                background: var(--input-bg);
            }

            .dark-mode tbody tr {
                border-bottom: 1px solid var(--border-color);
            }

            .dark-mode tbody tr:hover {
                background: var(--input-bg);
            }

            /* Badges */
            .dark-mode .difficulty-badge {
                filter: brightness(0.8);
            }

            /* Module Grid */
            .dark-mode .modules-grid {
                color: var(--text-primary);
            }

            /* Leaderboard */
            .dark-mode .leaderboard-item {
                background: var(--card-bg);
                border-color: var(--border-color);
            }

            .dark-mode .leaderboard-item:hover {
                background: var(--input-bg);
            }

            /* Profile Stats */
            .dark-mode .profile-stats {
                background: var(--input-bg);
            }

            /* Scrollbar (Webkit browsers) */
            .dark-mode ::-webkit-scrollbar {
                width: 12px;
            }

            .dark-mode ::-webkit-scrollbar-track {
                background: var(--bg-secondary);
            }

            .dark-mode ::-webkit-scrollbar-thumb {
                background: var(--border-color);
                border-radius: 6px;
            }

            .dark-mode ::-webkit-scrollbar-thumb:hover {
                background: #667eea;
            }

            /* Smooth Transitions */
            * {
                transition: background-color 0.3s ease, 
                            color 0.3s ease, 
                            border-color 0.3s ease;
            }

            /* Prevent transition on page load */
            .dark-mode.no-transition * {
                transition: none !important;
            }

            /* =================================================================
               RESPONSIVE ADJUSTMENTS
               ================================================================= */
            
            @media (max-width: 768px) {
                .dark-mode-toggle {
                    width: 40px;
                    height: 40px;
                    margin: 0.5rem;
                }

                .dark-mode-toggle .toggle-icon {
                    font-size: 1.3rem;
                }
            }
        `;
        
        document.head.appendChild(style);
    }

    // =============================================================================
    // EXPOSE GLOBAL FUNCTIONS
    // =============================================================================
    
    window.darkMode = {
        toggle: toggleDarkMode,
        enable: function() {
            if (!document.documentElement.classList.contains('dark-mode')) {
                toggleDarkMode();
            }
        },
        disable: function() {
            if (document.documentElement.classList.contains('dark-mode')) {
                toggleDarkMode();
            }
        },
        isEnabled: function() {
            return document.documentElement.classList.contains('dark-mode');
        }
    };

    // =============================================================================
    // AUTO-INITIALIZE
    // =============================================================================
    
    // Inject styles immediately
    injectDarkModeStyles();
    
    // Initialize dark mode
    initializeDarkMode();

})();
