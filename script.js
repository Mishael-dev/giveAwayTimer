
var countDownDate = new Date("Feb 28, 2024 00:00:00").getTime();

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

{/* <div>
          <div class="countdown-box" id="days-box">
            <div class="countdown-value" id="days">00</div>
            <div class="countdown-label">Days</div>
          </div>

          <div class="countdown-box" id="hours-box">
            <div class="countdown-value" id="hours">00</div>
            <div class="countdown-label">Hours</div>
          </div>

          <div class="countdown-box" id="minutes-box">
            <div class="countdown-value" id="minutes">00</div>
            <div class="countdown-label">Minutes</div>
          </div>

          <div class="countdown-box" id="seconds-box">
            <div class="countdown-value" id="seconds">00</div>
            <div class="countdown-label">Seconds</div>
          </div>
        </div> */}