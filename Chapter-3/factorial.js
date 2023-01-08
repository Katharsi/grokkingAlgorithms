const factorial = (x) => {
    if (x === 1) { // Базовый случай, когда функция перестаёт вызывать саму себя
        return 1;
    } else {      // Функция вызывает саму себя с новым аргументом
        return x * factorial(x - 1);
    }
};

//Тестируем рекурсивную функцию
console.log(factorial(3)); //6
console.log(factorial(15)); //1307674368000
console.log(factorial(2)); //2
console.log(factorial(5)); //120