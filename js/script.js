// codign parallax effect
window.addEventListener("scroll", function() {
  
})
// coding loading screen ----------> 
window.addEventListener("load", function() {
    document.querySelector(".loader-container").classList.add("loaded");
});
// coding sticky navbar --------> 
window.addEventListener("scroll", function() {
    // vaariable for parallax effect
    const parallax = document.querySelector("img");
    let scrollP = window.pageYOffset;
    // sticky navbar 
    let sticky = document.querySelector(".navbar");
    sticky.classList.toggle("sticky", window.scrollY > 0);
    // parallax effect 
    parallax.style.transform = 'translateY(' + scrollP * .2 + 'px)';
});
// timer 
(function() {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    let birthday = "Sep 30, 2022 00:00:00",
        countDown = new Date(birthday).getTime(),
        x = setInterval(function() {
            let now = new Date().getTime(),
                distance = countDown - now;
          
            document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

            //do something later when date is reached
            if (distance < 0) {
                let headline = document.getElementById("headline"),
                    countdown = document.getElementById("countdown"),
                    content = document.getElementById("content");

                headline.innerText = "It's my birthday!";
                countdown.style.display = "none";
                content.style.display = "block";

                clearInterval(x);
            }
            //seconds
        }, 0)
}());
