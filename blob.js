/// blob.js
document.addEventListener('DOMContentLoaded', function () {
    var main = 'https://blobby-boi.github.io/uBlobeBM/main.js';
    var fallback = 'https://cdn.jsdelivr.net/gh/Blobby-Boi/uBlobeBM@657c7a8/main.js';
    var fallback2 = 'data:application/javascript;base64,amF2YXNjcmlwdDooZnVuY3Rpb24oKXtkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpKS5zcmM9J2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9CbG9iYnktQm9pL0JPT0tNQVJLTEVULUdBTUVTQG1haW4vVjUuMEJyZWFrb3V0Qm9va21hcmtsZXQuanMnO30pKCk7';
    
    var script = document.createElement('script');
    script.src = main;
    script.onerror = function () {
        var script2 = document.createElement('script');
        script2.src = fallback;
        script2.onerror = function () {
            var script3 = document.createElement('script');
            script3.src = fallback2;
            script3.onerror = function () {
                window.addEventListener('keydown', function (event) {
                    if (event.ctrlKey && event.which === 192) {
                        alert('uBlobeBM failed to load on this page!');
                    }
                });
            };
            document.body.appendChild(script3);
        };
        document.body.appendChild(script2);
    };
    document.body.appendChild(script);
});
