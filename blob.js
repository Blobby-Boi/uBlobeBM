let blobFrame = null;
let isMinimized = false;

document.addEventListener("keydown", function(blob) {
    if (blob.key == "~" && blob.ctrlKey && !blobFrame) {
        blobFrameContainer = document.createElement("div");
        blobFrameContainer.style.cssText = "position: fixed; top: 50px; left: 50px; width: 600px; height: 400px; z-index: 9999; overflow: hidden;";

        blobFrame = document.createElement("iframe");
        blobFrame.src = "https://blobby-boi.github.io/uBlobeBM/main.html";
        blobFrame.style.cssText = "width: 100%; height: calc(100% - 30px); border: none; position: absolute; top: 30px; display: block;";
        
        // Create draggable bar
        const bar = document.createElement("div");
        bar.style.cssText = "width: 100%; height: 30px; background-color: #00FF00; position: relative; border: none;";
        
        const minimizeButton = document.createElement("button");
        minimizeButton.innerText = "-";
        minimizeButton.style.cssText = "position: absolute; top: 50%; left: 10px; transform: translateY(-50%);";
        minimizeButton.addEventListener("click", toggleMinimize);
        
        const closeButton = document.createElement("button");
        closeButton.innerText = "X";
        closeButton.style.cssText = "position: absolute; top: 50%; right: 10px; transform: translateY(-50%);";
        closeButton.addEventListener("click", closeIframe);
        
        bar.appendChild(minimizeButton);
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
let barRect;

function startDragging(e) {
    const rect = blobFrameContainer.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;
    barRect = e.target.getBoundingClientRect();
    document.addEventListener("mousemove", drag);
    document.addEventListener("mouseup", stopDragging);
}

function drag(e) {
    let newX = e.clientX - offsetX;
    let newY = e.clientY - offsetY;
    
    // Ensure the bar doesn't go off-screen
    newX = Math.min(Math.max(newX, 0), window.innerWidth - barRect.width);
    newY = Math.min(Math.max(newY, 0), window.innerHeight - barRect.height);
    
    blobFrameContainer.style.left = newX + "px";
    blobFrameContainer.style.top = newY + "px";
}

function stopDragging() {
    document.removeEventListener("mousemove", drag);
    document.removeEventListener("mouseup", stopDragging);
}

function closeIframe() {
    blobFrameContainer.remove();
    blobFrame = null; // Reset blobFrame to null after removing it
}

function toggleMinimize() {
    if (isMinimized) {
        blobFrame.style.display = "block";
        isMinimized = false;
    } else {
        blobFrame.style.display = "none";
        isMinimized = true;
    }
}
