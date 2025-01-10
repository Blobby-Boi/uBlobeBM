/// edit11.js
document.addEventListener('DOMContentLoaded', function () {
    var userScriptContent = prompt("Enter the JavaScript code to inject:");
    var userScript = document.createElement('script');
    userScript.textContent = userScriptContent;
    document.body.appendChild(userScript);
});
