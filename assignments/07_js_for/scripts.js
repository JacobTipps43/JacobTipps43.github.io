const numberInput = document.getElementById("txt-number");
const btn = document.getElementById("btn-star");
const field = document.getElementById("starfield")

btn.onclick = () =>{
    const numberValue = parseInt(numberInput.value);
    console.log(numberValue);
    field.innerHTML = '';

    if(numberValue <= 0){
        document.getElementById("error").classList.remove("hidden");
    }
    else{
        document.getElementById("error").classList.add("hidden");

        for(let i = 0; i < numberValue; i++)
        {
            const star = document.createElement("div");
            star.classList.add("star");

            const x = Math.random()*495;
            const y = Math.random()*495;

            star.style.left = `${x}px`;
            star.style.top = `${y}px`;
            
            field.appendChild(star);
        }
    }
}