document.querySelector("#toggle-nav").onclick = () => {
    document.getElementById("nav-items").classList.toggle("hidden-small");
};

const getLocations = async() => {
    try{
        const response = await fetch("https://jacobtipps43.github.io/projects/part6/EldenRing.json");
        const data = await response.json();
        console.log("Locations loaded");
        return data;
    }catch(error){
        console.log(error);
    }
}

const showLocations = async() => {
    const Locs = await getLocations();

    Locs.Locations[0].StrengthLocations.forEach((location) => {
        const section = document.createElement("section");
        section.classList.add("Loc");
        section.classList.add("one");
        document.getElementById("Strength-Locations").append(section);
    
        // Create the heading
        const p1 = document.createElement("p");
        p1.innerHTML = location.name;
        section.append(p1);
    
        // Location image
        const img = document.createElement("img");
        img.src = location.img;
        img.id = "locationimages";
        section.append(img);
    
        // Location description
        const p2 = document.createElement("p");
        p2.innerHTML = location.description;
        section.append(p2);
    });
}

showLocations();