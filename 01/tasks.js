/**
 * найдите минимум и максимум в любой строке
 * @param  {string} string входная строка(числа отделены от других частей строки пробелами или знаками препинания)
 * @return {{min: number, max: number}} объект с минимумом и максимумом
 * '1 и 6.45, -2, но 8, а затем 15, то есть 2.7 и -1028' => { min: -1028, max: 15 }
 */
function getMinMax(string) {
  var res = string.match(/(-)?\d+(\.\d+)?/g);
  var min = parseFloat(res[0]);
  var max = parseFloat(res[0]);

  for (var i = 1; i < res.length; ++i) {
    if (parseFloat(res[i]) < min) {
      min = parseFloat(res[i]);
    }
    if (parseFloat(res[i]) > max) {
      max = parseFloat(res[i]);
    }
  }
  return { min, max };
}

/* ============================================= */

/**
 * Напишите рекурсивную функцию вычисления чисел Фибоначчи
 * @param {number} x номер числа
 * @return {number} число под номером х
 */
function fibonacciSimple(x) {
  if (x === 0) {
    return 0;
  } else if (x === 1) {
    return 1;
  }
  return fibonacciSimple(x - 1) + fibonacciSimple(x - 2);
}

/* ============================================= */

/**
 * Напишите функцию для вычисления числа Фибоначчи с мемоизацией:
 * при повторных вызовах функция не вычисляет значения, а достает из кеша.
 * @param {number} x номер числа
 * @return {number} число под номером х
 */
var fibonacciNumbers = [];

fibonacciNumbers.push(0);
fibonacciNumbers.push(1);

function fibonacciWithCache(x) {
  if (x === 0) {
    return x;
  } else if (x === 1) {
    return x;
  } else if (fibonacciNumbers.length <= x) {
    var fx = fibonacciWithCache(x - 1) + fibonacciWithCache(x - 2);

    fibonacciNumbers.push(fx);
    return fx;
  }
  return fibonacciNumbers[x];
}

/* ============================================= */

/**
 * Напишите функцию printNumbers, выводящую числа в столбцах
 * так, чтобы было заполнено максимальное число столбцов при
 * минимальном числе строк.
 * Разделитель межу числами в строке - один пробел,
 * на каждое число при печати - отводится 2 символа
 * Пример работы: printNumbers(11, 3)
 *  0  4  8
 *  1  5  9
 *  2  6 10
 *  3  7 11
 * @param  {number} max  максимальное число (до 99)
 * @param  {number} cols количество столбцов
 * @return {string}
 */
function getMatrix(rows, columns) {
  var arr = [];

  for (var i = 0; i < columns; i++) {
    arr[i] = [];
    for (var j = 0; j < rows; j++) {
      arr[i][j] = columns * j + i;
    }
  }
  return arr;
}

function printNumbers(max, cols) {
  var rows = Math.floor(max / cols + 1);
  var res = '';
  var matrix = getMatrix(cols, rows);

  for (var i = 0; i < rows; ++i) {
    for (var j = 0; j < cols; ++j) {
      if (matrix[i][j] > max) {
        res += '';
      } else if (matrix[i][j] < 10 && j === 0) {
        res += ' ' + matrix[i][j];
      } else if (matrix[i][j] < 10 && j !== 0) {
        res += '  ' + matrix[i][j];
      } else if (j === 0) {
        res += matrix[i][j];
      } else {
        res += ' ' + matrix[i][j];
      }
    }
    if (i !== (rows - 1)) {
      res += '\n';
    }
  }
  return res;
}

/* ============================================= */

/**
 * Реализуйте RLE-сжатие: AAAB -> A3B, BCCDDDEEEE -> BC2D3E4
 * @param  {string} value
 * @return {string}
 */

function rle(input) {
  var count = 0;
  var res = '';
  var curr = input[0];
  var c;

  for (var i = 0; i < input.length; ++i) {
    c = input.charAt(i);
    if ((curr !== c)) {
      res += curr + ((count > 1) ? count : '');
      curr = c;
      count = 0;
    }
    count++;
  }
  res += curr + ((count > 1) ? count : '');
  return res;
}

console.log();
module.exports = {
  getMinMax,
  rle,
  printNumbers,
  fibonacciSimple,
  fibonacciWithCache
};
