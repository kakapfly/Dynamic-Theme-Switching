// Adjust footer position for responsiveness
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

window.addEventListener('load', adjustFooter);
window.addEventListener('resize', adjustFooter);
