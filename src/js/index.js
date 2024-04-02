import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'
import '../scss/style.scss'
import '../../node_modules/swiper/swiper.scss'

const slider = document.querySelector('.swiper')

let swiper

function handleScreenSizeChange(media) {
  if (media.matches) {
    swiper && swiper.destroy()
    slider.style.display = 'none'
  } else {
    swiper = new Swiper(slider, {
      modules: [Navigation, Pagination],
      slidesPerView: 1,
      spaceBetween: 16,
      pagination: {
        el: '.brands__swiper-pagination',
        type: 'bullets',
        clickable: true
      }
    })
    slider.style.display = 'block'
  }
}

if (!window.matchMedia('(min-width: 550px)').matches) {
  handleScreenSizeChange({ matches: false })
}

window.addEventListener('resize', () => {
  const mediaQuery = window.matchMedia('(min-width: 550px)')
  handleScreenSizeChange(mediaQuery)
})

const sliderTwo = document.querySelector('.technic__swiper')

let swiperTwo

function handleScreenSizeChangeTwo(media) {
  if (media.matches) {
    swiperTwo && swiperTwo.destroy()
    sliderTwo.style.display = 'none'
  } else {
    swiperTwo = new Swiper(sliderTwo, {
      modules: [Navigation, Pagination],
      slidesPerView: 1,
      spaceBetween: 16,
      pagination: {
        el: '.technic__swiper-pagination',
        type: 'bullets',
        clickable: true
      }
    })
    sliderTwo.style.display = 'block'
  }
}

if (!window.matchMedia('(min-width: 550px)').matches) {
  handleScreenSizeChangeTwo({ matches: false })
}

window.addEventListener('resize', () => {
  const mediaQuery = window.matchMedia('(min-width: 550px)')
  handleScreenSizeChangeTwo(mediaQuery)
})

const sliderThree = document.querySelector('.services__swiper')

let swiperThree

function handleScreenSizeChangeThree(media) {
  if (media.matches) {
    swiperThree && swiperThree.destroy()
    sliderThree.style.display = 'none'
  } else {
    swiperThree = new Swiper(sliderThree, {
      modules: [Navigation, Pagination],
      slidesPerView: 1,
      spaceBetween: 36,
      pagination: {
        el: '.services__swiper-pagination',
        type: 'bullets',
        clickable: true
      }
    })
    sliderThree.style.display = 'block'
  }
}

if (!window.matchMedia('(min-width: 768px)').matches) {
  handleScreenSizeChangeThree({ matches: false })
}

window.addEventListener('resize', () => {
  const mediaQuery = window.matchMedia('(min-width: 768px)')
  handleScreenSizeChangeThree(mediaQuery)
})

let contentButton = document.querySelector('.main__content-button')
let currenText = document.querySelector('.main__content-block5')
let currenTextTwo = document.querySelector('.main__content-block4')
let currenTextSpan = document.querySelector('.main__content-none')
const mediaQuery = window.matchMedia('(max-width: 767px)')
const mediaQueryTwo = window.matchMedia('(max-width: 1335px)')

const oppenBtn = (
  element,
  className,
  button,
  btnClass,
  modification,
  classNameTwo,
  elementTwo,
  classNameSpan,
  elementSpan
) => {
  const classes = element.classList
  const isClass = Array.from(classes).includes(className)
  if (isClass) {
    element.classList.remove(className)
    button.textContent = 'Скрыть'
    button.classList.remove(btnClass)
    button.classList.add(modification)
    if (mediaQuery.matches) {
      elementTwo.classList.remove(classNameTwo)
    }
    if (mediaQueryTwo.matches) {
      elementSpan.classList.remove(classNameSpan)
    }
  } else {
    element.classList.add(className)
    button.textContent = 'Читать далее'
    button.classList.remove(modification)
    button.classList.add(btnClass)
    if (mediaQuery.matches) {
      elementTwo.classList.add(classNameTwo)
    }
    if (mediaQueryTwo.matches) {
      elementSpan.classList.add(classNameSpan)
    }
  }
}

contentButton.addEventListener('click', () => {
  oppenBtn(
    currenText,
    'none',
    contentButton,
    'main__content-button',
    'main__content-button--active',
    'noneTwo',
    currenTextTwo,
    'main__content-none',
    currenTextSpan
  )
})

let button = document.querySelector('.brands__show-button')
let cards = document.querySelectorAll('.brands__wrapper')
let currentCard = cards[1]

