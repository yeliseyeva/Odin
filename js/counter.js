let values = document.querySelectorAll (".counters");
let interval = 1000;

values.forEach((value) => {
    let startValue = 0;
    let endValue = parseInt(value.getAttribute("data-target"))
    let duration = Math.floor(interval/endValue)
    let counter = setInterval(function () {
        startValue += 1;
        value.textContent=startValue;
        if (startValue == endValue) {
            clearInterval(counter)
        }
    }, duration)

})