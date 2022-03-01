const filter = () => {
    let select = document.querySelector('select')
    let cardSams = document.querySelectorAll('.samokat')
    let cardSegs = document.querySelectorAll('.segway')
    let cardGyrs = document.querySelectorAll('.gyro')
    let productCards = document.querySelectorAll('.card__product')
    let productCardsTypes = document.querySelectorAll('.card__type')
    for (let productCardsType of productCardsTypes) {
        if (productCardsType.textContent === 'гироскутер') {
            productCards[0].classList.add('gyro')
            productCards[1].classList.add('gyro')
            productCards[2].classList.add('gyro')
        } else if (productCardsType.textContent === 'электросамокат') {
            productCards[3].classList.add('samokat')
            productCards[4].classList.add('samokat')
            productCards[5].classList.add('samokat')
        } else if (productCardsType.textContent === 'сегвей') {
            productCards[6].classList.add('segway')
            productCards[7].classList.add('segway')
            productCards[8].classList.add('segway')
        }
    }
    select.addEventListener('change', () => {
      if (select.value === 'filter1') {
        for (let cardSam of cardSams) {
            cardSam.style.visibility = "visible";
            cardSam.classList.remove('d-none')
        }
        for (let cardSeg of cardSegs) {
            cardSeg.style.visibility = "visible";
            cardSeg.classList.remove('d-none')
        }
        for (let cardGyr of cardGyrs) {
            cardGyr.style.visibility = "visible";
            cardGyr.classList.remove('d-none')
        }
      } else if (select.value === 'filter2') {
        for (let cardSam of cardSams) {
            cardSam.style.visibility = "hidden";
            cardSam.classList.add('d-none')
        }
        for (let cardSeg of cardSegs) {
            cardSeg.style.visibility = "hidden";
            cardSeg.classList.add('d-none')
        }
        for (let cardGyr of cardGyrs) {
            cardGyr.style.visibility = "visible";
            cardGyr.classList.remove('d-none')
        }
      } else if (select.value === 'filter3') {
        for (let cardSam of cardSams) {
            cardSam.style.visibility = "visible";
            cardSam.classList.remove('d-none')
        }
        for (let cardSeg of cardSegs) {
            cardSeg.style.visibility = "hidden";
            cardSeg.classList.add('d-none')
        }
        for (let cardGyr of cardGyrs) {
            cardGyr.style.visibility = "hidden";
            cardGyr.classList.add('d-none')
        }
      } else if (select.value === 'filter4') {
        for (let cardSam of cardSams) {
            cardSam.style.visibility = "hidden";
            cardSam.classList.add('d-none')
        }
        for (let cardSeg of cardSegs) {
            cardSeg.style.visibility = "visible";
            cardSeg.classList.remove('d-none')
        }
        for (let cardGyr of cardGyrs) {
            cardGyr.style.visibility = "hidden";
            cardGyr.classList.add('d-none')
        }
      }
    });
}
setTimeout(setInterval(filter))
export default filter