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
let filters = document.querySelector(".filters")
const articles = document.querySelectorAll(".card");

filters.addEventListener("click",(e)=>{
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
let mobile =(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
var header = document.querySelector(".nav");
var burger = document.querySelector(".burger")

var sticky = header.offsetTop;
function myFunction1() {
  if (window.pageYOffset > sticky && document.body.scrollTop > 450 && !mobile ) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }

  if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 70) {
    myBtn.style.opacity = "1";
  } else {
    myBtn.style.opacity = "0";
  }
  if (mobile && window.pageYOffset > sticky) {
    burger.style.position = "fixed";
    const newOptions = document.querySelector('.burger ul');
    newOptions.style.textAlign = "start";
    newOptions.style.marginLeft = "70px";
    const newburger = document.querySelector('.burger label');
    /* newburger.style.color= "#404040"; */
    newburger.style.color= "#126c84";
    const cond =document.querySelector('#menu-toggle:checked')
    const condition= "if(cond)";
    if ( condition ) {

      function mobileOp() {
        let vid = document.querySelector('.video1 video');
        let allimg = document.querySelectorAll('.img-box');
        allimg.forEach(element => {
          element.style.position = "relative";
          element.style.zIndex = "-9999";
          vid.style.zIndex= "-9999";
          setTimeout(() => {

            }, 1200);
        });
      }
      mobileOp();
    }
  }
  else{
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
/* function mobile2() {
    var navigatur = document.querySelector("#menu-toggle:checked + .nav");
    if (mobile&& navigatur.style.display == "block" ) {
      function mobileOp2() {
        let p1_header = document.querySelector('.p1-header');
        let p2_header = document.querySelector('.p2-header');
        let btn_header = document.querySelector('.btn-header');
        p1_header.style.zIndex= "-9999";
        p2_header.style.zIndex= "-9999";
        btn_header.style.zIndex= "-9999";
        p1_header.style.opacity = "0.5";
        p2_header.style.opacity = "0.5";
        btn_header.style.opacity = "0.5";
        setTimeout(() => {
          p1_header.style.zIndex= "1";
          p2_header.style.zIndex= "1";
          btn_header.style.zIndex= "1";
          p1_header.style.opacity = "1";
          p2_header.style.opacity = "1";
          btn_header.style.opacity = "1";
          }, 2700);
          let vid = document.querySelector('.video1 video');
          vid.style.opacity = "0.5";
          vid.style.zIndex= "-9999";
          setTimeout(() => {
            vid.style.zIndex= "1";
            vid.style.opacity = "1";       
            }, 2700);
      }
    }
  } */
 /*  document.querySelector(".burger").addEventListener("click", function() {
    document.querySelector(".p1-header").style.opacity = 0.5;
    document.querySelector(".p2-header").style.opacity = 0.5;
    document.querySelector(".btn-header").style.opacity = 0.5;
    document.querySelector(".p1-header").style.zIndex = -9999;
    document.querySelector(".p2-header").style.zIndex = -9999;
    document.querySelector(".btn-header").style.zIndex = -9999;
  }); */

  var isHidden = true;

  document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".p1-header").style.opacity = 1;
    document.querySelector(".p2-header").style.opacity = 1;
    document.querySelector(".btn-header").style.opacity = 1;
    document.querySelector(".p1-header").style.zIndex = 0;
    document.querySelector(".p2-header").style.zIndex = 0;
    document.querySelector(".btn-header").style.zIndex = 0;
    setTimeout(function() {
      document.querySelector(".p1-header").style.opacity = 1;
    document.querySelector(".p2-header").style.opacity = 1;
    document.querySelector(".btn-header").style.opacity = 1;
    document.querySelector(".p1-header").style.zIndex = 0;
    document.querySelector(".p2-header").style.zIndex = 0;
    document.querySelector(".btn-header").style.zIndex = 0;
      isHidden = true;
    }, 200);
  });
  
  document.querySelector(".burger").addEventListener("click", function() {
    if (isHidden) {
      document.querySelector(".p1-header").style.opacity = 0.5;
        document.querySelector(".p2-header").style.opacity = 0.5;
        document.querySelector(".btn-header").style.opacity = 0.5;
        document.querySelector(".p1-header").style.zIndex = -9999;
        document.querySelector(".p2-header").style.zIndex = -9999;
        document.querySelector(".btn-header").style.zIndex = -9999;
      
      isHidden = false;
      setTimeout(function() {
        document.querySelector(".p1-header").style.opacity = 1;
      document.querySelector(".p2-header").style.opacity = 1;
      document.querySelector(".btn-header").style.opacity = 1;
      document.querySelector(".p1-header").style.zIndex = 0;
      document.querySelector(".p2-header").style.zIndex = 0;
      document.querySelector(".btn-header").style.zIndex = 0;
        isHidden = true;
      }, 3200);
    }
  });