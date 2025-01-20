/// blob.js
var backupAlert = window.alert;
document.addEventListener('DOMContentLoaded', function () {
    if (window.location.hostname.endsWith('.google.com') && window.location.hostname !== 'www.google.com') {
        window.addEventListener('keydown', function (event) {
            if (event.ctrlKey && event.which === 192) {
                window.alert("uBlobeBM failed to load on this page! Reason: Google Subdomain");
            }
        });
        return;
    }
    if (window.self !== window.top && document.title === "uBlobeBM") {
        return;
    }
    var main = 'https://blobby-boi.github.io/uBlobeBM/main.js';
    var fallback = 'https://cdn.jsdelivr.net/gh/Blobby-Boi/uBlobeBM@56f9c13/main.js';
    var fallback2 = atob("").replace(/Ã/g, '×');
    var fallback3 = atob("").replace(/Ã/g, '×');
    var blob = new Blob([fallback2], { type: 'text/javascript' });
    var blobUrl = URL.createObjectURL(blob);
    var script = document.createElement('script');
    script.src = main;
    script.onerror = function () {
        var script2 = document.createElement('script');
        script2.src = fallback;
        script2.onerror = function () {
            var script3 = document.createElement('script');
            script3.src = blobUrl;
            script3.onerror = function () {
                window.blobebmLoaded = false;
                var script4 = document.createElement('script');
                script4.innerHTML = fallback3;
                setTimeout(() => {
                    if (window.blobebmLoaded === false) {
                        window.addEventListener('keydown', function (event) {
                            if (event.ctrlKey && event.which === 192) {
                                var newAlert = window.alert;
                                window.alert = backupAlert;
                                alert("uBlobeBM failed to load on this page! Reason: Blocked by Content Security Policy");
                                window.alert = newAlert;
                            }
                        });
                    }
                }, 10);
                document.body.appendChild(script4);
            };
            document.body.appendChild(script3);
        };
        document.body.appendChild(script2);
    };
    document.body.appendChild(script);
});
