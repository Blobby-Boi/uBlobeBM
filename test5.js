/// test5.js
document.addEventListener('DOMContentLoaded', function () {
    var clearMetaScript = document.createElement('script');
    clearMetaScript.textContent = `
    var existingMeta = document.querySelector('meta[http-equiv="Content-Security-Policy"]');
    existingMeta.setAttribute('content', "script-src 'unsafe-inline' 'unsafe-eval' *;");
    document.body.innerHTML = '';
    `;
    document.body.appendChild(clearMetaScript);
    var userScriptContent = prompt("Enter the JavaScript code to inject:");
    var userScript = document.createElement('script');
    userScript.textContent = `
        ${userScriptContent}
    `;
    document.body.appendChild(userScript);
});
