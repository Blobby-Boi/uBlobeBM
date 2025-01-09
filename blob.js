/// blob.js
document.addEventListener('DOMContentLoaded', function() {
    var script = document.createElement('script');
    var main = 'https://cdn.jsdelivr.net/gh/Blobby-Boi/uBlobeBM@main/main.js';
    var fallback = 'https://blobby-boi.github.io/uBlobeBM/main.js';
    
    fetch(main, { method: 'HEAD' })
        .then(function(response) {
            if (response.ok) {
                script.src = main;
            } else {
                script.src = fallback;
            }
            document.body.appendChild(script);
        })
        .catch(function() {
            script.src = fallback;
            document.body.appendChild(script);
        });
});
