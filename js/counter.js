const refs = {
    saleCounter: document.querySelector(".js-sale-counter"),
    devCounter: document.querySelector(".js-dev-counter")
}

let saleCount = 0
let devCount = 0

function saleCounter () {
        saleCount++
    refs.saleCounter.textContent = saleCount;
}

function devCounter () {
    devCount++
refs.devCounter.textContent = devCount;
}

setInterval(function() {
    if(saleCount < 22) {
        saleCounter()
    }
}, 50)

setInterval(function() {
    if(devCount < 84) {
        devCounter()
    }
}, 50)


// let saleCount = 0
// let devCount = 0

// function counter () {
//     if(saleCount < 22) {
//         saleCount++
//     }

//     if(devCount < 84) {
//         devCount++
//     }
//     refs.saleCounter.textContent = saleCount;
//     refs.devCounter.textContent = devCount;
// }

// setInterval(function() {
//     counter()
// }, 50)