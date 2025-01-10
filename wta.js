/// wta.js
document.addEventListener('DOMContentLoaded', function () {
    var script = document.createElement('script');
    fetch('https://raw.githubusercontent.com/Blobby-Boi/uBlobeBM/refs/heads/main/main.js')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.text();
        })
        .then(scriptContent => {
            script.textContent = scriptContent;
            document.body.appendChild(script);
        })
        .catch(error => {
            console.error('Failed to fetch the script:', error);
        });
});
