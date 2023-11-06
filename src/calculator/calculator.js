const calculator = {
    add: (num1, num2) => {  
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error("Invalid argument");
        }

        num1 = parseFloat(num1);
        num2 = parseFloat(num2);

        return num1 + num2;
    },

    subtract: (num1, num2) => {
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error("Invalid argument");
        }

        num1 = parseFloat(num1);
        num2 = parseFloat(num2);

        return num1 - num2;
    },

    multiply: (num1, num2) => {
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error("Invalid argument");
        }

        num1 = parseFloat(num1);
        num2 = parseFloat(num2);

        return num1 * num2;
    },

    divide: (num1, num2) => {
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error("Invalid argument");
        }

        num1 = parseFloat(num1);
        num2 = parseFloat(num2);

        if (num2 === 0) {
            throw new Error("Denominator cannot be 0")
        }

        let result = num1 / num2;
        if (result.toString().split(".")[1].length > 5) {
            result = parseFloat(result.toFixed(2));
        }

        return result;
    },
};

export default calculator;