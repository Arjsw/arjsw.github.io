// Завдання 1: Сортування бульбашкою (Bubble Sort)

function bubbleSort(arr) {
    let result = [...arr];

    for (let i = 0; i < result.length - 1; i++) {
        let swapped = false;

        for (let j = 0; j < result.length - 1 - i; j++) {
            if (result[j] > result[j + 1]) {
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



let numbers = [64, 34, 25, 12, 22, 11, 90];

console.log("Початковий масив:");
console.log(numbers);

console.log("Bubble Sort:");
console.log(bubbleSort(numbers));