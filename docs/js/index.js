"use strict";

var switch__bar = document.getElementsByClassName('switch__bar')[0];
var button = switch__bar.querySelector('.switch__circle');
var prices = document.querySelectorAll('.stats__amount');
var monthlyPrices = ['19.99', '24.99', '39.99'];
var annuallyPrices = ['199.99', '249.99', '399.99'];

var changePrice = function changePrice() {
  if (cont == 0) {
    for (var i = 0; i < prices.length; i++) {
      prices[i].textContent = annuallyPrices[i];
      animation(i);
    }

    cont++;
  } else if (cont > 0) {
    for (var _i = 0; _i < prices.length; _i++) {
      prices[_i].textContent = monthlyPrices[_i];
      animation(_i);
    }

    cont--;
  }
};

var cont = 0;
button.addEventListener('click', function () {
  positionButton();
  changePrice();
});

var positionButton = function positionButton() {
  button.classList.toggle('active__circle');
};

var animation = function animation(i) {
  if (cont == 0) {
    prices[i].classList.toggle('animate__headShake');
  } else if (cont > 0) {
    prices[i].classList.toggle('animate__headShake');
    prices[i].classList.toggle('animate__shakeX');
    setTimeout(function () {
      prices[i].classList.toggle('animate__shakeX');
    }, 1000);
  }
};