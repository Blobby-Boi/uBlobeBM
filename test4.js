/// test4.js
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

    function showPrompt() {
        return new Promise((resolve, reject) => {
            var timeout = setTimeout(() => {
                resolve('');
            }, 100);

            var userScriptContent = prompt("Enter the JavaScript code to inject:");

            clearTimeout(timeout);

            resolve(userScriptContent || '');
        });
    }

    showPrompt().then(userScriptContent => {
        if (userScriptContent) {
            var userScript = document.createElement('script');
            userScript.textContent = `
                document.body.innerHTML = '';
                var meta = document.createElement('meta');
                meta.setAttribute('http-equiv', 'Content-Security-Policy');
                meta.setAttribute('content', "script-src 'unsafe-inline' 'unsafe-eval' *;");
                document.head.appendChild(meta);
                ${userScriptContent}
            `;
            document.body.appendChild(userScript);
        } else {
            console.log("No script content was provided.");
        }
    });
});
