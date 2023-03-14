import Notiflix from 'notiflix';
import "notiflix/dist/notiflix-3.2.6.min.css";

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}

createPromise(2, 1500)
  .then(({ position, delay }) => {
    Notiflix.Notify.success('✅ Fulfilled promise ${position} in ${delay}ms');
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure('❌ Rejected promise ${position} in ${delay}ms');
  });



