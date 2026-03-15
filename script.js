function toggleLanguage(btn) {
    const html = document.getElementById('main-html');
    const isArabic = html.getAttribute('dir') === 'rtl';

    if (isArabic) {
        // Switch to English
        html.setAttribute('dir', 'ltr');
        html.setAttribute('lang', 'en');
        btn.innerText = 'العربية';
    } else {
        // Switch to Arabic
        html.setAttribute('dir', 'rtl');
        html.setAttribute('lang', 'ar');
        btn.innerText = 'English';
    }

    // Update all text elements with data-en and data-ar attributes
    document.querySelectorAll('[data-en]').forEach(el => {
        el.innerText = isArabic ? el.getAttribute('data-en') : el.getAttribute('data-ar');
    });
}
