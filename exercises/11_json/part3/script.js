//"https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"

const getCocktails = async() => {
    try {
        return (await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")).json();
    } catch(error) {
        console.log(error);
    }
}

const showMargs = async() => {
    const margs = await getCocktails();

    margs.drinks.forEach((marg)=>{
        const section = document.createElement("section");
        section.classList.add("marg");
        document.getElementById("cocktails").append(section);

        //create the heading
        const a = document.createElement("a");
        a.href= marg.strInstructions;
        section.append(a);
        const h3 = document.createElement("h3");
        h3.innerHTML = marg.strDrink;
        a.append(h3);

        //marg type
        const p = document.createElement("p");
        p.innerHTML = marg.strGlass;
        section.append(p);

        //marg image
        const img = document.createElement("img");
        img.src = marg.strDrinkThumb;
        section.append(img);

        //marg instructions
        const p2 = document.createElement("p");
        p2.innerHTML = marg.strInstructions;
        section.append(p2);
        
    });
}

showMargs();