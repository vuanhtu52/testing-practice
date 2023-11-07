const analyzeArray = array => {
    // Check if array is empty
    if (array.length === 0) {
        throw new Error("Array cannot be empty");
    }

    // Check if array contains all numbers
    for (let num of array) {
        if (isNaN(num)) {
            throw new Error("Array must contain all numbers");
        }
    }

    // Convert all elements to float numbers
    let floatArray = [];
    for (let num of array) {
        floatArray.push(parseFloat(num));
    }

    return {
        average: average(floatArray),
        min: Math.min(...floatArray),
        max: Math.max(...floatArray),
        length: floatArray.length,
    };
    
};

const average = array => {
    const sum = array.reduce((total, currentNum) => total += currentNum, 0);
    let average = sum / array.length;

    // Round up to 2 decimal places if the average has more than 5 decimal numbers
    if (average.toString().includes(".")) {
        const decimalCount = average.toString().split(".")[1].length;
        if (decimalCount > 5) {
            average = parseFloat(average.toFixed(2));
        }
    }

    return average;
};

export default analyzeArray;