//Создайте пустой массив. В цикле до n на каждой итерации запускайте prompt для ввода любых символов, полученное значение добавляйте в конец созданного массива. После выхода из цикла посчитайте сумму всех чисел массива и выведите в alert полученный результат.

let arr = [];

var sum = 0;

for(;;){
    let x = prompt('','')
    if (x===null) break;

    arr.push(+x);
}
for(let i=0; i<arr.length; i++){
    let index = +arr[i];

    if(isNaN = index){ 
        sum +=index
    }
        
}

alert('Общая сумма:'+sum)

