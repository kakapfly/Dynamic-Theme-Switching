// Footer Adjustment with Debouncing
function debounce(func, wait) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

function adjustFooter() {
    const footer = document.querySelector('footer');
    const viewportHeight = window.innerHeight;
    const contentHeight = document.body.scrollHeight;

    if (contentHeight < viewportHeight) {
        footer.style.position = 'absolute';
        footer.style.bottom = '0';
    } else {
        footer.style.position = 'relative';
    }
}

const adjustFooterDebounced = debounce(adjustFooter, 200);
window.addEventListener('resize', adjustFooterDebounced);
window.addEventListener('load', adjustFooter);

// Lazy Loading Images
const lazyImages = document.querySelectorAll('img.lazy');

const lazyLoadObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
        }
    });
});

lazyImages.forEach((img) => lazyLoadObserver.observe(img));

// Scroll Animation for About Section
const sections = document.querySelectorAll('.about-token, .key-features .feature');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});

sections.forEach((section) => observer.observe(section));
