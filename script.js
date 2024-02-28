
var countDownDate = new Date("March 31, 2024 00:00:00").getTime();

var countdownInterval = setInterval(function() {
    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = formatTime(days);
    document.getElementById("hours").innerText = formatTime(hours);
    document.getElementById("minutes").innerText = formatTime(minutes);
    document.getElementById("seconds").innerText = formatTime(seconds);

    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById("days-box").style.display = "none";
        document.getElementById("hours-box").style.display = "none";
        document.getElementById("minutes-box").style.display = "none";
        document.getElementById("seconds-box").style.display = "none";
        document.body.innerHTML += "<h2>Countdown expired!</h2>";
    }
}, 1000);

function formatTime(time) {
    return time < 10 ? "0" + time : time;
}
