const findSmallest = (arr) => {
    let countOfArr = arr.length; 
    for(let i = 0; i < countOfArr; i += 1) {
    // Находим наименьшее число в правой части массива
        let min = i;
        for(let j = i; j < countOfArr; j += 1) {
            if(arr[j] < arr[min]) {
                min=j; 
                }
            }
            if (min != i) {
                // Заменяем элементы
                let tmp = arr[i]; 
                arr[i] = arr[min];
                arr[min] = tmp;      
            }
        }
    
    return arr;
};

// Тестируем функцию

arr = [5, 15, 0, 9, 8, 22];

console.log(findSmallest(arr));