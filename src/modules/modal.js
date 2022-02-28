const modal = () => {
    let btnOpen = document.querySelector('.order')
    let modal = document.querySelector('.modal')
    let btnClose = document.querySelector('.close')
    let sends = document.querySelectorAll('.input-btn')
    btnOpen.addEventListener('click', function () {
        if (modal.style.visibility = "hidden") {
            modal.style.visibility = "visible"
        } else {
            modal.style.visibility = "hidden"
        }
    })
    btnClose.addEventListener('click', function () {
        if (modal.style.visibility = "visible") {
            modal.style.visibility = "hidden"
        } else {
            modal.style.visibility = "visible"
        }
    })
    btnClose.addEventListener('click', function () {
        if (modal.style.visibility = "visible") {
            modal.style.visibility = "hidden"
        } else {
            modal.style.visibility = "visible"
        }
    })
    for (let send of sends) {
        send.addEventListener('click', function (e) {
            e.preventDefault();
            if (modal.style.visibility = "visible") {
                modal.style.visibility = "hidden"
            } else {
                modal.style.visibility = "visible"
            }
        })
    }
}
export default modal