let count = 0;

const counterDisplay = document.getElementById("counter");
const buttonCounter = document.getElementById("btn-counter");
const buttonImage = document.getElementById("btn-img");

buttonCounter.onclick = () =>{
    count++;
    counterDisplay.textContent = count;
};

buttonImage.onclick = () =>{
    location.reload()
};