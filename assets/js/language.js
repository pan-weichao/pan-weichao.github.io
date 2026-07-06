(function () {
    function applyLanguage(language) {
        var lang = language === 'zh' ? 'zh' : 'en';
        document.documentElement.dataset.language = lang;
        document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
        var button = document.getElementById('language-toggle');
        if (button) button.textContent = lang === 'zh' ? 'EN' : '中文';
        try { localStorage.setItem('preferred-language', lang); } catch (_) {}
    }

    document.addEventListener('DOMContentLoaded', function () {
        var saved = 'en';
        try { saved = localStorage.getItem('preferred-language') || 'en'; } catch (_) {}
        var requested = new URLSearchParams(window.location.search).get('lang');
        if (requested === 'en' || requested === 'zh') saved = requested;
        applyLanguage(saved);
        var button = document.getElementById('language-toggle');
        if (button) {
            button.addEventListener('click', function () {
                applyLanguage(document.documentElement.dataset.language === 'zh' ? 'en' : 'zh');
            });
        }
    });
})();
