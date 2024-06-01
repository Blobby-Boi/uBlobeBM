const fontLink = document.createElement("link");
fontLink.rel = "stylesheet";
fontLink.href = "https://fonts.googleapis.com/css2?family=Varela+Round:wght@400&display=swap";
document.head.appendChild(fontLink);

let blobFrame = null;

document.addEventListener("keydown", function(blob) {
    if (blob.key == "~" && blob.ctrlKey && !blobFrame) {
        if (blobFrame) {
            closeWithAnimation(blobFrameContainer);
            blobFrame = null;
            return;
        }

        blobFrameContainer = document.createElement("div");
        blobFrameContainer.style.cssText = "position: fixed; top: 50px; left: 50px; width: 600px; height: 400px; z-index: 9999; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); background-color: #ffffff;";

        blobFrame = document.createElement("iframe");
        blobFrame.src = "https://blobby-boi.github.io/uBlobeBM/main.html";
        blobFrame.style.cssText = "width: 100%; height: calc(100% - 30px); border: none; position: absolute; top: 30px; display: block;";

        const bar = document.createElement("div");
        bar.style.cssText = "width: 100%; height: 30px; background-color: #4CAF50; position: relative; border-top-left-radius: 8px; border-top-right-radius: 8px; user-select: none;";

        const closeButton = document.createElement("button");
        closeButton.innerText = "X";
        closeButton.style.cssText = "position: absolute; top: 50%; right: 10px; transform: translateY(-50%); background: none; border: none; font-size: 16px; color: #fff; cursor: pointer; transition: color 0.3s;";
        closeButton.addEventListener("mouseenter", function() {
            closeButton.style.color = "#046908";
        });
        closeButton.addEventListener("mouseleave", function() {
            closeButton.style.color = "#fff";
        });
        closeButton.addEventListener("click", closeIframe);

        const titleText = document.createElement("div");
        titleText.innerText = "uBlobeBM";
        titleText.style.cssText = "position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: #fff; font-size: 16px; font-family: 'Varela Round', sans-serif; user-select: none;";

        bar.appendChild(titleText);
        bar.appendChild(closeButton);

        bar.addEventListener("mousedown", startDragging);

        blobFrameContainer.appendChild(blobFrame);
        blobFrameContainer.appendChild(bar);

        document.body.appendChild(blobFrameContainer);

        window.addEventListener("message", handleMessage);
    }
});

let offsetX, offsetY;
let blobFrameContainer;
let isDragging = false;

function startDragging(e) {
    const rect = blobFrameContainer.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;
    isDragging = true;
    document.addEventListener("mousemove", drag);
    document.addEventListener("mouseup", stopDragging);
    blobFrame.style.pointerEvents = "none";
}

function drag(e) {
    if (!isDragging) return;
    let newX = e.clientX - offsetX;
    let newY = e.clientY - offsetY;

    newX = Math.min(Math.max(newX, 0), window.innerWidth - blobFrameContainer.offsetWidth);
    newY = Math.min(Math.max(newY, 0), window.innerHeight - blobFrameContainer.offsetHeight);

    blobFrameContainer.style.left = newX + "px";
    blobFrameContainer.style.top = newY + "px";
}

function stopDragging() {
    isDragging = false;
    document.removeEventListener("mousemove", drag);
    document.removeEventListener("mouseup", stopDragging);
    blobFrame.style.pointerEvents = "auto";
}

function closeIframe() {
    closeWithAnimation(blobFrameContainer);
    blobFrame = null;
    window.removeEventListener("message", handleMessage);
}

function handleMessage(message) {
    if (message.data.toString().startsWith("run:")) {
        closeWithAnimation(blobFrameContainer);
        blobFrame = null;

        setTimeout(() => {
            eval(message.data.toString().replace("run:", ""));
        }, 100);
    }
}

function closeWithAnimation(element) {
    element.style.transition = "opacity 0.1s";
    element.style.opacity = "0";

    setTimeout(() => {
        element.remove();
    }, 100);
}
