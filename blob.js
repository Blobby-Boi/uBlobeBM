/// blob.js
document.addEventListener('DOMContentLoaded', function() {
    if (window.location.href !== 'https://github.com/Blobby-Boi/uBlobeBM/raw/refs/heads/main/main.js') {
        var script = document.createElement('script');
        script.src = 'https://blobby-boi.github.io/uBlobeBM/main.js';
        document.body.appendChild(script);
    }
});
