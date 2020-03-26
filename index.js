const happinesElements = document.getElementById('container');
const startContainer = document.getElementById('start-container');
const happySpans = document.querySelectorAll('#start-header span')

const enterButton = document.getElementById('enter-button')


//Functions
function showShop(){
    startContainer.style.display = "none"
    happinesElements.style.display = "flex";
}
//Events
enterButton.addEventListener('click', showShop)

happySpans.forEach(span => {
    Array.from(span.innerHTML, letter => {
        console.log(letter)
    })
    
})
