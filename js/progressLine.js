const lineConteiner = document.querySelector(".line-container")
const progressLine = document.querySelector(".progress-line-active")
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

   checkState()

   for (let i = 0; i < dots.length; i++) {
      if (!dots[i].className.includes("in-progress")) {
          dots[i].querySelector(".finished-js").classList.add("dot-finished")
       } else {
         break
      }
   }
}

function checkState() {
    
          if (dots[0].className.includes("in-progress")){
            progressLine.classList.add("length-1")
          } else if (dots[1].className.includes("in-progress")){
            progressLine.classList.add("length-2")
          } else if (dots[2].className.includes("in-progress")) {
            progressLine.classList.add("length-3")
          } else if (dots[3].className.includes("in-progress")) {
            progressLine.classList.add("length-4")
          }
}

checkState()