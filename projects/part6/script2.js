document.querySelector("#toggle-nav").onclick = () => {
    document.getElementById("nav-items").classList.toggle("hidden-small");
};

const getWeapons = async() => {
    try{
        const response = await fetch("https://jacobtipps43.github.io/projects/part6/EldenRing.json");
        const data = await response.json();
        console.log("Weapons loaded");
        return data;
    }catch(error){
        console.log(error);
    }
}

const showWeapons = async() => {
    const Weps = await getWeapons();

    Weps.Weapons.StrengthWeapons.forEach((Weapon)=>{
        const section = document.createElement("section");
        section.classList.add("Weps");
        document.getElementById("Weapons-strength").append(section);

        //create the heading
        const p1 = document.createElement("p");
        p1.innerHTML = Weapon.name;
        section.append(p1);

        //Weapon image
        const img = document.createElement("img");
        img.src = Weapon.image;
        section.append(img);

        //Weapon description
        const p2 = document.createElement("p");
        p2.innerHTML = Weapon.description;
        section.append(p2);
    });
}

showWeapons();