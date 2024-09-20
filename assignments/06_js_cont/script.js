const navButton = document.getElementById("nav-button");
const mainNav = document.getElementById("main-nav");
const buttons = document.querySelectorAll(".buttons");

navButton.onclick = () => {
    document.getElementById("main-nav").classList.toggle("hidden-small");

    if (mainNav.classList.contains("hidden-small")) {
        navButton.innerHTML = "<p>&darr;</p>";
    } 
    else {
        navButton.innerHTML = "<p>&uarr;</p>";
    }
};

const handleButtonClick = (event) =>{
    const button_event = event.target.dataset.action;
    const messageP = document.getElementById("images");
    console.log(`Button clicked: ${button_event}`);

    if(button_event == "action1"){
        messageP.innerHTML = `<img id="pics" src="https://picsum.photos/75?random=1"></img>`;
        console.log("Small");
    }
    else if(button_event == "action2"){
        messageP.innerHTML = `<img id="pics" src="https://picsum.photos/125?random=1"></img>`;
        console.log("Medium");
    }
    else if(button_event == "action3"){
        messageP.innerHTML = `<img id="pics" src="https://picsum.photos/200?random=1"></img>`;
        console.log("Large");
    }
}

buttons.forEach((button) => {
    button.onclick = handleButtonClick;
});
