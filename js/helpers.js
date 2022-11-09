'use strict';

const bodySelector = document.querySelector("body");

//Hamburguer menu

const hamburger  = document.querySelector(".icon")
const navigator = document.querySelector(".navigator");
const navHamb = document.querySelectorAll(".navigator")[1];
const nav = document.querySelector(".nav");
const w = window.innerWidth;

navHamb.style.display = "none";

const toggleNav = () => {
    if (w >= 900) {
        navHamb.style.display = "none";
        nav?.classList.remove("transparent__black");
        nav?.classList.add("transparent");
    }
}

const toggleHamb = () => {
    navHamb.style.display === "flex" ? navHamb.style.display = "none" : navHamb.style.display = "flex";
    if (nav.classList.contains("transparent")){
        nav.classList.add("transparent__black")
        nav.classList.remove("transparent")
    }else{
        nav.classList.remove("transparent__black")
        nav.classList.add("transparent")
    }
}


hamburger.addEventListener("click", toggleHamb);