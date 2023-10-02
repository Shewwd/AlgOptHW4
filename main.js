const { countingSort } = require("./LinearSort.js");
const { quickSort } = require("./ComparisonSort.js");

const numIterations = 5;

console.log("n\tcountingSort(ms)\tquickSort(ms)");

for (var i = 0; i < numIterations; i++) {

    let randomArr = [];
    for (let j = 0; j < Math.pow(10, i + 1); j++) {
        randomArr.push(Math.floor(Math.random() * 10) + 1);
    }

    const startingTime1 = Date.now();
    countingSort(randomArr);
    const time1 = Date.now() - startingTime1;

    const startingTime2 = Date.now();
    quickSort(randomArr, 0, randomArr.length - 1);
    const time2 = Date.now() - startingTime2;

    console.log(`${randomArr.length}\t\t${time1}\t\t\t${time2}`);
}