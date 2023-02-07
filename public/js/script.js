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
/*
ce code a changer par tout les filter en semble catagories en mettent 1 seul fonction -> img mika 

let photography = document.querySelector(".photography")
let article = document.querySelector(".article-info")

photography.addEventListener("click", function(event){
        event.preventDefault()
        let images = document.querySelectorAll("#content .card div")
        for (const image of images) {
            if(!image.classList.contains("photography")){
               image.style.display="none"
            }
             else{
                image.style.display="flex"
            }
        }
})


let nature = document.querySelector(".nature")

nature.addEventListener("click", function(event){
        event.preventDefault()
        let images = document.querySelectorAll("#content .card div")
        for (const image of images) {
            if(!image.classList.contains("nature")){
               image.style.display="none"
            }
             else{
                image.style.display="flex"
            }
        }
})


let food = document.querySelector(".food")
let box = document.querySelector(".box-content")
food.addEventListener("click", function(event){
    event.preventDefault()
    let images = document.querySelectorAll("#content .card div")
    for (const image of images) {
        if(!image.classList.contains("food")){
           image.style.display="none"
        }
        else{
            image.style.display="flex"
        }
    }
})


let livestyle = document.querySelector(".livestyle")

livestyle.addEventListener("click", function(event){
        event.preventDefault()
        let images = document.querySelectorAll("#content .card div")
        for (const image of images) {
            if(!image.classList.contains("livestyle")){
               image.style.display="none"
            }
             else{
                image.style.display="flex"
            }
        }
})


let ALL = document.querySelector(".ALL")
ALL.addEventListener("click", function(event){
    event.preventDefault()
    let images = document.querySelectorAll("#content .card div")
    for (const image of images) {
        image.style.display="flex"
    }
})
*/

let filters = document.querySelector(".filters")
const articles = document.querySelectorAll(".card");

filters.addEventListener("click",(e)=>{
  /* console.log(filters)
  console.log(articles)
  console.log(e.target.classList) */
  e.preventDefault();
  if(e.target.classList.contains("filter-button")){
    filters.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    const filterValue = e.target.getAttribute("date-filter");
    articles.forEach((item)=>{
      if(item.classList.contains(filterValue) || filterValue == 'all'){
        item.classList.remove("hide");
        item.classList.add("show");
      }
      else{
        item.classList.remove("show");
        item.classList.add("hide");
        console.log(filterValue)
       /*  console.log(item.classList.contains(filterValue)) */
      }
    })
  }
})
window.onscroll = function() {myFunction1()};

var header = document.querySelector(".nav-container");
var sticky = header.offsetTop;
function myFunction1() {
  if (window.pageYOffset > sticky && document.body.scrollTop > 450) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }

  if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 70) {
    myBtn.style.opacity = "1";
  } else {
    myBtn.style.opacity = "0";
  }
};
function goup(x){

  const myBtn = document.getElementById("myBtn");
  myBtn.addEventListener("click", function () {
    //window.scrollTo(0, 0);
    window.scrollTo(
      {
        top: 0,
        left: 0,
        behavior: "smooth"
      }
    );
  });
  }