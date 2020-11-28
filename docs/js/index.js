"use strict";

var switch__bar = document.getElementsByClassName('switch__bar')[0];
var button = switch__bar.querySelector('.switch__circle');

var toogleStyles = function toogleStyles() {
  button.classList.toggle('active__circle');
};

button.addEventListener('click', function () {
  toogleStyles();
});