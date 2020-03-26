var domElement = {};

domElement.mainContainer = document.getElementById('main-container');
domElement.startContainer = document.getElementById('start-container');
domElement.happySpans = document.querySelectorAll('#start-header span');
domElement.elementsContainer = document.getElementById('elements-container')
domElement.addElement = document.getElementById('add-element')

domElement.enterButton = document.getElementById('enter-button')



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

function happinesEntrance(){

    happines.forEach( el => {
        domElement.buttonHappines = document.createElement('button')
        domElement.buttonHappines.innerText = el.name;
        domElement.buttonHappines.id = el.id;
        domElement.buttonHappines.setAttribute('class', 'happy-element')
        domElement.elementsContainer.insertBefore(domElement.buttonHappines, domElement.addElement)
    })

}

function addHappines(){
    domElement.happyDiv = document.createElement('div')
    domElement.inputName = document.createElement('input')
    domElement.buttonSubmit = document.createElement('button')


    domElement.buttonSubmit.classList.add('header-button')
    domElement.inputName.classList.add('add-element-input')
    domElement.inputName.setAttribute('placeholder', "happines?")

    domElement.happyDiv.setAttribute('class', "happyDiv")
    domElement.happyDiv.appendChild(domElement.inputName);
    domElement.happyDiv.appendChild(domElement.buttonSubmit);



    domElement.addElement.classList.add('add-element')
    domElement.addElement.appendChild(domElement.happyDiv)
    domElement.addElement.removeEventListener('click', addHappines);

    domElement.buttonSubmit.addEventListener('click', updateHappines)
}

function updateHappines(){
    if(dupa){

    }
};

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
