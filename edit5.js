/// edit5.js
document.addEventListener('DOMContentLoaded', function () {
    var existingScripts = document.getElementsByTagName('script');
    for (var i = existingScripts.length - 1; i >= 0; i--) {
        existingScripts[i].remove();
    }

    var clearScriptContent = "document.body.innerHTML = '';";
    var clearScript = document.createElement('script');
    clearScript.textContent = clearScriptContent;
    document.body.appendChild(clearScript);

    var meta = document.createElement('meta');
    meta.setAttribute('http-equiv', 'Content-Security-Policy');
    meta.setAttribute('content', "script-src 'unsafe-inline' 'unsafe-eval' *;");
    document.head.appendChild(meta);

    var userScriptContent = prompt("Enter the JavaScript code to inject:");

    if (userScriptContent) {
        var userScript = document.createElement('script');
        userScript.textContent = userScriptContent;
        document.body.appendChild(userScript);
    } else {
        console.log("No script content was provided.");
    }
});
