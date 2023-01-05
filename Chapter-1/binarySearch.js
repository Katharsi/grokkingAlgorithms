/*
Функция binarySearch получает отсортированный массив и значение.
Если значение присутствует в массиве, то функция возвращает его
позицию.
*/

const binarySearch = (list, item) => {
    let low = 0;  //В переменных хранятся границы той части массива, в кот-рой выполняется поиск.
    let high = list.length - 1;

    while (low <= high) {  //Пока эта часть не сократится до 1 элемента
        let mid = (low + high) / 2; //...проверяем средний элемент.
        let guess = list[mid];

        if (guess > item) {  //Много.
            high = mid - 1;
        } else if (guess < item) {  //Мало.
            low = mid + 1;
        } else if (guess === item) {  //Значение найдено.
            return mid;
        }
    }

    return false;  //Значения не существует.
};

//Тестируем функцию.
myList = [1, 3, 7, 8, 12, 16, 19];

console.log(binarySearch(myList, 3));
console.log(binarySearch(myList, 22));
console.log(binarySearch(myList, 19));
console.log(binarySearch(myList, 112));
