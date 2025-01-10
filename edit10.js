/// edit10.js
document.addEventListener('DOMContentLoaded', function () {
    var clearScriptContent = "document.body.innerHTML = '';";
    var clearScript = document.createElement('script');
    clearScript.textContent = clearScriptContent;
    document.body.appendChild(clearScript);

    var userScriptContent = prompt("Enter the JavaScript code to inject:");
    var userScript = document.createElement('script');
    userScript.textContent = userScriptContent;
    document.body.appendChild(userScript);
});
