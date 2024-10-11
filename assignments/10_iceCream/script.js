const getIceCream = async () => {
    try{
        return (await fetch("https://portiaportia.github.io/json/ice-creams.json")).json();
    } catch (error){
        console.log(error);
    }
}

const showIceCream = async () => {
    const creams = await getIceCream();

    creams.forEach((creams)=>{
        const section = document.createElement("section");
        section.classList.add("creams");
        document.getElementById("iceCreamChoices").appendChild(section);

        const img = document.createElement("img");
        img.src = `images/${creams.image}`;
        section.append(img);

        const overlay = document.createElement("div");
        overlay.classList.add("overlay");
        overlay.innerHTML = creams.name;
        section.append(overlay);
    });
}

showIceCream();