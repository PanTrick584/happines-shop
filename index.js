var domElement = {};

domElement.mainContainer = document.getElementById('main-container');
domElement.startContainer = document.getElementById('start-container');
domElement.happySpans = document.querySelectorAll('#start-header span');
domElement.elementsContainer = document.getElementById('elements-container')
domElement.addElement = document.getElementById('add-element')

domElement.enterButton = document.getElementById('enter-button')
domElement.createElement = document.getElementById('create-element')

domElement.createInput = document.querySelector('.create-element input')
domElement.createButton = document.querySelector('.create-element button')



var happines = [
    {name: 'sweets', id: 1},
    {name: 'party', id: 2},
    {name: 'music', id: 3},
    {name: 'people', id: 4},
    {name: 'challenge', id: 5}
]
//Functions
function showShop(){
    domElement.startContainer.style.display = "none"
    domElement.mainContainer.style.display = "flex";
    happinesEntrance();
}

function createHappines(el){

    domElement.buttonHappines = document.createElement('button')
    domElement.buttonHappines.innerText = el.name;
    domElement.buttonHappines.id = el.id;
    domElement.buttonHappines.setAttribute('class', 'happy-element')
    domElement.elementsContainer.insertBefore(domElement.buttonHappines, domElement.addElement)
}

function happinesEntrance(){

    happines.forEach( el => { createHappines(el)})

}

// function addHappines(){
    
//     domElement.createElement.style.display = "flex";
//     domElement.createButton.addEventListener('click', pushHappines)
    
    
// }
// function pushHappines(){

//     const newElement = {
//         name: domElement.createInput.value,
//         id: happines.length +1
//     }

//     happines.push(newElement)
//     domElement.createElement.style.display = "none";
    
//     createHappines(newElement)
// }



//Events
domElement.enterButton.addEventListener('click', showShop)
domElement.addElement.addEventListener('click', addHappines)

// // For some fun later
// happySpans.forEach(span => {
//     Array.from(span.innerHTML, letter => {
//         console.log(letter)
//     })

// })
console.log(domElement)
