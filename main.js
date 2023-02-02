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
const finishedDot = document.querySelectorAll(".finished-js")
const dots = document.querySelectorAll(".dot")

function progress ( ){
    let length = statuses.length

    let fullWidth = 1200
    let firstWidth = fullWidth/length/2
    let secondWidth = firstWidth + fullWidth/length
    let thirdWidth = firstWidth + fullWidth/length*2
    let fourhWidth = firstWidth + fullWidth/length*3
    


               if (statuses[0].className.includes("active")){
                  progressLine.style.width = `${firstWidth}px`
                  dots[0].classList.add("in-progress")
               } else if (statuses[1].className.includes("active")){
                  progressLine.style.width = `${secondWidth}px`
                  dots[1].classList.add("in-progress")
               } else if (statuses[2].className.includes("active")) {
                  progressLine.style.width = `${thirdWidth}px`
                  dots[2].classList.add("in-progress")
               } else if (statuses[3].className.includes("active")) {
                  progressLine.style.width = `${fourhWidth}px`
                  dots[3].classList.add("in-progress")
               } else if (statuses[3].className.includes("finished")) {
                  progressLine.style.width = `${fullWidth}px`
               }
}

progress()