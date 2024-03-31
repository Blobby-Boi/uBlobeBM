/// blob.js
document.addEventListener("keydown", function (blob) {
if (blob.key == "~" && blob.ctrlKey) {
	var win = window.open("", "_blank", "width=1250,height=600,top=100,left=50");
	var blob = win.document.createElement("iframe");
	(blob.src = "https://blobby-boi.github.io/uBlobeBM/main.html"),
	(blob.style.cssText = "width:100%; height:100%; border:none;"),
	win.document.body.appendChild(blob),
	win.document.title = "BlobeBM";
	var faviconLink = win.document.createElement("link");
        faviconLink.rel = "shortcut icon";
        faviconLink.href = "favicon.png";
	win.addEventListener("message", function (blob) {
		blob.data.toString().startsWith("execute:") && (eval(blob.data.toString().replace("execute:", "")), win.close());
		});
	}
});
