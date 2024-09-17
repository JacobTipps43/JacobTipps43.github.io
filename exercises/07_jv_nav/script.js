/*When the hamburger is clicked, toggle between showing and hiding the nav item*/

/*document.querySelector("#toggle-nav").onclick = () =>{}*/

const navButton = document.getElementById("nav-button");
const colorPicker = document.getElementById("txt-color");

navButton.onclick = () =>{
    document.getElementById("nav-items").classList.toggle("hidden-small");
}

/*Don't go to links destination when clicked*/
document.getElementById("click-link").onclick = (event) =>{
    event.preventDefault();//dont go to the link destination
    console.log("You clicked a link")
}

//Change the ball color
colorPicker.onchange = (e) =>{
    document.getElementById("ball").style.setProperty("background-color", e.target.value);
}

/*Move the ball down when the button is clicked*/
let pos = 0;
document.getElementById("move-down").onclick = () => {
    pos++;
    document.getElementById("ball").style.setProperty("Top", pos+"px");
}