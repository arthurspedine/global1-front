let menu = document.querySelector(".menu_mobile");
let body = document.body;

function showMenu() {
    menu.classList.toggle("menu_open");
}

document.body.addEventListener('click', (e) => {
    if (!menu.contains(e.target)) {
        if (menu.classList.contains("menu_open")) {
            showMenu();
        }
    }
});

document.querySelector("#menuBox").addEventListener("click", () => {
    showMenu()
})

// watson

window.watsonAssistantChatOptions = {
    integrationID: "85f06573-9891-474a-9baa-92de6c0ec78f", // The ID of this integration.
    region: "us-south", // The region your integration is hosted in.
    serviceInstanceID: "69585cf6-59a4-4ef7-896c-7d6d171cf223", // The ID of your service instance.
    onLoad: async (instance) => { await instance.render(); }
  };
  setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
  });
