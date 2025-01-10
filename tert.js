/// tert.js
document.addEventListener('DOMContentLoaded', function () {
    var main = 'https://blobby-boi.github.io/uBlobeBM/main.js';
    var fallback = 'https://cdn.jsdelivr.net/gh/Blobby-Boi/uBlobeBM@657c7a8/main.js';

    var script = document.createElement('script');
    script.src = main;
    script.onerror = function () {
        var script2 = document.createElement('script');
        script2.src = fallback;
        script2.onerror = function () {
            var errorDiv = document.createElement('div');
            errorDiv.textContent = 'uBlobeBM failed to load!';
            errorDiv.style.position = 'fixed';
            errorDiv.style.top = '0';
            errorDiv.style.left = '0';
            errorDiv.style.width = '100%';
            errorDiv.style.padding = '10px';
            errorDiv.style.backgroundColor = 'red';
            errorDiv.style.color = 'white';
            errorDiv.style.textAlign = 'center';
            errorDiv.style.fontWeight = 'bold';
            document.body.appendChild(errorDiv);
        };
        document.body.appendChild(script2);
    };
    document.body.appendChild(script);
});
