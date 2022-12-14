const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// an event handler to the `beforeinstallprompt` event. The content of this function will run before install
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();

    // stores the event that has been triggered
    window.deferredPrompt = event;

    //Remove the hidden class from the button
    butInstall.classList.toggle('hidden',false);
});

// click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {

    const promptEvent = window.deferredPrompt;

    if(!promptEvent) {
        return;
    }

    //shows the prompt
    promptEvent.prompt();

    // Reset the deferred prompt variable, only can be used once
    window.deferredPrompt = null;

    //Remove the hidden class from the button
    butInstall.classList.toggle('hidden',true);
});

// an handler for the `appinstalled` event, happens after install
window.addEventListener('appinstalled', (event) => {
    //Clear the prompt for install
    window.deferredPrompt = null;
});
