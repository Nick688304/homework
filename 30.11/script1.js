//Создайте смешанный массив, например [1, 2, 3, ‘a’, ‘b’, ‘c’, ‘4’, ‘5’, ‘6’]. Посчитайте сумму всех его чисел, включая строковые. Выведите сумму в alert.

var data = [1, 2, 3, 'a', 'b', 'c', '4', '5', '6'];

var x = 0;

for (let i=0; i<data.length; i++){
    let y = +data[i]; 
    if(isNaN = y){
        x +=y
    }

}

console.log(x)

