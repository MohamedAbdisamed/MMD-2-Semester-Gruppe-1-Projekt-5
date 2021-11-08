document.getElementById("virksomhed").addEventListener("click", function() {
 document.querySelector(".far").style.display = "flex";
 document.querySelector(".mor").style.display = "none";
})
document.getElementById("privat").addEventListener("click", function() {
document.querySelector(".far").style.display = "none";
 document.querySelector(".mor").style.display = "flex";
 })
//navbar//
document.addEventListener("DOMContentLoaded", () => {
   initApp();
});

function initApp() {
    alert("pupud");
    const menuBtn = document.querySelector(".nav__burger-btn");
    const list = document.querySelector(".nav__list");
    menuBtn.addEventListener("click", toggleButtonAndMenu);
    list.addEventListener("click", toggleButtonAndMenu);
}

const toggleButtonAndMenu = () => {
    const menuBtn = document.querySelector(".nav__burger-btn");
    const list = document.querySelector(".nav__list");
    menuBtn.classList.toggle("open");
    list.classList.toggle("open");
}