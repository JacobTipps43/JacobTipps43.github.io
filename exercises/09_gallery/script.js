/*
Change which image curently has the class hidden applied to it.
querySelector
*/
const slide = () =>{
    const currentImage = document.querySelector("#slideshow :not(.hidden)");
    currentImage.classList.add("hidden");

    let nextImage = currentImage.nextElementSibling;
   
    //reached the end of list
    if(nextImage == null){
        nextImage = document.querySelector("#slideshow :first-child");
    }

    nextImage.classList.remove("hidden");
};

setInterval(slide, 1500);