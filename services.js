//HOVER========================================================
const buttons = document.querySelectorAll('.button');
buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.classList.add('hover-effect');
    });

    button.addEventListener('mouseleave', () => {
        button.classList.remove('hover-effect');
    });
});
//APPOINTMENT================================================
const modal = document.getElementById("appointmentModal");
const btn = document.querySelector(".book-btn");
const span = document.querySelector(".modal .close");
btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
//SLIDER========================================================
let slider = document.querySelector(".slider");
let currentSlide = 0;
let totalSlides = slider.querySelectorAll(".wrapper .left > div").length - 1;

slider.querySelector(".controls .up").addEventListener("click", function(){
    if(currentSlide == 0){
        return;
    }
    currentSlide--;
    slider.querySelector(".wrapper .left div").style.marginTop = `${currentSlide*-100}vh`;
    slider.querySelector(".wrapper .right div").style.marginTop = `${(totalSlides-currentSlide)*-100}vh`;
});
slider.querySelector(".controls .down").addEventListener("click", function(){
    if(currentSlide == totalSlides){
        return;
    }
    currentSlide++;
    slider.querySelector(".wrapper .left div").style.marginTop = `${currentSlide*-100}vh`;
    slider.querySelector(".wrapper .right div").style.marginTop = `${(totalSlides-currentSlide)*-100}vh`;
});

