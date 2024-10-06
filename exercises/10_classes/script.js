class Dog {
    constructor(title, breed, color, age, size, pic){
        this.title = title;
        this.breed = breed;
        this.color = color;
        this.age = age;
        this.size = size;
        this.pic = pic;
    }

    get item(){
        const section = document.createElement("section");
        section.classList.add("dog");

        //Create a header
        const h3 = document.createElement("h3");
        h3.innerHTML = this.title;
        section.append(h3);

        //Create my columns
        const columnsDiv = document.createElement("div");
        columnsDiv.classList.add("columns");
        section.append(columnsDiv);
        const firstColumn = document.createElement("div");
        columnsDiv.append(firstColumn);
        const secondColumn = document.createElement("div");
        columnsDiv.append(secondColumn);

        //Create the image and add to the first column
        firstColumn.append(this.picture(this.pic));

        //create info data and add to the second column
        secondColumn.append(this.paragraph("Breed", this.breed));
        secondColumn.append(this.paragraph("Color", this.color));
        secondColumn.append(this.paragraph("Age", this.age));
        secondColumn.append(this.paragraph("Size", this.size));


        //Create expand / contract arrow
        const expCon = document.createElement("a");
        expCon.href = "#";
        expCon.innerHTML = "&#x2964"
        h3.append(expCon);

        expCon.onclick = () =>{
            secondColumn.classList.toggle("hidden");
        }

        /*const h2 = document.createElement("h2");
        h2.textContent = `${this.title} =>`;
        section.append(h2);

        const img = document.createElement("img");
        img.src = `images/${this.pic}`;
        img.alt = this.title;

        section.append(img);

        const ul = document.createElement("ul");
        section.append(ul);

        const breed = document.createElement("li");
        breed.textContent = `Breed: ${this.breed}`;
        ul.append(breed);

        const color = document.createElement("li");
        color.textContent = `Color: ${this.color}`;
        ul.append(color);

        const age = document.createElement("li");

        age.textContent = `Age: ${this.age}`;
        ul.append(age);

        const size = document.createElement("li");
        size.textContent = `Size: ${this.size}`;
        ul.append(size);*/

        return section;
    }

    picture(info){
        const pic = document.createElement("img");
        pic.src = "images/" + info;
        return pic;
    }

    paragraph(title, info){
        const p = document.createElement("p");
        p.innerHTML = `<strong>${title}</strong>: ${info}`;
        return p;
    }
}

const dogs = [];
//const myDoc = new Dog("molly", "pit bull", "brown", 4, "xs", "images/molly.jpg");
dogs.push(new Dog("Coco", "Yorkie", "Black", 5, "small", "yorkie.jpg"));
dogs.push(new Dog("Sam", "Golden", "Yellow", 1, "med", "golden-retriever.jpg"));
dogs.push(new Dog("Gerald","Pit Bull", "White", 3, "lg", "pitt-bull.jpg"));

dogs.forEach((dog)=>{
    document.getElementById("dog-list").append(dog.item);
});