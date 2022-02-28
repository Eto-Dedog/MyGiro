const filter = () => {
    let select = document.querySelector('select');
    let cardSams = document.querySelectorAll('.samokat')
    let cardSegs = document.querySelectorAll('.segway')
    let cardGyrs = document.querySelectorAll('.gyro')
    select.addEventListener('change', () => {
      if (select.value === 'filter1') {
        for (let cardSam of cardSams) {
            cardSam.classList.remove('d-none')
        }
        for (let cardSeg of cardSegs) {
            cardSeg.classList.remove('d-none')
        }
        for (let cardGyr of cardGyrs) {
            cardGyr.classList.remove('d-none')
        }
      } else if (select.value === 'filter2') {
        for (let cardSam of cardSams) {
            cardSam.classList.add('d-none')
        }
        for (let cardSeg of cardSegs) {
            cardSeg.classList.add('d-none')
        }
        for (let cardGyr of cardGyrs) {
            cardGyr.classList.remove('d-none')
        }
      } else if (select.value === 'filter3') {
        for (let cardSam of cardSams) {
            cardSam.classList.remove('d-none')
        }
        for (let cardSeg of cardSegs) {
            cardSeg.classList.add('d-none')
        }
        for (let cardGyr of cardGyrs) {
            cardGyr.classList.add('d-none')
        }
      } else if (select.value === 'filter4') {
        for (let cardSam of cardSams) {
            cardSam.classList.add('d-none')
        }
        for (let cardSeg of cardSegs) {
            cardSeg.classList.remove('d-none')
        }
        for (let cardGyr of cardGyrs) {
            cardGyr.classList.add('d-none')
        }
      }
    });
}
export default filter