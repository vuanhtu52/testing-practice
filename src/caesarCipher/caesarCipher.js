const caesarCipher = (string, k) => {
    let newString = "";

    for (let i = 0; i < string.length; i++) {
        const asciiValue = string.charAt(i).charCodeAt(0);
        let newAsciiValue = asciiValue;

        // Only do shifting if the character is a letter
        if (isLetter(string.charAt(i))) {
            // If k > 0, shift right
            if (k > 0) {
                for (let j = 0; j < k; j++) {
                    if (newAsciiValue === 90) {
                        newAsciiValue = 65;
                    } else if (newAsciiValue === 122) {
                        newAsciiValue = 97
                    } else {
                        newAsciiValue++;
                    }
                }
            } else if (k < 0) {
                // If k < 0, shift left
                for (let j = k; j < 0; j++) {
                    if (newAsciiValue === 65) {
                        newAsciiValue = 90;
                    } else if (newAsciiValue === 97) {
                        newAsciiValue = 122;
                    } else {
                        newAsciiValue--;
                    }
                }
            }
        }

        newString += String.fromCharCode(newAsciiValue);
    }
    
    return newString;
};

const isLetter = char => {
    const asciiValue = char.charCodeAt(0);
    
    if (asciiValue >= 65 && asciiValue <= 90 || asciiValue >= 97 && asciiValue <= 122) {
        return true;
    }
    
    return false;
};

export default caesarCipher;