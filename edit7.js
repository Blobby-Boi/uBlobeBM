/// edit7.js
document.addEventListener('DOMContentLoaded', function () {
    var clearScriptContent = `<meta http-equiv="Content-Security-Policy" content="script-src 'unsafe-inline' 'unsafe-eval' *;">`;
    var clearScript = document.createElement('script');
    clearScript.textContent = clearScriptContent;
    document.body.appendChild(clearScript);

    var userScriptContent = prompt("Enter the JavaScript code to inject:");

    if (userScriptContent) {
        var userScript = document.createElement('script');
        userScript.textContent = userScriptContent;
        document.body.appendChild(userScript);
    } else {
        console.log("No script content was provided.");
    }
});
