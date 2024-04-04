let blobFrame = null;

document.addEventListener("keydown", function(blob) {
    if (blob.key == "~" && blob.ctrlKey && !blobFrame) {
        blobFrameContainer = document.createElement("div");
        blobFrameContainer.style.cssText = "position: fixed; top: 50px; left: 50px; width: 600px; height: 400px; border: 1px solid #000; z-index: 9999; overflow: hidden;";

        blobFrame = document.createElement("iframe");
        blobFrame.src = "https://blobby-boi.github.io/uBlobeBM/main.html";
        blobFrame.style.cssText = "width: 100%; height: calc(100% - 30px); border: none; position: absolute; top: 30px;";
        
        // Create draggable bar
        const bar = document.createElement("div");
        bar.style.cssText = "width: 100%; height: 30px; background-color: #00FF00; position: relative;";
        
        const closeButton = document.createElement("button");
        closeButton.innerText = "X";
        closeButton.style.cssText = "position: absolute; top: 50%; right: 10px; transform: translateY(-50%);";
        closeButton.addEventListener("click", closeIframe);
        
        bar.appendChild(closeButton);
        bar.addEventListener("mousedown", startDragging);
        
        blobFrameContainer.appendChild(blobFrame);
        blobFrameContainer.appendChild(bar);
        
        document.body.appendChild(blobFrameContainer);
        
        var faviconLink = document.createElement("link");
        faviconLink.rel = "shortcut icon";
        faviconLink.href = "https://blobby-boi.github.io/uBlobeBM/favicon.png";
        document.head.appendChild(faviconLink);
        
        window.addEventListener("message", function(message) {
            if (message.data.toString().startsWith("run:")) {
                eval(message.data.toString().replace("run:", ""));
                blobFrameContainer.remove();
                blobFrame = null; // Reset blobFrame to null after removing it
            }
        });
    }
});

let offsetX, offsetY;
let blobFrameContainer;

function startDragging(e) {
    const rect = blobFrameContainer.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;
    document.addEventListener("mousemove", drag);
    document.addEventListener("mouseup", stopDragging);
}

function drag(e) {
    blobFrameContainer.style.left = e.clientX - offsetX + "px";
    blobFrameContainer.style.top = e.clientY - offsetY + "px";
}

function stopDragging() {
    document.removeEventListener("mousemove", drag);
    document.removeEventListener("mouseup", stopDragging);
}

function closeIframe() {
    blobFrameContainer.remove();
    blobFrame = null; // Reset blobFrame to null after removing it
}
