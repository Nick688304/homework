// Используя замыкание, напишите функцию createTimer, которая использует метод performance.now() для получения текущей временной метки и служит для замера времени выполнения другого кода:

// var timer = createTimer();
// alert('!');  // код, время выполнения которого нужно измерить
// alert( timer() ); // время в мкс от начала выполнения createTimer() до момента вызова timer()


function createTimer() {
    let x = performance.now();
    return () => {
        let y = performance.now();
        return y - x;
    }
}

var timer = createTimer();
alert('!'); // код, время выполнения которого нужно измерить
alert(timer()); // время в мкс от начала выполнения createTimer() до момента вызова timer()