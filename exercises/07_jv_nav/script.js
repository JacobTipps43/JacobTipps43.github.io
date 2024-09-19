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
    document.getElementById("ball").style.setProperty("Top", pos*3+"px");
}

/*Show color message*/
document.getElementById("btn-show-color").onclick = () =>{
    const color = document.getElementById("txt-enter-color").value.toLowerCase().trim();
    const messageP = document.getElementById("color-message");
    let mood = "";

    if(color == "red"){
        mood = "angry";
    }
    else if (color=="blue"){
        mood = "sadge";
    }
    else{
        mood = "undefined";
    }

    messageP.innerHTML = `You chose ${color} so you are ${mood}`
}

/*Donations*/
/*Get the number
- If it is not a number or it is negative, show and error in the error
otherwise First show the percent out of 10000 towards goal
Next show a visual representation with a box and a gradient*/
document.getElementById("btn-donate").onclick = () =>{
    const goal = 10000;
    const donation = document.getElementById("txt-donations").value;
    const error = document.getElementById("error-donation");
    
    if(isNaN(donation)||donation <= 0){
        error.innerHTML = "* Invalid";
        return;
    }

    const percentGoal = (donation / goal) *100;
    console.log(percentGoal + "%");
    document.querySelector(":root").style.setProperty("--funds", percentGoal+"%")

}
