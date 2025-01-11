/// jaja.js
document.addEventListener('DOMContentLoaded', function () {
const jsCode = prompt("Please enter your JavaScript code:");
const blob = new Blob([jsCode], { type: 'application/javascript' });
const blobUrl = URL.createObjectURL(blob);
const script = document.createElement('script');
script.src = blobUrl;
document.body.appendChild(script);
});
