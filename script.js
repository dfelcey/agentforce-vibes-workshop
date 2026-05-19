// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const topOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - topOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });

            // Update active state in sidebar
            updateActiveLink(this);
        }
    });
});

// Update active link based on scroll position
function updateActiveLink(clickedLink) {
    document.querySelectorAll('.nav-item').forEach(link => {
        link.classList.remove('active');
    });
    if (clickedLink && clickedLink.classList.contains('nav-item')) {
        clickedLink.classList.add('active');
    }
}

// Highlight current section on scroll
let ticking = false;
let sections = [];
let navItems = [];

// Cache sections and nav items on load
window.addEventListener('DOMContentLoaded', function() {
    sections = Array.from(document.querySelectorAll('.content-section[id]'));
    navItems = Array.from(document.querySelectorAll('.nav-item'));
});

window.addEventListener('scroll', function() {
    if (!ticking) {
        window.requestAnimationFrame(function() {
            let currentSection = '';
            const scrollPosition = window.pageYOffset + 120;

            // Find the current section
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    currentSection = section.getAttribute('id');
                }
            });

            // Update active state
            navItems.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + currentSection) {
                    link.classList.add('active');
                }
            });

            ticking = false;
        });
        ticking = true;
    }
});

// Copy button functionality
document.querySelectorAll('.copy-btn').forEach(button => {
    button.addEventListener('click', function() {
        const codeBlock = this.closest('.code-example');
        const code = codeBlock.querySelector('code').textContent;

        navigator.clipboard.writeText(code).then(() => {
            const originalText = this.textContent;
            this.textContent = 'Copied!';
            this.style.backgroundColor = 'rgba(46, 132, 74, 0.3)';

            setTimeout(() => {
                this.textContent = originalText;
                this.style.backgroundColor = '';
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy:', err);
            this.textContent = 'Failed';
            setTimeout(() => {
                this.textContent = 'Copy';
            }, 2000);
        });
    });
});

// Add keyboard shortcut for sidebar toggle (mobile)
document.addEventListener('keydown', function(e) {
    if (e.key === '[' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        const sidebar = document.querySelector('.sidebar');
        if (sidebar) {
            const currentTransform = window.getComputedStyle(sidebar).transform;
            if (currentTransform === 'none' || currentTransform.includes('matrix(1, 0, 0, 1, 0, 0)')) {
                sidebar.style.transform = 'translateX(-100%)';
            } else {
                sidebar.style.transform = 'translateX(0)';
            }
        }
    }
});

// Add progress indicator
function updateProgressBar() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;

    let progressBar = document.getElementById('progressBar');
    if (!progressBar) {
        progressBar = document.createElement('div');
        progressBar.id = 'progressBar';
        progressBar.style.cssText = `
            position: fixed;
            top: 64px;
            left: 0;
            width: 0%;
            height: 3px;
            background: linear-gradient(90deg, #0176d3, #00a1e0);
            z-index: 101;
            transition: width 0.1s ease;
        `;
        document.body.appendChild(progressBar);
    }

    progressBar.style.width = scrolled + '%';
}

window.addEventListener('scroll', updateProgressBar);
window.addEventListener('load', updateProgressBar);

// Print styles helper
window.addEventListener('beforeprint', function() {
    document.querySelectorAll('.nav-item').forEach(item => {
        item.style.pageBreakInside = 'avoid';
    });
});
