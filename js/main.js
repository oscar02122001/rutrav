const button = document.querySelector(".header__end-btn");
const catalog = document.querySelector(".catalog");


button.addEventListener("click", function () {
    button.classList.toggle("opened-catalog");
    catalog.classList.toggle("opened-catalog");

})

const burger = document.querySelector(".header__top-burger");
const manu = document.querySelector(".header__top-manu");

burger.addEventListener("click", function () {
    burger.classList.toggle("active");
    if (!manu.classList.contains("active")) {
        manu.classList.add("active");
    } else if (!manu.classList.contains("manu-closed")) {
        manu.classList.add("manu-closed");
    }
})

manu.addEventListener("animationend", function (evt) {
    // console.log(evt);
    if (evt.animationName === "manu-close") {
        manu.classList.remove("active");
        manu.classList.remove("manu-closed");
    }
})

const burgerr = document.querySelector(".header__end-burger");
const header__manu = document.querySelector(".header__catalog--end");
const body = document.querySelector("body");

burgerr.addEventListener("click", function () {
    header__manu.classList.add("active")
    body.classList.add("freez");
})



const ctbtn = document.querySelector(".header__end-ctbtn");
const ctitom = document.querySelector(".header__ctitom-wrap");


ctbtn.addEventListener("click", function () {
    ctbtn.classList.toggle("active");
    ctitom.classList.toggle("active");


})






const catalogbtn = document.querySelector(".header__catalog-burger");
const ctmanu = document.querySelector(".header__catalog--end");


catalogbtn.addEventListener("click", function () {
    body.classList.remove("freez");
    ctmanu.classList.add("catalog-closed");
})

ctmanu.addEventListener("animationend", function (evt) {
    // console.log(evt);
    if (evt.animationName === "closing-catalog") {
        ctmanu.classList.remove("active");
        ctmanu.classList.remove("catalog-closed");
    }
})

