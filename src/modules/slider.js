const sldier = () => {
let btnRight = document.querySelector(".arr__right");
let slides = document.querySelectorAll(".slide");
let i = 0;
btnRight.addEventListener("click", function () {
    ++i
    if (i >= slides.length) {
        slides[i-1].classList.remove("flex");
        i = 0;
        slides[i].classList.add("flex");
    } else { // Иначе
        slides[i-1].classList.remove("flex");
        slides[i].classList.add("flex");
    }
})
}
export default sldier