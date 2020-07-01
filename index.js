// DOM ELEMENTS
const sliderTextDOM = document.getElementById("sliderText");
const sliderBtnDOM = document.querySelectorAll(".slider__btn");
// OLD
const mainContainer = document.getElementById('main-container');
const startContainer = document.getElementById('start-container');
const elementsContainer = document.getElementById('elements-container');

const happySpans = document.querySelectorAll('#start-header span');
const addElement = document.getElementById('add-element');

const enterButton = document.getElementById('enter-button');
const createElement = document.getElementById('create-element');

const createInput = document.querySelector('.create-element input');
const createButton = document.querySelector('.create-element button');

// Spans from first main page
const spanHighlights = document.querySelectorAll('.start-header span')

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

// SLIDER

// slider sentences container
const smartSentences = {
    one: { id: 1,
     name: "are you happy?"
     },
     two: {
         id: 2,
         name: "sometimes its just... "
     },
     three: {
         id: 3,
         name: "the matter of choice"
     },
     four: {
         id: 4,
         name: " so, now?"
     }
 }
// slider counter
let count = 0;
// slider function
function slider() {

     count++;
        for( key in smartSentences) {
            if(count === smartSentences[key].id) {
                sliderTextDOM.innerHTML = smartSentences[key].name;
            }
        }

        if(count === 4) {
            count = 0;
        }
        
};

// Function to show entire shop after click 
function showShop(){
    startContainer.style.display = "none"
    mainContainer.style.display = "flex";
    happinesEntrance();
}

// Loop throu first page spans to highlight them
function spanColorChanger() {
    Array.from(spanHighlights, span => {
       if(span.style.color !== 'red'){
        setInterval(()=>{
            span.style.color = 'red';
            // spanColorChanger();
        }, 1500)
       } else {
        setInterval(()=>{
            span.style.color = 'red';
        }, 1500)
        // spanColorChanger();
       }
    })
}
spanColorChanger();

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
sliderBtnDOM.forEach( btn => {
    console.log(btn)
    btn.addEventListener("click", slider)
})
// document loaded
window.addEventListener('DOMContentLoaded', ()=>{

    slider();
    

})