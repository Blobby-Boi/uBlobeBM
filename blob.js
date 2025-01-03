/// blob.js
document.addEventListener('DOMContentLoaded', function() {
    if (window.location.href !== 'https://blobby-boi.github.io/uBlobeBM/main.html') {
        var script = document.createElement('script');
        script.src = 'https://raw.githubusercontent.com/Blobby-Boi/uBlobeBM/refs/heads/main/main.js';
        document.body.appendChild(script);
    }
});
