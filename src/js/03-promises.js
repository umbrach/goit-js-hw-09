import Notiflix from 'notiflix';

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        // Reject
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });
  promise
    .then(value => Notiflix.Notify.success(value))
    .catch(error => Notiflix.Notify.failure(error));
}

const onSubmitBtnClick = document.querySelector('.form');
onSubmitBtnClick.addEventListener('submit', onFormSubmit);


function onFormSubmit(event) {
  event.preventDefault();
  let delayEl = Number(document.querySelector('input[name="delay"]').value);
  let amountEl = Number(document.querySelector('input[name="amount"]').value);
  let stepEl = Number(document.querySelector('input[name="step"]').value);
  for (let i = 0; i < amountEl; i += 1) {
    let promiseValue = i + 1;
    let promiseDelay = delayEl + stepEl * i;
    createPromise(promiseValue, promiseDelay);
  }
}
