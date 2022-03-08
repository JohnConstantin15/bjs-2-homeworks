"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  let x1;
  let x2;
  let d = b ** 2 - 4 * a * c;
  if (d > 0) {
    x1 = (-b + Math.sqrt(d)) / (2 * a);
    x2 = (-b - Math.sqrt(d)) / (2 * a);
    arr.push(x1, x2);
  } else if (d === 0) {
    x1 = -b / (2 * a);
    arr.push(x1);
  } else {
    arr = [];
  }
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  const today = new Date();
  const chosenDate = new Date(date);
  if (isNaN(percent)) {
    return (
      "Параметр 'Процентная ставка' содержит неправильное значение " + percent
    );
  }
  if (isNaN(contribution)) {
    return (
      "Параметр 'Начальный взнос' содержит неправильное значение " +
      contribution
    );
  }
  if (isNaN(amount)) {
    return (
      "Параметр 'Общая стоимость' содержит неправильное значение " + amount
    );
  }
  let S = amount - contribution;
  let month = (chosenDate - today) / 2.628e9;
  let P = percent / 12 / 100;
  let payment = S * (P + P / ((1 + P) ** month - 1));
  totalAmount = Number(payment * month).toFixed(2);

  return totalAmount;
}
