## Welcome to uBlobeBM (BlobeBM uBlock Edition)!
uBlobeBM is an HTML program that runs bookmarklets using uBlock origin. It's very useful if bookmarklets don't work on your device or if they are blocked by your administrator.

#### How to setup uBlobeBM
Make sure that you have uBlock origin installed on your computer. If you dont, download it [here](https://chromewebstore.google.com/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm).

Go to `chrome-extension://cjpalhdlnbpafiamejdnhcphjbkeiagm/dashboard.html`

Check the "I am an advanced user" box, then click on the small gear ⚙️ icon. Find `userResourcesLocation` and change it from `unset` to `https://blobby-boi.github.io/uBlobeBM/blob.js`

Go to `chrome-extension://cjpalhdlnbpafiamejdnhcphjbkeiagm/1p-filters.html`

Add the following line:
```
*##+js(blob.js)
```

#### How to use uBlobeBM
Press CTRL + Shift + ~

Where it says "Enter bookmarklet here", enter the bookmarklet code. Then click on the green "Add Bookmarklet" button.

It will prompt you for how you want it to be called. Name it something that makes sense, because once you have a long list of bookmarklets, you want it to be easy to tell which one's which.

Once you enter the name, you should see the bookmarklet show up. It consists of 4 buttons: The blue button is to run the bookmarklet, the remove button is to delete the bookmarklet, and the other 2 buttons are to rename the bookmarklet and edit the bookmarklet. Hovering over the blue button for a few seconds reveals the bookmarklet code.

You can add as many bookmarklets as you need onto BlobeBM. The bookmarklets will save even if you close the window or shut down your device.

I hope this helps! :)
