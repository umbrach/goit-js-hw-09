import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const inputField = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button[data-start]');
const timeDays = document.querySelector('[data-days]');
const timeHours = document.querySelector('[data-hours]');
const timeMins = document.querySelector('[data-minutes]');
const timeSecs = document.querySelector('[data-seconds]');

startBtn.disabled = true;
// const selectedTime = null;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (selectedDates[0] < Date.now()) {
      Notiflix.Report.failure('Please choose a date in the future');
    } else {
      startBtn.disabled = false;
      selectedTime = selectedDates[0];
    }
  },
};

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

class Timer {
  constructor() {
    this.timerID = null;
    this.isActive = false;
  }

  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    this.timerID = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = selectedTime - currentTime;
      const componentsTimer = convertMs(deltaTime);
      if (deltaTime > 0) this.updateComponents(componentsTimer);
      else {
        clearInterval(this.timerID);
      }
    }, 1000);
  }

  updateComponents({ days, hours, minutes, seconds }) {
    timeDays.textContent = days;
    timeHours.textContent = hours;
    timeMins.textContent = minutes;
    timeSecs.textContent = seconds;
  }
}

const timer = new Timer();

flatpickr(inputField, options);

startBtn.addEventListener('click', () => timer.start());
