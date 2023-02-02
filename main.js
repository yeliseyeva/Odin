import "./js/menuButton";
import "./js/switchButton";
// import "./js/carousel";
import "./js/swiper"
import "./js/counter"




// import { setupCounter } from './counter.js'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
      
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))


const statuses = document.querySelectorAll(".status")
const actives = document.querySelectorAll (".progress-active");
const progressLine = document.querySelector(".progress-line-active")

function progress ( ){
    let length = statuses.length

    let width = 1200/length/2
    console.log(width)
    if (statuses[0].className.includes("active")){
        progressLine.style.width = `${width}px`
                //  progressLine.classList.add("length-1")
             } else if (statuses[1].className.includes("active")){
                // progressLine.classList.add("length-2")
             } else if (statuses[2].className.includes("active")) {
                // progressLine.classList.add("length-3")
                progressLine.style.width="200px"
             } 
}

progress()

// const progressLineActive = document.querySelector(".progress-line-active")

// function length () {
//     if (dots.dot1.className.includes("finished")){
//         progressLineActive.className = "w-1"
//     }
// }
