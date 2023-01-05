const buttons = document.querySelectorAll(".button-item-js")

function switcher () {

buttons.forEach((button) =>
    button.addEventListener("click", () => {
        buttons.forEach( el => {
            el.classList.remove("switch-border");
            button.classList.add("switch-border")
        })
    })

)
}

switcher()