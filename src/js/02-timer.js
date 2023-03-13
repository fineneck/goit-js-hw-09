import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';
// import "notiflix/dist/notiflix-3.2.6.min.css";

const refs = {
  inputEl: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('[data-start]'),
  timerEl: document.querySelector('.timer'),
  fieldEl: document.querySelector('.field'),
  daysEl: document.querySelector('[data-days]'),
  hoursEl: document.querySelector('[data-hours]'),
  minsEl: document.querySelector('[data-minutes]'),
  secsEl: document.querySelector('[data-seconds]'),
};



console.log(refs);