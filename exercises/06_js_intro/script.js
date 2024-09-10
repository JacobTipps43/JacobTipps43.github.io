const dostuff = () =>{
    alert("Hello World");
};

const myButton = document.getElementById("btn-click");
const sayGoodbye = document.getElementById("say_goodbye");
const hide = document.getElementById("hide");
//myButton.onclick = dostuff;

myButton.onclick = () =>{
    document.getElementById("message").innerHTML = "Hello Everyone!";
    document.getElementById("stuff").classList.add("special");
};

sayGoodbye.onclick = () =>{
    document.getElementById("message").innerHTML = "GOODBYE EVERYONE!!!";
    document.getElementById("stuff").classList.remove("special");
}

hide.onclick = () =>{
    document.getElementById("column_1").classList.add("hide");
}

//Add a second button, called say goodbye
//When clicked change the text to goodbye everyone, and remove the special styles
//if you finish that make a button that hides a column
//if you get that add a button that will animate 'stuff' when clicked
//then you can have a button that will stop the animation