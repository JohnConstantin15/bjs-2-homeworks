"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  let x1;
  let x2;
  let discriminant = b ** 2 - 4 * a * c;
  if (discriminant > 0) {
    x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    arr.push(x1, x2);
  } else if (discriminant === 0) {
    x1 = -b / (2 * a);
    arr.push(x1);
  }
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  const today = new Date();
  
  if (isNaN(percent)) {
    return (
      `Параметр "Процентная ставка" содержит неправильное значение "${percent}"` 
    );
  }
  if (isNaN(contribution)) {
    return (
      `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`
    );
  }
  if (isNaN(amount)) {
    return (
      `Параметр "Общая стоимость" содержит неправильное значение "${amount}"` 
    );
  }
  let S = amount - contribution;
  /*const chosenDate = new Date(date); 
  let month = (chosenDate - today) / 2.628e9;*/
  let month=date.getMonth() - today.getMonth() + (12 * (date.getFullYear() - today.getFullYear()));
  let P = percent / 12 / 100;
  let payment = S * (P + P / ((1 + P) ** month - 1));
  totalAmount = Number((payment * month).toFixed(2));

  return totalAmount;
}
