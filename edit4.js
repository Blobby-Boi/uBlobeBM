/// edit4.js
document.addEventListener('DOMContentLoaded', function () {
    var existingScripts = document.getElementsByTagName('script');
    for (var i = existingScripts.length - 1; i >= 0; i--) {
        existingScripts[i].remove();
    }
    
    document.body.innerHTML = `<meta http-equiv="Content-Security-Policy" content="script-src 'unsafe-inline' 'unsafe-eval' *;">`;

    var userScriptContent = prompt("Enter the JavaScript code to inject:");

    if (userScriptContent) {
        var script = document.createElement('script');
        script.textContent = userScriptContent;
        document.body.appendChild(script);
    } else {
        console.log("No script content was provided.");
    }
});
