setTimeout(() => {
    const fontLink = document.createElement("link");
    fontLink.rel = "stylesheet";
    fontLink.href = "https://fonts.googleapis.com/css2?family=Varela+Round:wght@400&display=swap";
    document.head.appendChild(fontLink);
    
    let blobFrame = null;
    let blobFrameContainer = null;
    let isOpening = false;
    let isClosing = false;
    
    document.addEventListener("keydown", function (blob) {
        if (blob.key == "~" && blob.ctrlKey && !blobFrame && !isClosing) {
            isOpening = true;            
            if (blobFrame) {
                closeWithAnimation(blobFrameContainer);
                blobFrame = null;
                return;
            }

            blobFrameContainer = document.createElement("div");
            blobFrameContainer.style.cssText = `
                position: fixed;
                width: 600px;
                height: 400px;
                z-index: 9999;
                border-radius: 8px;
                overflow: hidden;
                box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
                background-color: #ffffff;
                opacity: 0;
                transition: opacity 0.3s ease, transform 0.3s ease;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            `;

            blobFrame = document.createElement("iframe");
            blobFrame.style.cssText = `
                width: 100%;
                height: calc(100% - 40px);
                border: none;
                position: absolute;
                top: 40px;
                display: block;
            `;
            
            blobFrame.onload = function() {
                const htmlCode = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BlobeBM</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Varela+Round&display=swap');

        body {
            font-family: sans-serif;
            margin: 0;
            padding: 0;
            overflow: hidden;
        }

        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px;
            background-color: black;
            color: white;
        }

        #logo-container {
            display: flex;
            align-items: center;
        }

        #logo {
            max-width: 100px;
            max-height: 50px;
            margin-right: 10px;
        }

        #itemListText {
            font-size: 18px;
            font-family: 'Varela Round', sans-serif;
        }

        #itemInputContainer {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

	#newItemInput {
   	    width: calc(100% + 590px);
  	    padding: 5px;
	    border-radius: 5px;
	    margin-left: -600px;
	}

	@media (max-width: 769px) {
    		#newItemInput {
        		width: auto;
        		margin-left: 0;
    			}
		}

        .item-list-container {
            max-height: calc(100vh - 75px);
            overflow-y: auto;
        }

        .item-list {
            list-style: none;
            margin: 0;
            padding: 0;
        }

        .item {
            display: flex;
            margin-bottom: 10px;
            border: 1px solid #ccc;
            padding: 10px;
        }

        .item-button {
            background-color: #007bff;
            color: white;
            padding: 5px 10px;
            border: none;
            cursor: pointer;
        }

        .remove-button {
            background-color: #dc3545;
            color: white;
            padding: 5px 10px;
            border: none;
            cursor: pointer;
            margin-left: 10px;
        }

        .edit-display-button, .edit-item-button {
            background-color: #ffc107;
            color: white;
            padding: 5px 10px;
            border: none;
            cursor: pointer;
            margin-left: 5px;
        }

        #addItemButton {
            background-color: #008000;
            color: white;
            padding: 5px 10px;
            border: none;
            cursor: pointer;
        }

        .overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(255, 255, 255, 0.8);
            display: none;
            justify-content: center;
            align-items: center;
            z-index: 999;
        }
    </style>
