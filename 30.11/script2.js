//Сгенерируйте массив из N случайных чисел с двумя знаками после запятой. Затем переберите массив и распечатайте в консоли значения его элементов, возведенные в пятую степень. Для возведения в степень используйте вложенный цикл (не метод Math.pow(), не оператор **).

const arr = [];
const fiveDegree = [];

for (let i = 0; i < 10; i++) {
    let x = (Math.random() * 10).toFixed(2);
    
    arr.push(x)

    fiveDegree.push(x*x*x*x*x)
}

console.log('Число: ', arr);
console.log('Число в 5й степени', fiveDegree);
