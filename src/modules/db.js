const db = () => {
  let cards = document.querySelector('.cards'),
  requestURL = '../db/hero.json',
  request = new XMLHttpRequest();
request.open('GET', requestURL);
request.onload = function(e) {
  if (request.readyState === 4) {
      if (request.status === 200) {
          // console.log(request.response);
          let dataCards = JSON.parse(request.responseText);
          getTableInfo(dataCards);
      } else {
          console.error(request.statusText);
      }
  }
};
request.send();
function getTableInfo(data) {
  data.forEach(function(item){
    cards.innerHTML += 
      `
      <div class="card">
      <img src="${item.фото}" class="card__img" alt="card__img">
      <h4 class="card__name">${item.название}</h4>
      <span class="card__type">${item.тип}</span>
      <span class="card__battery">${item.батарея}</span>
      <span class="card__power">${item.мощность}</span>
      <span class="card__wheel">${item.колёса}</span>
      <span class="card__weight">${item.вес}</span>
      <p class="card__info">${item.описание}</p>
      </div>
      `
    // `
    // `
    // if (item.тип === "гироскутер") {
    //   `
    //   <div class="card gyro">
    //   <img src="${item.фото}" class="card__img" alt="card__img">
    //   <h4 class="card__name">${item.название}</h4>
    //   <span class="card__type">${item.тип}</span>
    //   <span class="card__battery">${item.батарея}</span>
    //   <span class="card__power">${item.мощность}</span>
    //   <span class="card__wheel">${item.колёса}</span>
    //   <span class="card__weight">${item.вес}</span>
    //   <p class="card__info">${item.описание}</p>
    //   </div>
    //   `
    // } else if (item.тип === "электросамокат") {
    //   `
    //   <div class="card samokat">
    //   <img src="${item.фото}" class="card__img" alt="card__img">
    //   <h4 class="card__name">${item.название}</h4>
    //   <span class="card__type">${item.тип}</span>
    //   <span class="card__battery">${item.батарея}</span>
    //   <span class="card__power">${item.мощность}</span>
    //   <span class="card__wheel">${item.колёса}</span>
    //   <span class="card__weight">${item.вес}</span>
    //   <p class="card__info">${item.описание}</p>
    //   </div>
    //   `
    // } else if (item.тип === "сегвей") {
    //   `
    //   <div class="card segway">
    //   <img src="${item.фото}" class="card__img" alt="card__img">
    //   <h4 class="card__name">${item.название}</h4>
    //   <span class="card__type">${item.тип}</span>
    //   <span class="card__battery">${item.батарея}</span>
    //   <span class="card__power">${item.мощность}</span>
    //   <span class="card__wheel">${item.колёса}</span>
    //   <span class="card__weight">${item.вес}</span>
    //   <p class="card__info">${item.описание}</p>
    //   </div>
    //   `
    // }
    // `
    // `
    // console.log(item.название);
  })
}
}
export default db