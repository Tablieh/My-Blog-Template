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

  let data_article = 
  {
    1:{
	    "img": "blog1",
      "Title": "China Trip",
      "cat": "photography",
      "article-info": [
        {
        "ul-user": "WALID",
        "ul-calendar": "February 6st, 2023",
        "ul-heart": "123",
        }
      ],
	    "loream": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa natus mollitia qui suscipit iusto. Deserunt maiores modi architecto fugit error quae illum soluta natus quod temporibus alias, labore eum neque?"
	  },

 	  2:{
	    "img": "blog2",
      "Title": "Asian Food",
      "cat": "food",
      "article-info": [
        {
          "ul-user": "WALID",
          "ul-calendar": "February 6st, 2023",
          "ul-heart": "123",
        }
      ],
	    "loream": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa natus mollitia qui suscipit iusto. Deserunt maiores modi architecto fugit error quae illum soluta natus quod temporibus alias, labore eum neque?"
	  },

	  3:{
	    "img": "blog3",
      "Title": "Discover San Fransisco",
      "cat": "nature",
      "article-info": [
        {
          "ul-user": "WALID",
          "ul-calendar": "February 6st, 2023",
          "ul-heart": "123",
        }
      ],
	    "loream": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa natus mollitia qui suscipit iusto. Deserunt maiores modi architecto fugit error quae illum soluta natus quod temporibus alias, labore eum neque?"
	  },

	  4:{
	    "img": "blog4",
      "Title": "Sports !",
      "cat": "livestyle",
      "article-info": [
        {
          "ul-user": "WALID",
          "ul-calendar": "February 6st, 2023",
          "ul-heart": "123",
        }
      ],
	    "loream": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa natus mollitia qui suscipit iusto. Deserunt maiores modi architecto fugit error quae illum soluta natus quod temporibus alias, labore eum neque?"
	  },

	5:{
	"img": "blog5",
      "Title": "Girle in white",
      "cat": "nature",
      "article-info": [
        {
          "ul-user": "WALID",
          "ul-calendar": "February 6st, 2023",
          "ul-heart": "123",
        }
      ],
	"loream": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa natus mollitia qui suscipit iusto. Deserunt maiores modi architecto fugit error quae illum soluta natus quod temporibus alias, labore eum neque?"
	},
	
	6:{
	"img": "blog6",
      "Title": "Suchi",
      "cat": "food",
      "article-info": [
        {
          "ul-user": "WALID",
          "ul-calendar": "February 6st, 2023",
          "ul-heart": "123",
        }
      ],
	"loream": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa natus mollitia qui suscipit iusto. Deserunt maiores modi architecto fugit error quae illum soluta natus quod temporibus alias, labore eum neque?"
	},

	7:{
	"img": "blog7",
      "Title": "Gta see",
      "cat": "photography",
      "article-info": [
        {
          "ul-user": "WALID",
          "ul-calendar": "February 6st, 2023",
          "ul-heart": "123",
        }
      ],
	"loream": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa natus mollitia qui suscipit iusto. Deserunt maiores modi architecto fugit error quae illum soluta natus quod temporibus alias, labore eum neque?"
	},

	8:{
	"img": "blog8",
      "Title": "wood",
      "cat": "nature",
      "article-info": [
        {
          "ul-user": "WALID",
          "ul-calendar": "February 6st, 2023",
          "ul-heart": "123",
        }
      ],
	"loream": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa natus mollitia qui suscipit iusto. Deserunt maiores modi architecto fugit error quae illum soluta natus quod temporibus alias, labore eum neque?"
	},
  
}

let content = document.getElementById('content');

for (let i = 1; i <= Object.keys(data_article).length; i++) {
  let data = data_article[i];
  let card = document.createElement('div');
  card.className = 'card' +' '+ data.cat;

  let cardHeader = document.createElement('div');
  cardHeader.className = 'card-header';
  cardHeader.innerHTML = `
  <img class="img-box" id="img-box-${i}" src="/public/image/${data.img}.jpg" alt="gallery${i}" onmouseover="gray(${i})">
  <p class="p-card ${data.cat}">${data.cat}</p>
  <p class="info-text">${data.Title}</p>
`;

  let articleInfo = document.createElement('div');
  articleInfo.className = 'article-info';
  articleInfo.innerHTML = `
    <ul class="ul-user"><i class="fa-regular fa-user"></i>BY ${data["article-info"][0]["ul-user"]}</ul>
    <ul class="ul-calendar"><i class="fa-regular fa-calendar"></i>${data["article-info"][0]["ul-calendar"]}</ul>
    <ul class="ul-heart"><i class="fa-regular fa-heart"></i>${data["article-info"][0]["ul-heart"]}</ul>
  `;

  cardHeader.appendChild(articleInfo);
  card.appendChild(cardHeader);

  let cardText = document.createElement('div');
  cardText.className = 'card-text' +' '+ data.cat;
  cardText.innerHTML = `
    <p class="loream-text">${data.loream}</p>
    <a class="read-more" href="#"> Read More <i class="fa-solid fa-arrow-right"></i></a>
  `;

  card.appendChild(cardText);
  content.appendChild(card);
}
/*----------------------------------------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------------------------------------*/
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
/*----------------------------------------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------------------------------------*/
const cards = document.querySelectorAll('.img-box');

function gray(index) {
  const card = document.getElementById(`img-box-${index}`);
  card.style.filter = "grayscale(0)";
  card.style.transition = "0.5s";
  setTimeout(() => {
    card.style.filter = "grayscale(1)";
  }, 700);
}