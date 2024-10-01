const buttonsArray = [];
const messageDisplay = document.getElementById('messageDisplay');
const titleDisplay = document.getElementById('titleDisplay')

const messages = [
    "Happy Birthday!!",
    "I'm just clowing around",
    "It's really rainy today",
    "What book are you reading?",
    "Doing yard work today?",
    "What are you watching?"
];

const titles = [
    "Birthday",
    "Clown",
    "Rain",
    "Book",
    "Worker",
    "Laptop"
]

function createButtons(numButtons) {
    const container = document.getElementById('buttonContainer');  
    if (container) {
        for (let i = 0; i < numButtons; i++) {
            const button = document.createElement('button');
            const img = document.createElement('img');
            img.src = `images/image${i+1}.jpg`;

            button.appendChild(img);

            button.onclick = () => {
                titleDisplay.innerHTML = titles[i];
                messageDisplay.innerHTML = messages[i];
            }

            container.appendChild(button);

            buttonsArray.push(button);
        }
    }
}

createButtons(6);
