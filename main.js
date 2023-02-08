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

const lineConteiner = document.querySelector(".line-container")
const statuses = document.querySelectorAll(".status")
const actives = document.querySelectorAll (".progress-active");
const progressLine = document.querySelector(".progress-line-active")
const finishedDot = document.querySelectorAll(".finished-js")
const dots = document.querySelectorAll(".dot")

lineConteiner.addEventListener("click", progress)

function progress (evt) {
      if (!evt.target.classList.contains("dot")) {
         return
      }

      const currentProgressEl = document.querySelector(".dot.in-progress")

      if (currentProgressEl) {
         currentProgressEl.classList.remove("in-progress")
      }

      evt.target.classList.add("in-progress")

      test()
}

function test() {
   let length = statuses.length

         let fullWidth = 1200
         let firstWidth = fullWidth/length/2
         let secondWidth = firstWidth + fullWidth/length
         let thirdWidth = firstWidth + fullWidth/length*2
         let fourhWidth = firstWidth + fullWidth/length*3
    
          if (dots[0].className.includes("in-progress")){
             progressLine.style.width = `${firstWidth}px`
          } else if (dots[1].className.includes("in-progress")){
             progressLine.style.width = `${secondWidth}px`
          } else if (dots[2].className.includes("in-progress")) {
             progressLine.style.width = `${thirdWidth}px`
          } else if (dots[3].className.includes("in-progress")) {
             progressLine.style.width = `${fourhWidth}px`
          } else if (dots[3].className.includes("finished")) {
             progressLine.style.width = `${fullWidth}px`
          }

      for (let i = 0; i < dots.length; i++) {
         if (!dots[i].className.includes("in-progress")) {
             dots[i].querySelector(".finished-js").classList.add("dot-finished")
          } else {
            break
         }
      }
}

test()