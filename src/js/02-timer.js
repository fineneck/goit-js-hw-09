import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';
import "notiflix/dist/notiflix-3.2.6.min.css";

const refs = {
  input: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('[data-start]'),
  timer: document.querySelector('.timer'),
  field: document.querySelector('.field'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  mins: document.querySelector('[data-minutes]'),
  secs: document.querySelector('[data-seconds]'),
  fieldEl: document.querySelectorAll('.timer > .field'),
  labelEl: document.querySelectorAll('.field > .label'),
};

refs.timer.style.display = 'flex';
refs.timer.style.gap = '5px';
refs.timer.style.fontSize = '20px';

refs.fieldEl.forEach(el => {
  el.style.display = 'flex';
  el.style.flexDirection = 'column';
  el.style.alignItems = 'center';  
});

refs.labelEl.forEach(el => {
  el.style.fontSize = '15px';  
});

refs.startBtn.addEventListener('click', timer);
refs.startBtn.disabled = true;
refs.input.addEventListener('input', onInputChange);

let selectedDate = '';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= options.defaultDate) {
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      refs.startBtn.disabled = false;
    }    
  }
};

const calendar = flatpickr('#datetime-picker', options);

function onInputChange(e) {
  selectedDate = new Date(e.currentTarget.value);
};

function timer() {
  setInterval(() => {
    refs.startBtn.disabled = true;
    const time = selectedDate - Date.now();
    convertMs(time);
  }, 1000)
};

function convertMs(time) {
  // const second = 1000;
  // const minute = second  * 60;
  // const hour = minute * 60;
  // const day = hour * 24;

  const days = addLeadingZero(Math.floor(time / (1000 * 60 *60 * 24)));
  const hours = addLeadingZero(Math.floor((time / (1000 * 60 *60)) % 24));
  const minutes = addLeadingZero(Math.floor((time / (1000 * 60)) % 60));
  const seconds = addLeadingZero(Math.floor((time / 1000) % 60));

  refs.days.textContent = days;
  refs.hours.textContent = hours;
  refs.mins.textContent = minutes;
  refs.secs.textContent = seconds;
};

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
};


