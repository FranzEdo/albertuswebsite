// Countdown timer
const countdownTimer = document.querySelector('.countdown-timer');
const daysElement = document.querySelector('#days');
const hoursElement = document.querySelector('#hours');
const minutesElement = document.querySelector('#minutes');
const secondsElement = document.querySelector('#seconds');

let countdownDate = new Date('2024-06-12T12:00:00.000Z'); // Set the farewell party date and time
let countdownInterval = setInterval(() => {
    const now = new Date();
    const timeDiff = countdownDate.getTime() - now.getTime();
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    daysElement.textContent = days;
    hoursElement.textContent = hours;
    minutesElement.textContent = minutes;
    secondsElement.textContent = seconds;

    if (timeDiff <= 0) {
        clearInterval(countdownInterval);
        countdownTimer.textContent = 'HORE NAIK KELAS 6!';
    }
}, 1000);