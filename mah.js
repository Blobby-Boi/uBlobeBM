/// mah.js
document.addEventListener('DOMContentLoaded', function () {
    var script = document.createElement('script');
    script.textContent = "alert('Script Injection works');";
    document.body.appendChild(script);
});
