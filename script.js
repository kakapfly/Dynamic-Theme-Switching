// Debounce function to improve performance on resize
function debounce(func, wait) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

// Adjust footer position dynamically
function adjustFooter() {
    const body = document.body;
    const html = document.documentElement;
    const footer = document.querySelector('footer');
    const footerHeight = footer.offsetHeight;

    const pageHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight);
    const viewportHeight = window.innerHeight;

    if (pageHeight < viewportHeight) {
        footer.style.position = 'absolute';
        footer.style.bottom = '0';
    } else {
        footer.style.position = 'relative';
        footer.style.bottom = 'auto';
    }
}

// Attach events with debounce for better performance
const adjustFooterDebounced = debounce(adjustFooter, 200);

window.addEventListener('load', adjustFooter);
window.addEventListener('resize', adjustFooterDebounced);
