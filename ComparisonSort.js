// Quick Sort
// https://www.geeksforgeeks.org/quick-sort/

function partition(arr, low, high) {
    // Choosing the pivot
    let pivot = arr[high];
   
    // Index of smaller element and indicates the right position of pivot found so far
    let i = low - 1;
   
    for (let j = low; j <= high - 1; j++) {
        // If current element is smaller than the pivot
        if (arr[j] < pivot) {
            // Increment index of smaller element
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
        }
    }
   
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]; // Swap pivot to its correct position
    return i + 1; // Return the partition index
}
 
// The main function that implements QuickSort
// Tail Recursion Optimization for Quicksort
function quickSort(arr, low, high) {
    while (low < high) {
        const pi = partition(arr, low, high);

        // Recursively sort the smaller subarray
        if (pi - low < high - pi) {
            quickSort(arr, low, pi - 1);
            low = pi + 1;
        } else {
            quickSort(arr, pi + 1, high);
            high = pi - 1;
        }
    }
}

module.exports = { quickSort };
