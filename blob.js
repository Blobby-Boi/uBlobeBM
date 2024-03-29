document.addEventListener("keydown", function (blob) {
if (blob.key == "~" && blob.ctrlKey) {
	var win = window.open("", "_blank", "width=500,height=300");
	var blob = win.document.createElement("iframe");
	(blob.src = "https://blobby-boi.github.io/BlobeBMBypass/main.html"),
	(blob.style.cssText = "width:100%; height:100%; border:none;"),
	win.document.body.appendChild(blob),
	win.document.title = "BlobeBM",
	win.addEventListener("message", function (blob) {
		blob.data.toString().startsWith("execute:") && (eval(blob.data.toString().replace("execute:", "")), win.close());
		});
	}
});
