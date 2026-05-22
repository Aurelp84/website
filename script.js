document.addEventListener('DOMContentLoaded', function () {
    // Mobile menu toggle
    const toggle = document.getElementById('menuToggle');
    const nav = document.getElementById('mainNav');
    if (toggle && nav) {
        toggle.addEventListener('click', () => nav.classList.toggle('open'));
        document.addEventListener('click', (e) => {
            if (!toggle.contains(e.target) && !nav.contains(e.target)) {
                nav.classList.remove('open');
            }
        });
    }

    // Active nav link
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.menu li a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });

    // Scroll fade-in animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                setTimeout(() => entry.target.classList.add('visible'), i * 80);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
});
