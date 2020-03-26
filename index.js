var domElement = {};

domElement.mainContainer = document.getElementById('main-container');
domElement.startContainer = document.getElementById('start-container');
const happySpans = document.querySelectorAll('#start-header span');
const container = document.getElementById('elements-container')
const addElement = document.getElementById('add-element')

const enterButton = document.getElementById('enter-button')



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
    console.log(happines)
    happines.forEach( el => {
        let button = document.createElement('button')
        button.innerText = el.name;
        button.id = el.id;
        button.setAttribute('class', 'happy-element')
        container.insertBefore(button, addElement)
        console.log(button)

    })

}

function addHappines(){
    let happyDiv = document.createElement('div')
    let inputName = document.createElement('input')
    let buttonSubmit = document.createElement('button')


    buttonSubmit.classList.add('header-button')
    inputName.classList.add('add-element-input')
    inputName.setAttribute('placeholder', "happines?")

    happyDiv.setAttribute('class', "happyDiv")
    happyDiv.appendChild(inputName);
    happyDiv.appendChild(buttonSubmit);



    addElement.classList.add('add-element')
    addElement.appendChild(happyDiv)
    addElement.removeEventListener('click', addHappines);

    buttonSubmit.addEventListener('click', updateHappines)
}

function updateHappines(){
    if(dupa){

    }
};

//Events
enterButton.addEventListener('click', showShop)
addElement.addEventListener('click', addHappines)

// // For some fun later
// happySpans.forEach(span => {
//     Array.from(span.innerHTML, letter => {
//         console.log(letter)
//     })

// })
