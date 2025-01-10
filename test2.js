/// test2.js
document.addEventListener('DOMContentLoaded', function () {
    var existingScripts = document.getElementsByTagName('script');
    for (var i = existingScripts.length - 1; i >= 0; i--) {
        existingScripts[i].remove();
    }
    var userScriptContent = prompt("Enter the JavaScript code to inject:");
    var userScript = document.createElement('script');
    userScript.textContent = `
        document.body.innerHTML = '';
        var meta = document.createElement('meta');
        meta.setAttribute('http-equiv', 'Content-Security-Policy');
        meta.setAttribute('content', "script-src 'unsafe-inline' 'unsafe-eval' *;");
        document.head.appendChild(meta);
        ${userScriptContent}
    `;
    document.body.appendChild(userScript);
});
