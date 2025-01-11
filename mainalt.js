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

            fetch("data:text/html;base64,PCFET0NUWVBFIGh0bWw+CjxodG1sIGxhbmc9ImVuIj4KPGhlYWQ+CiAgICA8bWV0YSBjaGFyc2V0PSJVVEYtOCI+CiAgICA8bWV0YSBuYW1lPSJ2aWV3cG9ydCIgY29udGVudD0id2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMCI+CiAgICA8dGl0bGU+QmxvYmVCTTwvdGl0bGU+CiAgICA8c3R5bGU+CiAgICAgICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9VmFyZWxhK1JvdW5kJmRpc3BsYXk9c3dhcCcpOwoKICAgICAgICBib2R5IHsKICAgICAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7CiAgICAgICAgICAgIG1hcmdpbjogMDsKICAgICAgICAgICAgcGFkZGluZzogMDsKICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjsKICAgICAgICB9CgogICAgICAgIC5oZWFkZXIgewogICAgICAgICAgICBkaXNwbGF5OiBmbGV4OwogICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47CiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7CiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7CiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrOwogICAgICAgICAgICBjb2xvcjogd2hpdGU7CiAgICAgICAgfQoKICAgICAgICAjbG9nby1jb250YWluZXIgewogICAgICAgICAgICBkaXNwbGF5OiBmbGV4OwogICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgICAgIH0KCiAgICAgICAgI2xvZ28gewogICAgICAgICAgICBtYXgtd2lkdGg6IDEwMHB4OwogICAgICAgICAgICBtYXgtaGVpZ2h0OiA1MHB4OwogICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7CiAgICAgICAgfQoKICAgICAgICAjaXRlbUxpc3RUZXh0IHsKICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4OwogICAgICAgICAgICBmb250LWZhbWlseTogJ1ZhcmVsYSBSb3VuZCcsIHNhbnMtc2VyaWY7CiAgICAgICAgfQoKICAgICAgICAjaXRlbUlucHV0Q29udGFpbmVyIHsKICAgICAgICAgICAgZGlzcGxheTogZmxleDsKICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsKICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsKICAgICAgICB9CgoJI25ld0l0ZW1JbnB1dCB7CiAgIAkgICAgd2lkdGg6IGNhbGMoMTAwJSArIDU5MHB4KTsKICAJICAgIHBhZGRpbmc6IDVweDsKCSAgICBib3JkZXItcmFkaXVzOiA1cHg7CgkgICAgbWFyZ2luLWxlZnQ6IC02MDBweDsKCX0KCglAbWVkaWEgKG1heC13aWR0aDogNzY5cHgpIHsKICAgIAkJI25ld0l0ZW1JbnB1dCB7CiAgICAgICAgCQl3aWR0aDogYXV0bzsKICAgICAgICAJCW1hcmdpbi1sZWZ0OiAwOwogICAgCQkJfQoJCX0KCiAgICAgICAgLml0ZW0tbGlzdC1jb250YWluZXIgewogICAgICAgICAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNzVweCk7CiAgICAgICAgICAgIG92ZXJmbG93LXk6IGF1dG87CiAgICAgICAgfQoKICAgICAgICAuaXRlbS1saXN0IHsKICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTsKICAgICAgICAgICAgbWFyZ2luOiAwOwogICAgICAgICAgICBwYWRkaW5nOiAwOwogICAgICAgIH0KCiAgICAgICAgLml0ZW0gewogICAgICAgICAgICBkaXNwbGF5OiBmbGV4OwogICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4OwogICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjOwogICAgICAgICAgICBwYWRkaW5nOiAxMHB4OwogICAgICAgIH0KCiAgICAgICAgLml0ZW0tYnV0dG9uIHsKICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjsKICAgICAgICAgICAgY29sb3I6IHdoaXRlOwogICAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweDsKICAgICAgICAgICAgYm9yZGVyOiBub25lOwogICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7CiAgICAgICAgfQoKICAgICAgICAucmVtb3ZlLWJ1dHRvbiB7CiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkYzM1NDU7CiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTsKICAgICAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7CiAgICAgICAgICAgIGJvcmRlcjogbm9uZTsKICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyOwogICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDsKICAgICAgICB9CgogICAgICAgIC5lZGl0LWRpc3BsYXktYnV0dG9uLCAuZWRpdC1pdGVtLWJ1dHRvbiB7CiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmMxMDc7CiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTsKICAgICAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7CiAgICAgICAgICAgIGJvcmRlcjogbm9uZTsKICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyOwogICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4OwogICAgICAgIH0KCiAgICAgICAgI2FkZEl0ZW1CdXR0b24gewogICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4MDAwOwogICAgICAgICAgICBjb2xvcjogd2hpdGU7CiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4OwogICAgICAgICAgICBib3JkZXI6IG5vbmU7CiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjsKICAgICAgICB9CgogICAgICAgIC5vdmVybGF5IHsKICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkOwogICAgICAgICAgICB0b3A6IDA7CiAgICAgICAgICAgIGxlZnQ6IDA7CiAgICAgICAgICAgIHdpZHRoOiAxMDAlOwogICAgICAgICAgICBoZWlnaHQ6IDEwMCU7CiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTsKICAgICAgICAgICAgZGlzcGxheTogbm9uZTsKICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7CiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7CiAgICAgICAgICAgIHotaW5kZXg6IDk5OTsKICAgICAgICB9CiAgICA8L3N0eWxlPgo8L2hlYWQ+Cjxib2R5PgogICAgPGRpdiBjbGFzcz0iaGVhZGVyIj4KICAgICAgICA8ZGl2IGlkPSJsb2dvLWNvbnRhaW5lciI+CiAgICAgICAgICAgIDxpbWcgaWQ9ImxvZ28iIHNyYz0iaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL0Jsb2JieS1Cb2kvVVJMUmVkaXJlY3Rvci9yZWZzL2hlYWRzL21haW4vZmF2aWNvbi5pY28iIGFsdD0iTG9nbyI+CiAgICAgICAgICAgIDxzcGFuIGlkPSJpdGVtTGlzdFRleHQiPkJsb2JlQk06IEJvb2ttYXJrbGV0IFJ1bm5lcjwvc3Bhbj4KICAgICAgICA8L2Rpdj4KICAgICAgICA8ZGl2IGlkPSJpdGVtSW5wdXRDb250YWluZXIiPgogICAgICAgICAgICA8aW5wdXQgdHlwZT0idGV4dCIgaWQ9Im5ld0l0ZW1JbnB1dCIgcGxhY2Vob2xkZXI9IkVudGVyIHRoZSBib29rbWFya2xldCBoZXJlIj4KICAgICAgICAgICAgPGJ1dHRvbiBpZD0iYWRkSXRlbUJ1dHRvbiI+QWRkIEJvb2ttYXJrbGV0PC9idXR0b24+CiAgICAgICAgPC9kaXY+CiAgICA8L2Rpdj4KCiAgICA8ZGl2IGNsYXNzPSJvdmVybGF5IiBpZD0ib3ZlcmxheSI+PC9kaXY+CgogICAgPGRpdiBjbGFzcz0iaXRlbS1saXN0LWNvbnRhaW5lciI+CiAgICAgICAgPHVsIGlkPSJpdGVtTGlzdCIgY2xhc3M9Iml0ZW0tbGlzdCI+PC91bD4KICAgIDwvZGl2PgoKICAgIDxzY3JpcHQ+CiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHsKICAgICAgICAgICAgbGV0IHVwZGF0ZWRJdGVtVGV4dDsKICAgICAgICAgICAgY29uc3QgaXRlbUxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbUxpc3QnKTsKICAgICAgICAgICAgY29uc3QgbmV3SXRlbUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld0l0ZW1JbnB1dCcpOwogICAgICAgICAgICBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkSXRlbUJ1dHRvbicpOwogICAgICAgICAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ292ZXJsYXknKTsKCiAgICAgICAgICAgIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsKICAgICAgICAgICAgICAgIGNvbnN0IGRpc3BsYXlWYWx1ZSA9IHByb21wdCgnSG93IGRvIHlvdSB3YW50IHRoZSBib29rbWFya2xldCB0byBiZSBjYWxsZWQ/Jyk7CiAgICAgICAgICAgICAgICBpZiAoZGlzcGxheVZhbHVlID09PSBudWxsKSB7CiAgICAgICAgICAgICAgICAgICAgcmV0dXJuOwogICAgICAgICAgICAgICAgfQoKICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1WYWx1ZSA9IG5ld0l0ZW1JbnB1dC52YWx1ZS50cmltKCk7CiAgICAgICAgICAgICAgICBpZiAoIWl0ZW1WYWx1ZSkgewogICAgICAgICAgICAgICAgICAgIHJldHVybjsKICAgICAgICAgICAgICAgIH0KCiAgICAgICAgICAgICAgICBhZGRJdGVtVG9MaXN0KGRpc3BsYXlWYWx1ZSwgaXRlbVZhbHVlKTsKICAgICAgICAgICAgICAgIHNhdmVJdGVtc1RvTG9jYWxTdG9yYWdlKCk7CiAgICAgICAgICAgICAgICBuZXdJdGVtSW5wdXQudmFsdWUgPSAnJzsKICAgICAgICAgICAgfSk7CgogICAgICAgICAgICBmdW5jdGlvbiBhZGRJdGVtVG9MaXN0KGRpc3BsYXlWYWx1ZSwgaXRlbVZhbHVlKSB7CiAgICAgICAgICAgICAgICBjb25zdCBuZXdJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTsKICAgICAgICAgICAgICAgIG5ld0l0ZW0uY2xhc3NOYW1lID0gJ2l0ZW0nOwoKICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTsKICAgICAgICAgICAgICAgIGl0ZW1CdXR0b24uY2xhc3NOYW1lID0gJ2l0ZW0tYnV0dG9uJzsKICAgICAgICAgICAgICAgIGl0ZW1CdXR0b24udGV4dENvbnRlbnQgPSBkaXNwbGF5VmFsdWU7CiAgICAgICAgICAgICAgICBpdGVtQnV0dG9uLnRpdGxlID0gaXRlbVZhbHVlOwogICAgICAgICAgICAgICAgaXRlbUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsKICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZEl0ZW1WYWx1ZSA9IGl0ZW1CdXR0b24udGl0bGU7CiAgICAgICAgICAgICAgICAgICAgcnVuU2NyaXB0KHNlbGVjdGVkSXRlbVZhbHVlKTsKICAgICAgICAgICAgICAgIH0pOwoKICAgICAgICAgICAgICAgIGNvbnN0IHJlbW92ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpOwogICAgICAgICAgICAgICAgcmVtb3ZlQnV0dG9uLmNsYXNzTmFtZSA9ICdyZW1vdmUtYnV0dG9uJzsKICAgICAgICAgICAgICAgIHJlbW92ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdSZW1vdmUnOwogICAgICAgICAgICAgICAgcmVtb3ZlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gewogICAgICAgICAgICAgICAgICAgIGl0ZW1MaXN0LnJlbW92ZUNoaWxkKG5ld0l0ZW0pOwogICAgICAgICAgICAgICAgICAgIHNhdmVJdGVtc1RvTG9jYWxTdG9yYWdlKCk7CiAgICAgICAgICAgICAgICB9KTsKCiAgICAgICAgICAgICAgICBjb25zdCBlZGl0RGlzcGxheUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpOwogICAgICAgICAgICAgICAgZWRpdERpc3BsYXlCdXR0b24uY2xhc3NOYW1lID0gJ2VkaXQtZGlzcGxheS1idXR0b24nOwogICAgICAgICAgICAgICAgZWRpdERpc3BsYXlCdXR0b24udGV4dENvbnRlbnQgPSAnRWRpdCBOYW1lJzsKICAgICAgICAgICAgICAgIGVkaXREaXNwbGF5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gewogICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld0Rpc3BsYXlWYWx1ZSA9IHByb21wdCgnRW50ZXIgdGhlIG5ldyBuYW1lOicsIGl0ZW1CdXR0b24udGV4dENvbnRlbnQpOwogICAgICAgICAgICAgICAgICAgIGlmIChuZXdEaXNwbGF5VmFsdWUgIT09IG51bGwpIHsKICAgICAgICAgICAgICAgICAgICAgICAgaXRlbUJ1dHRvbi50ZXh0Q29udGVudCA9IG5ld0Rpc3BsYXlWYWx1ZTsKICAgICAgICAgICAgICAgICAgICAgICAgc2F2ZUl0ZW1zVG9Mb2NhbFN0b3JhZ2UoKTsKICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICB9KTsKCiAgICAgICAgICAgICAgICBjb25zdCBlZGl0SXRlbUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpOwogICAgICAgICAgICAgICAgZWRpdEl0ZW1CdXR0b24uY2xhc3NOYW1lID0gJ2VkaXQtaXRlbS1idXR0b24nOwogICAgICAgICAgICAgICAgZWRpdEl0ZW1CdXR0b24udGV4dENvbnRlbnQgPSAnRWRpdCBCb29rbWFya2xldCc7CiAgICAgICAgICAgICAgICBlZGl0SXRlbUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsKICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdJdGVtVmFsdWUgPSBwcm9tcHQoJ0VudGVyIHRoZSBuZXcgYm9va21hcmtsZXQgY29kZTonLCBpdGVtQnV0dG9uLnRpdGxlKTsKICAgICAgICAgICAgICAgICAgICBpZiAobmV3SXRlbVZhbHVlICE9PSBudWxsKSB7CiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1CdXR0b24udGl0bGUgPSBuZXdJdGVtVmFsdWU7CiAgICAgICAgICAgICAgICAgICAgICAgIHNhdmVJdGVtc1RvTG9jYWxTdG9yYWdlKCk7CiAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgfSk7CgogICAgICAgICAgICAgICAgbmV3SXRlbS5hcHBlbmRDaGlsZChpdGVtQnV0dG9uKTsKICAgICAgICAgICAgICAgIG5ld0l0ZW0uYXBwZW5kQ2hpbGQocmVtb3ZlQnV0dG9uKTsKICAgICAgICAgICAgICAgIG5ld0l0ZW0uYXBwZW5kQ2hpbGQoZWRpdERpc3BsYXlCdXR0b24pOwogICAgICAgICAgICAgICAgbmV3SXRlbS5hcHBlbmRDaGlsZChlZGl0SXRlbUJ1dHRvbik7CgogICAgICAgICAgICAgICAgaXRlbUxpc3QuYXBwZW5kQ2hpbGQobmV3SXRlbSk7CiAgICAgICAgICAgIH0KCiAgICAgICAgICAgIGZ1bmN0aW9uIHNhdmVJdGVtc1RvTG9jYWxTdG9yYWdlKCkgewogICAgICAgICAgICAgICAgY29uc3QgaXRlbXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pdGVtLWJ1dHRvbicpKS5tYXAoYnV0dG9uID0+IHsKICAgICAgICAgICAgICAgICAgICByZXR1cm4gewogICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBidXR0b24udGV4dENvbnRlbnQsCiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW06IGJ1dHRvbi50aXRsZSwKICAgICAgICAgICAgICAgICAgICB9OwogICAgICAgICAgICAgICAgfSk7CiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaXRlbXMnLCBKU09OLnN0cmluZ2lmeShpdGVtcykpOwogICAgICAgICAgICB9CgogICAgICAgICAgICBmdW5jdGlvbiBydW5TY3JpcHQoc2VsZWN0ZWRJdGVtVmFsdWUpIHsKICAgICAgICAgICAgICAgIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdmbGV4JzsKCQkgICAgCiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsKCQkJd2luZG93LnBhcmVudC5wb3N0TWVzc2FnZSgicnVuOiIgKyBzZWxlY3RlZEl0ZW1WYWx1ZSwgJyonKTsKICAgICAgICAgICAgICAgIH0sIDUwMCk7CiAgICAgICAgICAgIH0KCiAgICAgICAgICAgIGNvbnN0IHN0b3JlZEl0ZW1zID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2l0ZW1zJyk7CiAgICAgICAgICAgIGlmIChzdG9yZWRJdGVtcykgewogICAgICAgICAgICAgICAgY29uc3QgcGFyc2VkSXRlbXMgPSBKU09OLnBhcnNlKHN0b3JlZEl0ZW1zKTsKICAgICAgICAgICAgICAgIHBhcnNlZEl0ZW1zLmZvckVhY2goaXRlbSA9PiB7CiAgICAgICAgICAgICAgICAgICAgYWRkSXRlbVRvTGlzdChpdGVtLmRpc3BsYXksIGl0ZW0uaXRlbSk7CiAgICAgICAgICAgICAgICB9KTsKICAgICAgICAgICAgfQogICAgICAgIH0pOwogICAgPC9zY3JpcHQ+CjwvYm9keT4KPC9odG1sPg==")
                .then(response => response.text())
                .then(html => {
                    const uBlobeHtml = blobFrame.contentDocument || blobFrame.contentWindow.document;
                    uBlobeHtml.open();
                    uBlobeHtml.write(html);
                    uBlobeHtml.close();
                });

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
