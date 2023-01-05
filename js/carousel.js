let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let imgs = document.querySelectorAll('.carousel-img');
let dots = document.querySelectorAll('.dot');
let captions = document.querySelectorAll('.carousel-caption')
let totalImgs = imgs.length;
let imgPosition = 0;

// Event Listeners
next.addEventListener('click', nextImg);
prev.addEventListener('click', prevImg);

imgs.forEach(img => {
    img.addEventListener('click', nextImg)
})

// Update Position
function updatePosition (){
//   Images
  for(let img of imgs){
    img.classList.remove('visible');
    img.classList.add('hidden');
  }
  imgs[imgPosition].classList.remove('hidden');
  imgs[imgPosition].classList.add('visible')

//   Captions
  for (let caption of captions) {
      caption.classList.remove('visible');
      caption.classList.add('hidden');
  }
    captions[imgPosition].classList.remove('hidden');
    captions[imgPosition].classList.add('visible')
}

// Next Img
function nextImg(){
  if (imgPosition === totalImgs -1){
        imgPosition = 0;
    } else{
        imgPosition++;
    }
    updatePosition();
}
//Previous Image
function prevImg(){
  if (imgPosition === 0){
        imgPosition = totalImgs-1;
    } else{
        imgPosition--;
    }
    updatePosition();
}