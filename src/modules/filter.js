const filter = () => {
    let select = document.querySelector('select');
    let cardSam = document.querySelectorAll('.samokat')
    let cardSeg = document.querySelectorAll('.segway')
    let cardGyr = document.querySelectorAll('.gyro')
    select.addEventListener('change', () => {
      if (select.value === 'filter1') {
      } else if (select.value == 'filter2') {
      }
    });
}
export default filter