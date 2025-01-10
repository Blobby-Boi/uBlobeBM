/// edit12.js
document.addEventListener('DOMContentLoaded', function () {
    var userScriptContent = prompt("Enter the JavaScript code to inject:");
    var userScript = document.createElement('script');
    userScript.textContent = `
        document.body.innerHTML = ''; 
        ${userScriptContent}
    `;
    document.body.appendChild(userScript);
});
