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
        faviconLink.href = "https://blobby-boi.github.io/uBlobeBM/favicon.png";
	win.document.head.appendChild(faviconLink);
	win.addEventListener("message", function (blob) {
		alert("Received message:", blob.data);
		blob.data.toString().startsWith("run:") && (eval(blob.data.toString().replace("run:", "")), win.close());
		});
	}
});
