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
