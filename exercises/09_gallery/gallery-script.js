//every one second go through and move the class of highlighted through the gallery.
const highlight = () =>{
    const currentHighlight = document.querySelector(".items section.highlighted");

    //highlight the first item
    if(currentHighlight == null){
        document.querySelector(".items section").classList.add("highlighted");
        return;
    }

    let nextHighlight = currentHighlight.nextElementSibling;

    //when we hit the end
    if(nextHighlight == null){
        nextHighlight = document.querySelector(".items section");
    }

    currentHighlight.classList.remove("highlighted");
    nextHighlight.classList.add("highlighted");
}

setInterval(highlight, 1500);