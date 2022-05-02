// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
  min = Infinity;
  max = -Infinity;
  sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
    sum += arr[i];
  }
  avg = sum / arr.length;

  return { min: min, max: max, avg: Number(avg.toFixed(2)) };
}

// Задание 2
function worker(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function makeWork(arrOfArr, func) {
  let max = -Infinity;
  let sum;
  for (let i = 0; i < arrOfArr.length; i++) {
    sum = func(arrOfArr[i]);
    if (sum > max) {
      max = sum;
    }
  }
  return max;
}

// Задание 3
function worker2(arr) {
  let arrParams = getArrayParams(arr);
  let dif = Math.abs(arrParams.max - arrParams.min);
  return dif;
}
