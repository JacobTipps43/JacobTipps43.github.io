document.querySelector("#toggle-nav").onclick = () => {
    document.getElementById("nav-items").classList.toggle("hidden-small");
};

const getTalismans = async() => {
    try{
        const response = await fetch("https://jacobtipps43.github.io/projects/part6/EldenRing.json");
        const data = await response.json();
        console.log("Talismans loaded");
        return data;
    }catch(error){
        console.log(error);
    }
}

const showTalismans = async() => {
    const Talis = await getTalismans();

    Talis.Talismans[0].StrengthTalismans.forEach((talisman) =>{
        const section = document.createElement("section");
        section.classList.add("Talis");
        section.classList.add("one");
        document.getElementById("Talismans-strength").append(section);

        //create the heading
        const p1 = document.createElement("p");
        p1.innerHTML = talisman.name;
        section.append(p1);

        //Talisman image
        const img = document.createElement("img");
        img.src = talisman.img;
        img.id = "talismanimages"
        section.append(img);

        //Talisman description
        const p2 = document.createElement("p");
        p2.innerHTML = talisman.description
        section.append(p2);
    });

    Talis.Talismans[0].DexterityTalismans.forEach((talisman) =>{
        const section = document.createElement("section");
        section.classList.add("Talis");
        section.classList.add("one");
        document.getElementById("Talismans-dexterity").append(section);

        //create the heading
        const p1 = document.createElement("p");
        p1.innerHTML = talisman.name;
        section.append(p1);

        //Talisman image
        const img = document.createElement("img");
        img.src = talisman.img;
        img.id = "talismanimages"
        section.append(img);

        //Talisman description
        const p2 = document.createElement("p");
        p2.innerHTML = talisman.description
        section.append(p2);
    });

    Talis.Talismans[0].MageTalismans.forEach((talisman) =>{
        const section = document.createElement("section");
        section.classList.add("Talis");
        section.classList.add("one");
        document.getElementById("Talismans-mage").append(section);

        //create the heading
        const p1 = document.createElement("p");
        p1.innerHTML = talisman.name;
        section.append(p1);

        //Talisman image
        const img = document.createElement("img");
        img.src = talisman.img;
        img.id = "talismanimages"
        section.append(img);

        //Talisman description
        const p2 = document.createElement("p");
        p2.innerHTML = talisman.description
        section.append(p2);
    });

    Talis.Talismans[0].ArcaneTalismans.forEach((talisman) =>{
        const section = document.createElement("section");
        section.classList.add("Talis");
        section.classList.add("one");
        document.getElementById("Talismans-arcane").append(section);

        //create the heading
        const p1 = document.createElement("p");
        p1.innerHTML = talisman.name;
        section.append(p1);

        //Talisman image
        const img = document.createElement("img");
        img.src = talisman.img;
        img.id = "talismanimages"
        section.append(img);

        //Talisman description
        const p2 = document.createElement("p");
        p2.innerHTML = talisman.description
        section.append(p2);
    });

    Talis.Talismans[0].FaithTalismans.forEach((talisman) =>{
        const section = document.createElement("section");
        section.classList.add("Talis");
        section.classList.add("one");
        document.getElementById("Talismans-faith").append(section);

        //create the heading
        const p1 = document.createElement("p");
        p1.innerHTML = talisman.name;
        section.append(p1);

        //Talisman image
        const img = document.createElement("img");
        img.src = talisman.img;
        img.id = "talismanimages"
        section.append(img);

        //Talisman description
        const p2 = document.createElement("p");
        p2.innerHTML = talisman.description
        section.append(p2);
    });
}
showTalismans();
