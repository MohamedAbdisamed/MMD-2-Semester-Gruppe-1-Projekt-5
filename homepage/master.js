

document.getElementById("virksomhed").addEventListener("click", function() {
 document.querySelector(".far").style.display = "flex";
 document.querySelector(".mor").style.display = "none";
})
document.getElementById("privat").addEventListener("click", function() {
document.querySelector(".far").style.display = "none";
 document.querySelector(".mor").style.display = "flex";
 })
