'use strict';

const submitBtn = document.querySelector('.btn-submit');
const ratingBtns = document.querySelectorAll('.btn-rating');
const ratingCard = document.querySelector('.card--rating');

let rate = 0;

ratingBtns.forEach(ratingBtn =>
  ratingBtn.addEventListener('click', function () {
    rate = +ratingBtn.dataset.rate;
    console.log(rate);
  })
);

submitBtn.addEventListener('click', function (e) {
  if (rate === 0) {
    ratingCard.insertAdjacentHTML(
      'beforeend',
      '<p class="card--rating__error">Please, select a score!</p>'
    );
    setTimeout(() => {
      document.querySelector('.card--rating__error').remove();
    }, 2000);
  } else
    document.body.innerHTML = `
    <div class="card card--submit">
      <div class="card--sumbit__image">
        <img
          class="card--sumbit-icon"
          src="/images/illustration-thank-you.svg"
          alt="Thank you icon"
        />
      </div>
      <p class="card--submit__rate">You selected ${rate} out of 5</p>
      <h1 class="card--rating__heading">Thank you!</h1>
      <p class="card--rating__text">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  `;
});
