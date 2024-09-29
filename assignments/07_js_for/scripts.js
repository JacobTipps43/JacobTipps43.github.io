const numberInput = document.getElementById("txt-number");
const btn = document.getElementById("btn-star");

btn.onclick = () =>{
    const numberValue = parseInt(numberInput.value);
    console.log(numberValue);

    if(numberValue <= 0){
        document.getElementById("error").classList.toggle("hidden");
    }
    else{
        document.getElementById("error").classList.add("hidden");

        for(let i = 0; i < numberValue; i++)
        {
            
        }
    }
}