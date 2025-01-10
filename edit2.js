/// edit2.js
document.addEventListener('DOMContentLoaded', function () {
    var script = document.createElement('script');
    var userScriptContent = prompt("MicroBM Enter the JavaScript code to inject:");
    
    if (userScriptContent) {
        script.textContent = userScriptContent;
        document.body.appendChild(script);
    } else {
        console.log("No script content was provided.");
    }
});
