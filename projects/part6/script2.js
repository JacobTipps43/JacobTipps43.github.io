document.querySelector("#toggle-nav").onclick = () => {
    document.getElementById("nav-items").classList.toggle("hidden-small");
};

const getWeapons = async() => {
    try{
        return (await fetch("EldenRing.json")).json();
        console.log("Weapons loaded");
    }catch(error){
        console.log(error);
    }
}

const showWeapons = async() => {
    const Weps = await getWeapons();

    Weps.Weapons.StrengthWeapons.forEach((Weapon)=>{
        const section = document.createElement("section");
        section.classList.add("Weps");
        document.getElementById("Weapons").append(section);

        //create the heading
        const p1 = document.createElement("p");
        p1.innerHTML = Weps.name;
        section.append(p1);

        //Weapon image
        const img = document.createElement("img");
        img.src = Weps.image;
        section.append(img);

        //Weapon description
        const p2 = document.createElement("p");
        p2.innerHTML = Weps.description;
        section.append(p2);
    });
}

showWeapons();