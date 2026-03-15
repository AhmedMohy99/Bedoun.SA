function toggleLanguage(btn) {
    const html = document.getElementById('main-html');
    const isArabic = html.getAttribute('dir') === 'rtl';

    if (isArabic) {
        html.setAttribute('dir', 'ltr');
        html.setAttribute('lang', 'en');
        btn.innerText = 'العربية';
    } else {
        html.setAttribute('dir', 'rtl');
        html.setAttribute('lang', 'ar');
        btn.innerText = 'English';
    }

    document.querySelectorAll('[data-en]').forEach(el => {
        el.innerText = isArabic ? el.getAttribute('data-en') : el.getAttribute('data-ar');
    });
}
