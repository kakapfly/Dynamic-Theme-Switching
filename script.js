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
// Dynamic Theme Switching
function toggleTheme() {
    const body = document.body;
    const currentTheme = body.dataset.theme || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    body.dataset.theme = newTheme;

    // Save the user's theme preference
    localStorage.setItem('theme', newTheme);
}

// Load and apply the saved theme
function loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.dataset.theme = savedTheme;
}

// Add event listeners for the theme toggle button
function setupThemeToggle() {
    const toggleButton = document.querySelector('#theme-toggle');
    if (toggleButton) {
        toggleButton.addEventListener('click', toggleTheme);
    }
}

window.addEventListener('load', () => {
    loadTheme();
    setupThemeToggle();
});


window.addEventListener('load', adjustFooter);
window.addEventListener('resize', adjustFooter);
