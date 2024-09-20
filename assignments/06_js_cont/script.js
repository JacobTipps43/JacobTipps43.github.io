const navButton = document.getElementById("nav-button");
const mainNav = document.getElementById("main-nav");
const buttons = document.getElementById("buttons")

navButton.onclick = () => {
    document.getElementById("main-nav").classList.toggle("hidden-small");

    if (mainNav.classList.contains("hidden-small")) {
        navButton.innerHTML = "<p>&darr;</p>";  // Arrow down
    } 
    else {
        navButton.innerHTML = "<p>&uarr;</p>";  // Arrow up
    }
};

buttons.onclick = () =>{
    
}

