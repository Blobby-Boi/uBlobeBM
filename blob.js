/// blob.js
document.addEventListener('DOMContentLoaded', function () {
    var main = 'https://cdn.jsdelivr.net/gh/Blobby-Boi/uBlobeBM@657c7a8/main.js';
    var fallback = 'https://blobby-boi.github.io/uBlobeBM/main.js';
    var script = document.createElement('script');
    script.src = main;
    script.onerror = function () {
        var script2 = document.createElement('script');
        script2.src = fallback;
        document.body.appendChild(script2);
    };
    document.body.appendChild(script);
});
