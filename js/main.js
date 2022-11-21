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

if (goodsSelector)
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

const waightBtn = document.querySelector('.cards__wght-spn')
const cardsList = document.querySelector('.cards__list')
// const bodyW = document.querySelector('body')
const overly = document.querySelector('.overly')
const cardsItom = document.querySelectorAll('.cards__itom')
const cardsSpn = document.querySelector('.cards__wght-spn')
const cardsWght = document.querySelector('.cards__wght')

const openWght = function () {
    cardsList.classList.remove('hidden')
    overly.classList.remove('hidden')
    cardsWght.classList.add('active')


}

const closeWght = function () {
    cardsList.classList.add('hidden')
    overly.classList.add('hidden')
    cardsWght.classList.remove('active')
}
if (waightBtn)
    waightBtn.addEventListener('click', openWght)

if (overly)
    overly.addEventListener('click', closeWght)

document.addEventListener('keydown', function (evt) {
    if (evt.key === 'Escape' && !waightBtn.classList.contains('hidden')) {
        closeWght()
    }
})

cardsItom.forEach(function (num, i) {
    num.addEventListener('click', function () {
        cardsSpn.textContent = ' '
        cardsSpn.textContent = num.textContent
        closeWght()
    })
})

//// SECTION APPEAR DOWN TO UP

const sectionAll = document.querySelectorAll('.section')
const container = document.querySelectorAll('.container')
const sectionLink = document.querySelectorAll('.sections__link')
const goodsItomLink = document.querySelectorAll('.goods__itom-link')

const sectionShow = function (entries, observer) {
    const [entry] = entries
    if (entry.isIntersecting) {
        entry.target.classList.remove('section-hidden')
        observer.unobserve(entry.target)
    };

}

const sectionObs = new IntersectionObserver(sectionShow, {
    root: null,
    threshold: 0.1,
})

sectionAll.forEach(section => {
    sectionObs.observe(section)
    section.classList.add('section-hidden')
})

///// HOME CUSTOMER
// const sliderMain = function () {

const slides = document.querySelectorAll('.customer__slider')
const slider = document.querySelector('.slider')
const btnNext = document.querySelectorAll('.top-slider__next')
const btnPrev = document.querySelectorAll('.top-slider__prev')

let curSlide = 0
const maxSizeSlides = slides.length

const goToSlide = function (slide) {
    slides.forEach((s, i) => s.style.transform = `translateX(${100 * (i - slide)}%)`)
}

goToSlide(0)

const nextSlide = function () {
    if (curSlide === maxSizeSlides - 1) {
        curSlide = 0
    } else {
        curSlide++
    }
    goToSlide(curSlide)
}

const prevSlide = function () {
    if (curSlide === 0) {
        curSlide = maxSizeSlides - 1
    } else {
        curSlide--
    }
    goToSlide(curSlide)
}
btnNext.forEach(btn => btn.addEventListener('click', nextSlide))
btnPrev.forEach(btn => btn.addEventListener('click', prevSlide))
// }
// sliderMain()

////////////HOME GOODS

const slidesGoods = document.querySelectorAll('.goods__itom--home')
const sliderGoods = document.querySelector('.goods__list--home')
const containerDots = document.querySelector('.goods__bottom-slider')


if (sliderGoods);
let curSlideGoods = 0
const slideMaxGoods = slidesGoods.length

const createDots = function () {
    slidesGoods.forEach((_, i) => {
        containerDots.insertAdjacentHTML('beforeend', `<div class="bottom-slider__circle" data-slide = ${i}></div>`)
    })
}
createDots()

containerDots.addEventListener('click', function (e) {
    if (e.target.classList.contains('bottom-slider__circle')) {
        const slide = e.target.dataset.slide;
        goToNextGoods(slide)
        activeDot(slide)
    }
})

const activeDot = function (slide) {
    document.querySelectorAll('.bottom-slider__circle').forEach(dot => dot.classList.remove('active'))
    document.querySelector(`.bottom-slider__circle[data-slide='${slide}']`).classList.add('active')
}

const goToNextGoods = function (slide) {
    slidesGoods.forEach((s, i) => s.style.transform = `translateX(${100 * (i-slide)}%)`)
    activeDot(slide)
}
// slidesGoods.forEach((s, i) => {
//     s.style.transform = `translateX(${100 * i}%)`
// })
goToNextGoods(0)

const nextSlideGoods = function () {
    if (curSlideGoods === slideMaxGoods - 1) {
        curSlideGoods = 0
    } else {
        curSlideGoods++
    }
    goToNextGoods(curSlideGoods)
}

const prevSlideGoods = function () {
    if (curSlideGoods === 0) {
        curSlideGoods = slideMaxGoods - 1
    } else {
        curSlideGoods--
    }
    goToNextGoods(curSlideGoods)
}

btnNext.forEach(btn => btn.addEventListener('click', nextSlideGoods))
btnPrev.forEach(btn => btn.addEventListener('click', prevSlideGoods))