const onToggle = (element, className, button, btnClass, modification) => {
  const classes = element.classList
  const isClass = Array.from(classes).includes(className)
  if (isClass) {
    element.classList.remove(className)
    button.textContent = 'Скрыть'
    button.classList.remove(btnClass)
    button.classList.add(modification)
  } else {
    element.classList.add(className)
    button.textContent = 'Показать все'
    button.classList.remove(modification)
    button.classList.add(btnClass)
  }
}

button.addEventListener('click', () => {
  onToggle(
    currentCard,
    'none',
    button,
    'brands__show-button',
    'brands__show-button--active'
  )
})

let buttonTwo = document.querySelector('.technic__show-button')
let cardsTwo = document.querySelectorAll('.technic__wrapper')
let currentCardTwo = cardsTwo[1]
let burger = document.querySelector('.header__burger-btn')
let containerMenu = document.querySelector('.menu__container')
let burgerClose = document.querySelector('.menu__header-burger')
let shadow = document.querySelector('.body__shadow')
let body = document.querySelector('body')

buttonTwo.addEventListener('click', () => {
  onToggle(
    currentCardTwo,
    'none',
    buttonTwo,
    'technic__show-button',
    'technic__show-button--active'
  )
})

burger.addEventListener('click', () => {
  body.classList.add('overflow-hidden')
  shadow.classList.remove('hidden')
  containerMenu.classList.remove('hidden')
  containerMenu.classList.add('flex')
})

burgerClose.addEventListener('click', () => {
  body.classList.remove('overflow-hidden')
  shadow.classList.add('hidden')
  containerMenu.classList.add('hidden')
  containerMenu.classList.remove('flex')
})

shadow.addEventListener('click', () => {
  body.classList.remove('overflow-hidden')
  shadow.classList.add('hidden')
  containerMenu.classList.add('hidden')
  containerMenu.classList.remove('flex')
})

let callButton = document.querySelector('.menu__footer-tel')
let callButtonTwo = document.querySelector('.header__call-btn')
let callClose = document.querySelector('.call__burger-btn')
let containerCall = document.querySelector('.call__container')

callButton.addEventListener('click', () => {
  body.classList.add('overflow-hidden')
  shadow.classList.remove('hidden')
  if (window.matchMedia('(min-width: 1366px)').matches) {
    shadow.classList.add('shadow-higher')
  }
  containerCall.classList.add('block')
  containerCall.classList.remove('hidden')
  containerMenu.classList.add('hidden')
  containerMenu.classList.remove('flex')
})

callButtonTwo.addEventListener('click', () => {
  body.classList.add('overflow-hidden')
  shadow.classList.remove('hidden')
  containerCall.classList.remove('hidden')
  containerCall.classList.add('block')
})

callClose.addEventListener('click', () => {
  body.classList.remove('overflow-hidden')
  shadow.classList.add('hidden')
  containerCall.classList.add('hidden')
  containerCall.classList.remove('block')
})

shadow.addEventListener('click', () => {
  body.classList.remove('overflow-hidden')
  shadow.classList.add('hidden')
  containerCall.classList.add('hidden')
  containerCall.classList.remove('block')
})

let feedbackButton = document.querySelector('.menu__footer-chat')
let feedbackButtonTwo = document.querySelector('.header__chat-btn')
let feedbackClose = document.querySelector('.feedback__burger-btn')
let containerFeedback = document.querySelector('.feedback__container')

feedbackButton.addEventListener('click', () => {
  body.classList.add('overflow-hidden')
  shadow.classList.remove('hidden')
  if (window.matchMedia('(min-width: 1366px)').matches) {
    shadow.classList.add('shadow-higher')
  }
  containerFeedback.classList.add('block')
  containerFeedback.classList.remove('hidden')
  containerMenu.classList.add('hidden')
  containerMenu.classList.remove('flex')
})

feedbackButtonTwo.addEventListener('click', () => {
  body.classList.add('overflow-hidden')
  shadow.classList.remove('hidden')
  containerFeedback.classList.remove('hidden')
  containerFeedback.classList.add('block')
})

feedbackClose.addEventListener('click', () => {
  body.classList.remove('overflow-hidden')
  shadow.classList.add('hidden')
  containerFeedback.classList.add('hidden')
  containerFeedback.classList.remove('block')
})

shadow.addEventListener('click', () => {
  body.classList.remove('overflow-hidden')
  shadow.classList.add('hidden')
  containerFeedback.classList.add('hidden')
  containerFeedback.classList.remove('block')
})
