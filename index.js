// DOM ELEMENTS
const sliderTextDOM = document.getElementById("sliderText");
const sliderBtnDOM = document.querySelectorAll(".slider__btn");
// lightbox
const lightboxDOM = document.getElementById("lightbox");
const popupDOM = document.getElementById("popup");

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

//  LIGHTBOX
const photos = [
    "https://c.pxhere.com/photos/c7/00/halloween_ghosts_happy_halloween_ghost_autumn_october_mood_cute-791236.jpg!d",
    "https://c.pxhere.com/photos/32/0d/hands_love_couple_together_fingers_people_family_human-1094128.jpg!d",
    "https://c.pxhere.com/photos/30/1f/girl_sunlight_field_running_happy-99184.jpg!d",
    "https://c.pxhere.com/photos/ef/bc/tic_tac_toe_love_heart_play_ankreuzen_strategy_game_two_people_two_people_strategy_game-372665.jpg!d",
    "https://c.pxhere.com/photos/db/40/yellow_wall_building_architecture_girl_woman_people_silhouette-698682.jpg!d",
    "https://c.pxhere.com/photos/3e/41/family_pier_man_woman_children_happy_holiday_silhouette-764588.jpg!d"
];

function closeLightbox() {

    let btnLightbox = document.querySelector(".lightbox__button");
    btnLightbox.addEventListener("click", () => {
        popupDOM.style.display = "none";
    });
}

function generatePopup(photo) {
    // box
    let box = document.createElement("div");
    box.classList.add("lightbox__popup-box");
    // box elements
    let screen = document.createElement("div");
    let queue = document.createElement("div");
    // button close
    let button = document.createElement("button");
    button.classList.add("lightbox__button");
    let span = document.createElement("span");
    span.classList.add("lightbox__button-span");
    // box elements class
    screen.classList.add("lightbox__popup-screen");
    queue.classList.add("lightbox__popup-queue");
    // screen innerHTML
    screen.innerHTML = `<img class="lightbox__img lightbox__img-popup lightbox__img-cursor" src="${photo}"></img>`;
    //queue innerHTML
    photos.forEach( img => {
        if(img !== photo) {
        queue.innerHTML += `<div class="lightbox__popup-queue--el">
            <img class="lightbox__img lightbox__img-popup" src="${img}"></img>
        </div>`;
        }
    }) 
    
    button.appendChild(span);

    box.appendChild(screen);
    box.appendChild(queue);
    box.appendChild(button);

    popupDOM.appendChild(box);
    closeLightbox();
    grabImages();
}

function grabImages() {

    
    let images = document.querySelectorAll(".lightbox__img");
    images.forEach( img => {
        let photo = img.src;
        img.addEventListener("click", () => {
            popupDOM.style.display = "block";
            popupDOM.innerHTML = "";
            generatePopup(photo);
        })
    })
}

function createImgs() {
    
    let box = document.createElement("div");
    box.classList.add("lightbox__box");

    photos.forEach( photo => {
        box.innerHTML += 
        `<img class="lightbox__img" src="${photo}"></img>`;
    })
    lightboxDOM.appendChild(box);
    grabImages();
}

//Events
sliderBtnDOM.forEach( btn => {
    btn.addEventListener("click", slider)
})
// document loaded
window.addEventListener('DOMContentLoaded', ()=>{

    slider();
    createImgs();

})