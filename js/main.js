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

const header__city = document.querySelector(".header__top-city");
const header__select = document.querySelector(".header__select");


header__city.addEventListener("click", function () {
    header__select.classList.toggle("active");
    header__city.classList.toggle("active");
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

const callme = document.querySelector(".call-me");
const personalmodal = document.querySelector(".personal-modal");
const cross = document.querySelector(".personal-modal__cross");

if (callme) {
    callme.addEventListener("click", function () {
        personalmodal.classList.add("personal-modal--opened");
        body.classList.add("freez")
    })
}
if (personalmodal) {
    personalmodal.addEventListener("click", function (evt) {
        if (evt.target.matches(".personal-modal")) {
            personalmodal.classList.remove("personal-modal--opened")
            body.classList.remove("freez")
        }
    })
}

if (cross) {
    cross.addEventListener("click", function () {
        personalmodal.classList.remove("personal-modal--opened");
        body.classList.remove("freez")
    })
}



const callbtn = document.querySelector(".call__btn");

if (callbtn) {
    callbtn.addEventListener("click", function () {
        personalmodal.classList.add("personal-modal--opened");
        body.classList.add("freez")
    })
}
if (personalmodal) {
    personalmodal.addEventListener("click", function (evt) {
        if (evt.target.matches(".personal-modal")) {
            personalmodal.classList.remove("personal-modal--opened")
            body.classList.remove("freez")
        }
    })
}

if (cross) {
    cross.addEventListener("click", function () {
        personalmodal.classList.remove("personal-modal--opened");
        body.classList.remove("freez")
    })
}