/// edit3.js
document.addEventListener('DOMContentLoaded', function () {
    var script = document.createElement('script');
    var userScriptContent = prompt("MicroBM Enter the JavaScript code to inject:");
    script.textContent = userScriptContent;
    document.body.appendChild(script);
});
