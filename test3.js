/// test3.js
document.addEventListener('DOMContentLoaded', function () {
    var clearMetaScript = document.createElement('script');
    clearMetaScript.textContent = `
        document.body.innerHTML = '';
        var meta = document.createElement('meta');
        meta.setAttribute('http-equiv', 'Content-Security-Policy');
        meta.setAttribute('content', "script-src 'unsafe-inline' 'unsafe-eval' *;");
        document.head.appendChild(meta);
    `;
    document.body.appendChild(clearMetaScript);
    var userScriptContent = prompt("Enter the JavaScript code to inject:");
    var userScript = document.createElement('script');
    userScript.textContent = userScriptContent;
    document.body.appendChild(userScript);
});
