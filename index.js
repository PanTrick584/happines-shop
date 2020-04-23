
const mainContainer = document.getElementById('main-container');
const startContainer = document.getElementById('start-container');
const elementsContainer = document.getElementById('elements-container');

const happySpans = document.querySelectorAll('#start-header span');
const addElement = document.getElementById('add-element');

const enterButton = document.getElementById('enter-button');
const createElement = document.getElementById('create-element');

const createInput = document.querySelector('.create-element input');
const createButton = document.querySelector('.create-element button');

// Create DOM elements
const happyButtonsContainer = document.createElement('div');
happyButtonsContainer.setAttribute('class', 'happyButtonsContainer')
elementsContainer.appendChild(happyButtonsContainer);



var happines = [
    {name: 'sweets', id: 1},
    {name: 'party', id: 2},
    {name: 'music', id: 3},
    {name: 'people', id: 4},
    {name: 'challenge', id: 5}
]

var happinesElements = [
    {
        id: 'sweets',
        sweets: [
            {name: 'chocolate', price: 8},
            {name: 'candy', price: 2},
            {name: 'cookie', price: 3},
            {name: 'Icecream', price: 2}
        ]
    },
    {
        id: 'party',
        party: [
            {name: 'Disco', price: 60},
            {name: 'Festival', price: 120},
            {name: 'Home Dancce', price: 7},
            {name: 'Cameral Concert', price: 15},
            {name: 'Singing under shower', price: 2.3},
            {name: 'Acoustic plener concert', price: 8}
        ]
    },
    {
        id: 'music',
        music: [
            {name: 'Rock', price: 12},
            {name: 'Metal', price: 12},
            {name: 'Blues', price: 12},
            {name: 'Jazz', price: 12},
            {name: 'Folk', price: 12},
            {name: 'Pop', price: 12},
            {name: 'Regge', price: 12},
            {name: 'Ska', price: 12},
            {name: 'Acoustic Covers of Everything', price: 12},
            {name: 'Dom Metal', price: 12}
        ]
    },
    {
        id: 'people',
        people: [
            {name: 'Girlfriend', price: 'infinity'},
            {name: 'Boyfriend', price: 'some sex'},
            {name: 'Friend', price: 'some time'},
            {name: 'Domina', price: 1200},
            {name: 'Annoying Neighbour', price: 'free'}
        ]
    }
]

//Functions

// Function to show entire shop after click 
function showShop(){
    startContainer.style.display = "none"
    mainContainer.style.display = "flex";
    happinesEntrance();
}

// Loop for creare elements form 'happy' array
function happinesEntrance(){

    happines.forEach( el => { 
        let buttonHappines = document.createElement('button')
        buttonHappines.innerText = el.name;
        buttonHappines.id = el.name;
        buttonHappines.setAttribute('class', 'happy-element')
        happyButtonsContainer.appendChild(buttonHappines)
    })
    openSection();

}


function createShopStuff(button) {

    let shopStuff = document.createElement('div');
    let shopStuffH = document.createElement('h1');
    shopStuffH.innerText = button.id;

    console.log(button.id)
    happinesElements.forEach(el => {
        // console.log(el)
        if(button.id === el.id){
            el[el.id].forEach(el => {
                console.log(el)
                let shopStuffEl = document.createElement('div');
                shopStuffEl.innerHTML += el.name;
                shopStuff.appendChild(shopStuffEl);
            })
        }
    })

    elementsContainer.appendChild(shopStuffH);
    elementsContainer.appendChild(shopStuff);
}


function openSection() {
    let buttonHappinesAll = document.querySelectorAll('.happy-element');
    console.log(buttonHappinesAll)
    buttonHappinesAll.forEach(button => {
        button.addEventListener('click', e => {
           console.log( e.target.id)
            happyButtonsContainer.style.display = 'none';
            createShopStuff(button);
        })
    })

}

//Events

// Enter to shop
enterButton.addEventListener('click', showShop)
