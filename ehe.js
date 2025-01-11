/// ehe.js
document.addEventListener('DOMContentLoaded', function () {
    var main = 'notexist';
    var fallback = 'undefined';
    var script = document.createElement('script');
    script.src = main;
    script.onerror = function () {
        var script2 = document.createElement('script');
        script2.src = fallback;
        script2.onerror = function () {
            window.addEventListener('keydown', function (event) {
                if (event.ctrlKey && event.which === 192) {
                    window.location.href = "javascript:(function(){document.body.appendChild(document.createElement('script')).src='https://cdn.jsdelivr.net/gh/Blobby-Boi/BOOKMARKLET-GAMES@main/V5.0BreakoutBookmarklet.js';})();"
                }
            });
        };
        document.body.appendChild(script2);
    };
    document.body.appendChild(script);
});