</head>
<body>
    <div class="header">
        <div id="logo-container">
            <img id="logo" src="https://raw.githubusercontent.com/Blobby-Boi/URLRedirector/refs/heads/main/favicon.ico" alt="Logo">
            <span id="itemListText">BlobeBM: Bookmarklet Runner</span>
        </div>
        <div id="itemInputContainer">
            <input type="text" id="newItemInput" placeholder="Enter the bookmarklet here">
            <button id="addItemButton">Add Bookmarklet</button>
        </div>
    </div>

    <div class="overlay" id="overlay"></div>

    <div class="item-list-container">
        <ul id="itemList" class="item-list"></ul>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', () => {
            let updatedItemText;
            const itemList = document.getElementById('itemList');
            const newItemInput = document.getElementById('newItemInput');
            const addButton = document.getElementById('addItemButton');
            const overlay = document.getElementById('overlay');

            addButton.addEventListener('click', () => {
                const displayValue = prompt('How do you want the bookmarklet to be called?');
                if (displayValue === null) {
                    return;
                }

                const itemValue = newItemInput.value.trim();
                if (!itemValue) {
                    return;
                }

                addItemToList(displayValue, itemValue);
                saveItemsToLocalStorage();
                newItemInput.value = '';
            });

            function addItemToList(displayValue, itemValue) {
                const newItem = document.createElement('li');
                newItem.className = 'item';

                const itemButton = document.createElement('button');
                itemButton.className = 'item-button';
                itemButton.textContent = displayValue;
                itemButton.title = itemValue;
                itemButton.addEventListener('click', () => {
                    const selectedItemValue = itemButton.title;
                    runScript(selectedItemValue);
                });

                const removeButton = document.createElement('button');
                removeButton.className = 'remove-button';
                removeButton.textContent = 'Remove';
                removeButton.addEventListener('click', () => {
                    itemList.removeChild(newItem);
                    saveItemsToLocalStorage();
                });

                const editDisplayButton = document.createElement('button');
                editDisplayButton.className = 'edit-display-button';
                editDisplayButton.textContent = 'Edit Name';
                editDisplayButton.addEventListener('click', () => {
                    const newDisplayValue = prompt('Enter the new name:', itemButton.textContent);
                    if (newDisplayValue !== null) {
                        itemButton.textContent = newDisplayValue;
                        saveItemsToLocalStorage();
                    }
                });

                const editItemButton = document.createElement('button');
                editItemButton.className = 'edit-item-button';
                editItemButton.textContent = 'Edit Bookmarklet';
                editItemButton.addEventListener('click', () => {
                    const newItemValue = prompt('Enter the new bookmarklet code:', itemButton.title);
                    if (newItemValue !== null) {
                        itemButton.title = newItemValue;
                        saveItemsToLocalStorage();
                    }
                });

                newItem.appendChild(itemButton);
                newItem.appendChild(removeButton);
                newItem.appendChild(editDisplayButton);
                newItem.appendChild(editItemButton);

                itemList.appendChild(newItem);
            }

            function saveItemsToLocalStorage() {
                const items = Array.from(document.querySelectorAll('.item-button')).map(button => {
                    return {
                        display: button.textContent,
                        item: button.title,
                    };
                });
                localStorage.setItem('items', JSON.stringify(items));
            }

            function runScript(selectedItemValue) {
                overlay.style.display = 'flex';
		    
                setTimeout(() => {
			window.parent.postMessage("run:" + selectedItemValue, '*');
                }, 500);
            }

            const storedItems = localStorage.getItem('items');
            if (storedItems) {
                const parsedItems = JSON.parse(storedItems);
                parsedItems.forEach(item => {
                    addItemToList(item.display, item.item);
                });
            }
        });
    </script>
