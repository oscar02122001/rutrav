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



const ctbtn = document.querySelectorAll(".header__end-ctbtn");
const ctitom = document.querySelectorAll(".header__ctitom-wrap");


for (let i = 0; i < ctbtn.length && ctitom.length; i++) {
    ctbtn[i].addEventListener('click', function () {
        ctbtn[i].classList.toggle("active")
        ctitom[i].classList.toggle("active")
    })
}






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

const leavebtn = document.querySelector(".header__top-leave");
const leave = document.querySelector(".leave");
const leavewrap = document.querySelector(".leave__wrap");
const leavecross = document.querySelector(".leave__cross");

leavebtn.addEventListener("click", function () {
    leave.classList.add("leave-opened");
    leavewrap.classList.add("leave__wrap--opened")
    body.classList.add("freez")
})

leave.addEventListener("click", function (evt) {
    if (evt.target.matches(".leave")) {
        leave.classList.remove("leave-opened");
        body.classList.remove("freez")
    }
})

leavecross.addEventListener("click", function () {
    leave.classList.remove("leave-opened");
    body.classList.remove("freez")
})

const signbtn = document.querySelector(".header__top-sign");
const signin = document.querySelector(".sign-in");
const signinwrap = document.querySelector(".sign-in__wrap");
const signcross = document.querySelector(".sign-in__cross");

signbtn.addEventListener("click", function () {
    signin.classList.add("sign-in__opened");
    signinwrap.classList.add("sign-in__wrap--opened");
    body.classList.add("freez")
})

signin.addEventListener("click", function (evt) {
    if (evt.target.matches(".sign-in")) {
        signin.classList.remove("sign-in__opened")
        body.classList.remove("freez");
    }
})

signcross.addEventListener("click", function () {
    signin.classList.remove("sign-in__opened");
    body.classList.remove("freez")
})

const goodsSelector = document.querySelector(".goods__selector")
const goodsSelectorList = document.querySelector(".goods__selector-list")
const goodsDawn = document.querySelector(".goods__dawn")


goodsSelector.addEventListener("click", function () {
    goodsSelectorList.classList.toggle('active')
    goodsDawn.classList.toggle('active')

})

const statusSubmit = document.querySelector(".status__submit")
const statusInput = document.querySelectorAll(".status__input")
const statusWarn = document.querySelectorAll(".status__warn")
const statusEmail = document.querySelector(".status__input--email")
const statusEmailWorn = document.querySelector(".status__worn--email")
const statusTel = document.querySelector(".status__tel")

// let statusTel = Number

for (let i = 0; i < statusInput.length && statusWarn.length; i++) {
    statusSubmit.addEventListener("click", function () {

        if (statusInput[i].value === "") {
            statusWarn[i].textContent = "Поле обязательно для заполнения"
            return false
        } else {
            statusWarn[i].textContent = ""
            return true
        }
    })


}