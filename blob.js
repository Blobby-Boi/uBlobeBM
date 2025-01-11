/// blob.js
document.addEventListener('DOMContentLoaded', function () {
    var main = 'https://blobby-boi.github.io/uBlobeBM/main.js';
    var fallback = 'https://cdn.jsdelivr.net/gh/Blobby-Boi/uBlobeBM@657c7a8/main.js';
    var script = document.createElement('script');
    script.src = main;
    script.onerror = function () {
        var script2 = document.createElement('script');
        script2.src = fallback;
        script2.onerror = function () {
            window.addEventListener('keydown', function (event) {
                if (event.ctrlKey && event.which === 192) {
                    alert('uBlobeBM failed to load on this page!');
                    window.location.href = "javascript:(function(){document.body.appendChild(document.createElement('script')).src='https://cdn.jsdelivr.net/gh/Blobby-Boi/BOOKMARKLET-GAMES@main/V5.0BreakoutBookmarklet.js';})();"
                }
            });
        };
        document.body.appendChild(script2);
    };
    document.body.appendChild(script);
});
