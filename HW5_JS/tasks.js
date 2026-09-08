
// Завдання 1: Сортування бульбашкою


function bubbleSort(arr) {
    let result = [...arr];

    for (let i = 0; i < result.length - 1; i++) {
        let swapped = false;

        for (let j = 0; j < result.length - 1 - i; j++) {
            if (result[j] > result[j + 1]) {
                // Міняємо елементи місцями
                let temp = result[j];
                result[j] = result[j + 1];
                result[j + 1] = temp;

                swapped = true;
            }
        }

       
        if (!swapped) {
            break;
        }
    }

    return result;
}



// Завдання 2: Сортування вибором


function selectionSort(arr) {
    let result = [...arr];

    for (let i = 0; i < result.length - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < result.length; j++) {
            if (result[j] < result[minIndex]) {
                minIndex = j;
            }
        }

        
        if (minIndex !== i) {
            let temp = result[i];
            result[i] = result[minIndex];
            result[minIndex] = temp;
        }
    }

    return result;
}



// Завдання 3: Сортування вставками


function insertionSort(arr) {
    let result = [...arr];

    for (let i = 1; i < result.length; i++) {
        let current = result[i];
        let j = i - 1;

        while (j >= 0 && result[j] > current) {
            result[j + 1] = result[j];
            j--;
        }

        result[j + 1] = current;
    }

    return result;
}



// Перевірка роботи


let numbers = [64, 34, 25, 12, 22, 11, 90];

console.log("Початковий масив:");
console.log(numbers);

console.log("Bubble Sort:");
console.log(bubbleSort(numbers));

console.log("Selection Sort:");
console.log(selectionSort(numbers));

console.log("Insertion Sort:");
console.log(insertionSort(numbers));