// Smooth scrolling or simple interactions
document.addEventListener('DOMContentLoaded', () => {
    console.log("Portfolio Loaded!");

    // Example: Change nav background on scroll
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('nav');
        if (window.scrollY > 50) {
            nav.style.background = '#000';
            nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.5)';
        } else {
            nav.style.background = 'transparent';
            nav.style.boxShadow = 'none';
        }
    });
});
