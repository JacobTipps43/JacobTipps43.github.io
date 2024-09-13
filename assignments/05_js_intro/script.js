let count = 0;
let slide = 30;

const counterDisplay = document.getElementById("counter");
const buttonCounter = document.getElementById("btn-counter");
const buttonImage = document.getElementById("btn-img");

const slider = document.getElementById('myRange');
const output = document.getElementById('sliderValue');
const image = document.getElementById('myImage');

buttonCounter.onclick = () =>{
    count++;
    counterDisplay.textContent = count;
};

buttonImage.onclick = () =>{
    location.reload()
};

slider.oninput = function() {
    image.style.paddingLeft = this.value + 'px';
};