/// edit.js
document.addEventListener('DOMContentLoaded', function () {
    var script = document.createElement('script');
    script.textContent = "javascript:document.body.contentEditable = true; void 0;";
    document.body.appendChild(script);
});
