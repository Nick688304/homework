//Напишите цикл с шагом 1, в теле которого распечатываются квадраты каждого четного значения счетчика.


for (var i = 1; i<10; i++) {
    
    if (i%2 === 0) {
        var j = i*i
    } else {
        j = i  
    }

    console.log(j)
}

