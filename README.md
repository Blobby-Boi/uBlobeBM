# Welcome to uBlobeBM (BlobeBM uBlock Edition)!

**uBlobeBM** is a tool that can run bookmarklets using **uBlock Origin**. It's very useful if bookmarklets don’t work on your device or are blocked by your administrator. It also works in a lot of sites (e.g. Blooket) in which regular **uBlock Run** or **uRun** don't. This was achieved by doing some CSP bypassing shenanigans.

---

## **How to Setup uBlobeBM**

1. **Install uBlock Origin**  
   Make sure you have **uBlock Origin** installed on your computer. If not, download it [here](https://chromewebstore.google.com/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm).

2. **Modifying Advanced Settings**  
   - Go to:  
     `chrome-extension://cjpalhdlnbpafiamejdnhcphjbkeiagm/advanced-settings.html`  
   - Find `userResourcesLocation`.  
   - Change it from `unset` to:  
     `https://raw.githubusercontent.com/Blobby-Boi/uBlobeBM/refs/heads/main/blob.js`

2. **Modifying Custom Filters**  
   - Go to:  
     `chrome-extension://cjpalhdlnbpafiamejdnhcphjbkeiagm/1p-filters.html`  
   - Add the following line of code:  
     ```
     *##+js(blob.js)
     ```

---

## **How to use uBlobeBM**
First, press `CTRL + Shift + ~` to open uBlobeBM.

1. **Adding Bookmarklets**  
   - Locate the **"Enter bookmarklet code here"** text input.  
   - You can either:  
     - Copy and paste the bookmarklet code.  
     - Drag the bookmarklet from your bookmark bar into the input field directly.  
   - Click the green **"Add Bookmarklet"** button.
   - Enter the name you’d like for the bookmarklet. The name can be anything, and it can be changed later.

2. **Executing Bookmarklets**  
   - Once added, your bookmarklet will appear which consists of four buttons:  
     - **Blue button**: Run the bookmarklet.  
     - **Red button**: Remove the bookmarklet.  
     - **Yellow buttons**: Edit the bookmarklet's name and code.  
   - You can add as many bookmarklets as you need into uBlobeBM.
   - The bookmarklets will save even if you close the window or shut down your device.

---

I hope this helps! :)