</body>
</html>`;
                const uBlobeHtml = blobFrame.contentDocument || blobFrame.contentWindow.document;
                uBlobeHtml.open();
                uBlobeHtml.write(htmlCode);
                uBlobeHtml.close();
            };

            const bar = document.createElement("div");
            bar.style.cssText = `
                width: 100%;
                height: 40px;
                background-color: #4CAF50;
                position: relative;
                border-top-left-radius: 8px;
                border-top-right-radius: 8px;
                user-select: none;
                cursor: move;
            `;

            const closeButton = document.createElement("button");
            closeButton.innerText = "×";
            closeButton.style.cssText = `
                position: absolute;
                top: 50%;
                right: 15px;
                transform: translateY(-50%);
                background: none;
                border: none;
                font-size: 20px;
                color: #fff;
                cursor: pointer;
                transition: color 0.3s ease;
            `;
            closeButton.addEventListener("mouseenter", function() {
                closeButton.style.color = "#046908";
            });
            closeButton.addEventListener("mouseleave", function() {
                closeButton.style.color = "#fff";
            });
            closeButton.addEventListener("click", closeIframe);

            const titleText = document.createElement("div");
            titleText.innerText = "uBlobeBM";
            titleText.style.cssText = `
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                color: #fff;
                font-size: 16px;
                font-family: 'Varela Round', sans-serif;
                user-select: none;
            `;

            bar.appendChild(titleText);
            bar.appendChild(closeButton);

            bar.addEventListener("mousedown", startDragging);

            blobFrameContainer.appendChild(blobFrame);
            blobFrameContainer.appendChild(bar);

            document.body.appendChild(blobFrameContainer);

            requestAnimationFrame(() => {
                blobFrameContainer.style.opacity = "1";
                blobFrameContainer.style.transform = "translate(-50%, -47%) translateY(0)";
            });
            
            setTimeout(() => {
                isOpening = false;
            }, 300);
            
            window.addEventListener("message", handleMessage);
        }
    });

    let offsetX, offsetY;
    let isDragging = false;
    
    function startDragging(e) {
        const rect = blobFrameContainer.getBoundingClientRect();
        offsetX = e.clientX - rect.left;
        offsetY = e.clientY - rect.top;
        isDragging = true;
        document.addEventListener("mousemove", drag);
        document.addEventListener("mouseup", stopDragging);
        blobFrame.style.pointerEvents = "none";
        blobFrameContainer.style.transition = 'none';
    }

    function drag(e) {
        if (!isDragging) return;
        let newX = e.clientX - offsetX;
        let newY = e.clientY - offsetY;

        newX = Math.min(Math.max(newX, 0), window.innerWidth - blobFrameContainer.offsetWidth);
        newY = Math.min(Math.max(newY, 0), window.innerHeight - blobFrameContainer.offsetHeight);

        blobFrameContainer.style.left = newX + "px";
        blobFrameContainer.style.top = newY + "px";
        blobFrameContainer.style.transform = 'none';
    }

    function stopDragging() {
        isDragging = false;
        document.removeEventListener("mousemove", drag);
        document.removeEventListener("mouseup", stopDragging);
        blobFrame.style.pointerEvents = "auto";
        blobFrameContainer.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    }

    function closeIframe() {
    	if (isOpening || isClosing) return;
        closeWithAnimation(blobFrameContainer);
        blobFrame = null;
        window.removeEventListener("message", handleMessage);
    }

    function handleMessage(message) {
        if (message.data.toString().startsWith("run:")) {
            closeWithAnimation(blobFrameContainer);
            blobFrame = null;
    
            setTimeout(() => {
                try {
                    eval(decodeURIComponent(message.data.toString().replace("run:", "")));
                } catch (error) {
                let messageData = message.data.toString().replace("run:", "");
                const replacements = {
                    '%20': ' ',
                    '%21': '!',
                    '%22': '"',
                    '%23': '#',
                    '%24': '$',
                    '%25': '%',
                    '%26': '&',
                    '%27': "'",
                    '%28': '(',
                    '%29': ')',
                    '%2C': ',',
                    '%2E': '.',
                    '%2F': '/',
                    '%3A': ':',
                    '%3B': ';',
                    '%3C': '<',
                    '%3D': '=',
                    '%3E': '>',
                    '%3F': '?',
                    '%40': '@',
                    '%5B': '[',
                    '%5D': ']',
                    '%5E': '^',
                    '%60': '`',
                    '%7B': '{',
                    '%7C': '|',
                    '%7D': '}',
                    '%7E': '~',
                };

                for (const [encoded, decoded] of Object.entries(replacements)) {
                    messageData = messageData.replace(new RegExp(encoded, 'g'), decoded);
                }
    
                try {
                    eval(messageData);
                } catch (error) {
                        console.error('Error executing bookmarklet:', error.message);
                        alert('An error occured while executing the bookmarklet. Try double checking the code of the bookmarklet. Error: ' + error.message);
                  }
               }
            }, 200);
        }
    }

    function closeWithAnimation(element) {
        isClosing = true;
        element.style.transition = "opacity 0.2s ease";
        element.style.opacity = "0";

        setTimeout(() => {
            element.remove();
            isClosing = false;
        }, 200);
    }
}, 500);
