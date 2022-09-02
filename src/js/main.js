let allBtn = document.querySelector('.flats__btns-btn_all')
let livedBtn = document.querySelector('.flats__btns-btn_lived')
let comersBtn = document.querySelector('.flats__btns-btn_comers')

let  flatsCards = document.querySelectorAll('.flats__card')
let  flatsCardsComers = document.querySelectorAll('.flats__card_comers')
let  flatsCardsLived = document.querySelectorAll('.flats__card_lived')


allBtn.onclick =function () {
    allBtn.classList.add('flats__btns-btn_active')
    livedBtn.classList.remove('flats__btns-btn_active')
    comersBtn.classList.remove('flats__btns-btn_active')

    flatsCards.forEach(function(card) {
        card.style.display = 'block'  
    })

}
livedBtn.onclick =function () {
    livedBtn.classList.add('flats__btns-btn_active')
    comersBtn.classList.remove('flats__btns-btn_active')

    flatsCardsComers.forEach(function (card){
        card.style.display = 'none'
    })
    flatsCardsLived.forEach(function (card){
        card.style.display = 'block'
    })
}
comersBtn.onclick =function () {
    comersBtn.classList.add('flats__btns-btn_active')
    livedBtn.classList.remove('flats__btns-btn_active')
    allBtn.classList.remove('flats__btns-btn_active')

    flatsCardsLived.forEach(function (card){
        card.style.display = 'none'
    })
    flatsCardsComers.forEach(function (card){
        card.style.display = 'block'
    })
}


var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".carousel__next",
        prevEl: ".carousel__prev",
    },
    loop: true
});