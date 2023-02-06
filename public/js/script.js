const grayImage = document.querySelector('.img-box')
const grayImage1 = document.querySelector('.img-box1')
const grayImage2 = document.querySelector('.img-box2')
const grayImage3 = document.querySelector('.img-box3')
const grayImage4 = document.querySelector('.img-box4')
const grayImage5 = document.querySelector('.img-box5')
const grayImage6 = document.querySelector('.img-box6')
const grayImage7 = document.querySelector('.img-box7')

function colorgray(x) {
  grayImage.style.filter= "grayscale(0)";
  grayImage.style.transition= "0.5s";
  setTimeout(() => {
    grayImage.style.filter= "grayscale(1)";
    }, 700);
}
function colorgray1(x) {
  grayImage1.style.filter= "grayscale(0)";
  grayImage1.style.transition= "0.5s";
  setTimeout(() => {
    grayImage1.style.filter= "grayscale(1)";
    }, 700);
}
function colorgray2(x) {
  grayImage2.style.filter= "grayscale(0)";
  grayImage2.style.transition= "0.5s";
  setTimeout(() => {
    grayImage2.style.filter= "grayscale(1)";
    }, 700);
}
function colorgray3(x) {
  grayImage3.style.filter= "grayscale(0)";
  grayImage3.style.transition= "0.5s";
  setTimeout(() => {
    grayImage3.style.filter= "grayscale(1)";
    }, 700);
}
function colorgray4(x) {
  grayImage4.style.filter= "grayscale(0)";
  grayImage4.style.transition= "0.5s";
  setTimeout(() => {
    grayImage4.style.filter= "grayscale(1)";
    }, 700);
}
function colorgray5(x) {
  grayImage5.style.filter= "grayscale(0)";
  grayImage5.style.transition= "0.5s";
  setTimeout(() => {
    grayImage5.style.filter= "grayscale(1)";
    }, 700);
}
function colorgray6(x) {
  grayImage6.style.filter= "grayscale(0)";
  grayImage6.style.transition= "0.5s";
  setTimeout(() => {
    grayImage6.style.filter= "grayscale(1)";
    }, 700);
}
function colorgray7(x) {
  grayImage7.style.filter= "grayscale(0)";
  grayImage7.style.transition= "0.5s";
  setTimeout(() => {
    grayImage7.style.filter= "grayscale(1)";
    }, 700);
}

let PHOTOGRAPHY = document.querySelector(".PHOTOGRAPHY")

let nb =0
for (let i = 0; i < PHOTOGRAPHY.length; i++) {
  nb++;
  i++;
  
}
PHOTOGRAPHY.addEventListener("click", function(event){
        event.preventDefault()
        let images = document.querySelectorAll("#content div")
        for (const image of images) {
            if(!image.classList.contains("PHOTOGRAPHY")){
               image.style.display="none"
            }
             else{
                image.style.display="block"
            }
        }
})
let NATURE = document.querySelector(".NATURE")

NATURE.addEventListener("click", function(event){
        event.preventDefault()
        let images = document.querySelectorAll("#content div")
        for (const image of images) {
            if(!image.classList.contains("NATURE")){
               image.style.display="none"
            }
             else{
                image.style.display="block"
            }
        }
})
let FOOD = document.querySelector(".FOOD")
let box = document.querySelector(".box-content")
FOOD.addEventListener("click", function(event){
    event.preventDefault()
    let images = document.querySelectorAll("#content div")
    for (const image of images) {
        if(!image.classList.contains("FOOD")){
           image.style.display="none"
        }
        else{
            image.style.display="block"
        }
    }
})
let LIVESTYLE = document.querySelector(".LIVESTYLE")

  LIVESTYLE.addEventListener("click", function(event){
        event.preventDefault()
        let images = document.querySelectorAll("#content div")
        for (const image of images) {
            if(!image.classList.contains("LIVESTYLE")){
               image.style.display="none"
            }
             else{
                image.style.display="block"
            }
        }
})
let ALL = document.querySelector(".ALL")
ALL.addEventListener("click", function(event){
    event.preventDefault()
    let images = document.querySelectorAll("#content div")
    for (const image of images) {
        image.style.display="block"
    }
})