const getShoes = async() => {
    const url = "https://portiaportia.github.io/json/shoes.json";

    try{
        const response = await fetch(url);
        return response.json();

    }catch(error){
        console.error(error);
    }
};

const showShoes = async() => {
    const shoes = await getShoes();
    
    shoes.forEach((shoe) => {
        document.getElementById("shoes-section").append(getShoeSection(shoe));
    });


};

const getShoeSection = (shoe) => {
    const section = document.createElement("section");
    const title = document.createElement("h3");
    const brand = document.createElement("p");
    const ul = document.createElement("ul");

    title.textContent = shoe.name;
    brand.textContent = shoe.brand;

    section.appendChild(title);
    section.appendChild(brand);
    section.append(ul);

    shoe.reviews.forEach((review) => {
        const li = document.createElement("li");
        li.innerHTML = review;
        ul.appendChild(li);
    });
    return section;
};

//show all of the shoes when the page loads
showShoes();
