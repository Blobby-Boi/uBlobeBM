# Welcome to uBlobeBM (BlobeBM uBlock Edition)!

**uBlobeBM** is a tool that can run bookmarklets using **uBlock Origin** by utilizing the **uBlock Run** exploit. It's very useful if bookmarklets don’t work on your device or are blocked by your administrator. uBlobeBM also does some CSP bypassing shenanigans, which allow it to work in a lot of sites (like Blooket) in which regular **uBlock Run** or **uRun** don't.

---

## **How to Setup uBlobeBM**

1. **Installing uBlock Origin**  
   Make sure you have **uBlock Origin** installed on your computer. If you don't, download it [here](https://chromewebstore.google.com/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm).

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
1. **Opening uBlobeBM**  
   - Press `CTRL + Shift + ~` to open uBlobeBM.
   - If you are warned that the website you are running it on has a strong **Content Security Policy**, it means that some bookmarklets will not work as expected. Those are mainly the ones that create a script referencing an **external source**.

2. **Adding Bookmarklets**  
   - Locate the **"Enter bookmarklet code here"** text input.  
   - You can either:  
     - Copy and paste the bookmarklet code.  
     - Drag the bookmarklet from your bookmark bar into the input field directly.  
   - Click the green **"Add Bookmarklet"** button.
   - Enter the name you’d like for the bookmarklet. The name can be anything, and it can be changed later.
   - You can add as many bookmarklets as you need into uBlobeBM, and they will save even if you close the window or shut down your device.

3. **Executing Bookmarklets**  
   - Once added, your bookmarklet will appear which consists of four buttons:  
     - **Blue button**: Run the bookmarklet.  
     - **Red button**: Remove the bookmarklet.  
     - **Yellow buttons**: Edit the bookmarklet's name and code.
       
   You might come across a website where uBlobeBM complety fails to load on (such as **Github** or any **Google Subdomain**). This occurs because they have a strong **Content Security Policy** that can't be bypassed easily, though there are very few of them.
---
I hope this helps! :)
