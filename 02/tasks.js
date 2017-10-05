/**
 * Исправьте проблему с таймером: должны выводиться числа от 0 до 9.
 * Доп. задание: предложите несколько вариантов решения.
 */
function timer(logger = console.log) {
  for (let i = 0; i < 10; i++) {
    let n = logger.bind({
      ind: i
    });
    setTimeout(() => {
      n(i);
    }, 100);
  }
}

/*= ============================================ */

/**
 * Создайте собственную реализацию функции bind
 * @param {Function} func передаваемая функция
 * @param {any} context контекст
 * @param {Array<any>} args массив аргументов
 * @return {Function} функция с нужным контекстом
 */
function customBind(func, context, ...args) {
  return () => {
    return func.call(context, [...args]);
  };
}

/*= ============================================ */

/**
 * Напишите функцию sum, вычисляющую суммы подобным образом:
 * sum(1)(2)( ) // 3
 * sum(1)(2)(3)( ) // 6
 * sum :: Number -> sum
 * sum :: void -> Number
 */
function sum(x) {
  if (x === undefined) {
    return 0;
  }
  let s = x;
  return function sum2(y) {
    if (y === undefined) {
      return s;
    } else {
      s += y;
      return sum2;
    }
  }
}

/*= ============================================ */

/**
 * Определите, являются ли строчки анаграммами (например, “просветитель” — “терпеливость”).
 * @param {string} first
 * @param {string} second
 * @return {boolean}
 */
function anagram(first, second) {
   return (first.split('').sort().join('')===second.split('').sort().join('')?true:false);
}

/*= ============================================ */

/**
 * Сократите массив до набора уникальных значений
 * [1,1, 2, 6, 3, 6, 2] → [1, 2, 3, 6]
 * @param {Array<number>} исходный массив
 * @return {Array<number>} массив уникальных значений, отсортированный по возрастанию
 */
function getUnique(arr) {
  let res=[];
  arr.sort();
  res.push(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    if (arr[i]!=arr[i-1]) {
      res.push(arr[i]);
    }
  }
  return res;
}

/**
 * Найдите пересечение двух массивов
 * [1, 3, 5, 7, 9] и [1, 2, 3, 4] → [1, 3]
 * @param {Array<number>, Array<number>} first, second исходные массивы
 * @return {Array<number>} массив уникальных значений, отсортированный по возрастанию
 */
function getIntersection(first, second) {

  first.sort((a, b)=>{return (a-b)});
  second.sort((a, b)=>{return (a-b)});
  let res = [];
  while( first.length > 0 && second.length > 0 )
  {
    if      (first[0] < second[0] ){ first.shift(); }
    else if (first[0] > second[0] ){ second.shift(); }
    else
    {
      res.push(first.shift());
      second.shift();
    }
  }

  return res;
}

/* ============================================= */

/**
 * Две строки называются изоморфными, когда в строке A можно заменить
 * конкретный символ на любой другой для получения строки B. (Расстояние Левенштейна, при возможных мутациях
 * ограничивающихся заменой символа - отличается на 1).
 * Отдельно стоит отметить что строка изоморфна самой себе.
 * Порядок символов должен остаться неизменным. Каждый
 * последовательный символ в строке A сравнивается с
 * каждым последовательным символов в строке B.
 *
 * @param  {string} left
 * @param  {string} right
 * @return {boolean}
 */
function isIsomorphic(left, right) {
  if (left.length!=right.length) {
    return false;
  }
  let dist = 0;
  let l = left.length;
  for (let i = 0; i < l; i++) {
    if (left[i]!=right[i]) {
      dist++;
      if (dist===2){
        return false
      }
    }
  }
  return true;
}

module.exports = {
  timer,
  customBind,
  sum,
  anagram,
  getUnique,
  getIntersection,
  isIsomorphic
};

console.log(sum(1)(2)(4)(5)())