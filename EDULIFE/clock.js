// Timer logic
let countdownInterval;
let audio = new Audio('alarm.mp3'); // Replace with your alarm sound file

function startTimer() {
    const minutesInput = document.getElementById("minutes");
    const secondsInput = document.getElementById("seconds");
    let totalTime = parseInt(minutesInput.value) * 60 + parseInt(secondsInput.value);

    if (isNaN(totalTime) || totalTime <= 0) {
        alert("Please enter a valid time.");
        return;
    }

    countdownInterval = setInterval(() => {
        if (totalTime <= 0) {
            clearInterval(countdownInterval);
            audio.play();
            document.querySelector('.status').textContent = "Time's up! Take a break!";
        } else {
            totalTime--;
            const minutes = Math.floor(totalTime / 60);
            const seconds = totalTime % 60;
            document.querySelector('.countdown').textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(countdownInterval);
    document.querySelector('.countdown').textContent = "00:00";
    audio.pause(); // Stop the audio
    audio.currentTime = 0; // Reset the audio to the beginning
    document.querySelector('.status').textContent = "Timer reset.";
}

// Event listeners for buttons
document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("reset").addEventListener("click", resetTimer);
