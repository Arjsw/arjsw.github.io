// Завдання 2: Сортування вибором (Selection Sort)

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



let numbers = [64, 34, 25, 12, 22, 11, 90];

console.log("Початковий масив:");
console.log(numbers);

console.log("Selection Sort:");
console.log(selectionSort(numbers));