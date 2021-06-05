// coding loading screen ----------> 
window.addEventListener("load", function() {
    document.querySelector(".loader-container").classList.add("loaded");
});
// coding sticky navbar --------> 
window.addEventListener("scroll", function() {
    let sticky = document.querySelector(".navbar");
    sticky.classList.toggle("sticky", window.scrollY > 0);
});