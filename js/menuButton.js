const refs = {
    menuButton: document.querySelector(".js-menu-button"),
    menu: document.querySelector(".js-nav-list")
}

function test(){
 refs.menuButton.addEventListener("click", () => {
    refs.menuButton.classList.toggle("is-open")
    refs.menu.classList.toggle("is-hidden")
 })
 
}

test()