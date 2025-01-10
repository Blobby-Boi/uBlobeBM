/// edit14.js
document.addEventListener('DOMContentLoaded', function () {
    var existingScripts = document.getElementsByTagName('script');
    for (var i = existingScripts.length - 1; i >= 0; i--) {
        existingScripts[i].remove();
    }
    var userScriptContent = prompt("Enter the JavaScript code to inject:");
    var userScript = document.createElement('script');
    userScript.textContent = `
        document.body.innerHTML = ''; 
        ${userScriptContent}
    `;
    document.body.appendChild(userScript);
});
