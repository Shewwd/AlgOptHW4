// Counting Sort 
// https://www.geeksforgeeks.org/counting-sort/

//Iterative Counting Sort
function countingSort(inputArr, n = inputArr.length) {
    let k = Math.max(...inputArr);
    let t;
    //Create a temporary with 0 zero value 
    //as the same length of max elemet + 1
    const temp = new Array(k + 1).fill(0);
    
    //Count the frequency of each element in the original array
    //And store it in temp array
    for(let i = 0; i < n; i++){
      t = inputArr[i];
      temp[t]++;
    }
  
    const outputArr = new Array(inputArr.length);
    let outputIndex = inputArr.length - 1;

    for (let i = k; i >= 0; i--) {
        while (temp[i] > 0) {
            outputArr[outputIndex] = i;
            outputIndex--;
            temp[i]--;
        }
    }
    
    return outputArr;
}

module.exports = { countingSort };