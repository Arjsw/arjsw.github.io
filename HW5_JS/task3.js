// Завдання 3: Сортування вставками (Insertion Sort)

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



let numbers = [64, 34, 25, 12, 22, 11, 90];

console.log("Початковий масив:");
console.log(numbers);

console.log("Insertion Sort:");
console.log(insertionSort(numbers));