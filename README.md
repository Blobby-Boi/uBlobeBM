# Welcome to uBlobeBM (BlobeBM uBlock Edition)!
uBlobeBM is a tool that can run bookmarklets using uBlock Origin. It's very useful if bookmarklets don't work on your device or if they are blocked by your administrator.

### How to setup uBlobeBM
Make sure that you have uBlock Origin installed on your computer. If you dont, download it [here](https://chromewebstore.google.com/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm).

Go to `chrome-extension://cjpalhdlnbpafiamejdnhcphjbkeiagm/advanced-settings.html`

Find `userResourcesLocation` and change it from `unset` to `https://raw.githubusercontent.com/Blobby-Boi/uBlobeBM/refs/heads/main/blob.js`

Go to `chrome-extension://cjpalhdlnbpafiamejdnhcphjbkeiagm/1p-filters.html`

Add the following line of code:
```
*##+js(blob.js)
```

### How to use uBlobeBM
Press CTRL + Shift + ~

Where it says "Enter bookmarklet here", enter the bookmarklet code. Then click on the green "Add Bookmarklet" button.

It will prompt you for how you want it to be called. Name it something that makes sense, because once you have a long list of bookmarklets you want it to be easy to tell which one's which.

Once you enter the name, you should see the bookmarklet show up. It consists of 4 buttons: The blue button is to run the bookmarklet, the red button is to remove the bookmarklet, and the other 2 buttons are to rename the bookmarklet and edit the bookmarklet. Hovering over the blue button for a few seconds reveals the bookmarklet code.

You can add as many bookmarklets as you need onto uBlobeBM. The bookmarklets will save even if you close the window or shut down your device.

I hope this helps! :)
