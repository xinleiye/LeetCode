/**
 * @param {string} s
 * @return {string}
 */
var modifyString = function(s) {
    let charArray = s.split("");
    let totalLength = s.length;
    let allLowerChar = "abcdefghijklmnopqrstuvwxyz";

    for (let i = 0; i < totalLength; i++) {
        if (charArray[i] === "?") {
            if (i > 0 && i < totalLength - 1) {
                for (let j = 0; j < allLowerChar.length; j++) {
                    if (charArray[i - 1] !== allLowerChar[j] && charArray[i + 1] !== allLowerChar[j]) {
                        charArray[i] = allLowerChar[j];
                        break;
                    }
                }
            } else if (i === 0) {
                for (let j = 0; j < allLowerChar.length; j++) {
                    if (charArray[1] !== allLowerChar[j]) {
                        charArray[0] = allLowerChar[j];
                        break;
                    }
                }
            } else if (i === totalLength - 1) {
                for (let j = 0; j < allLowerChar.length; j++) {
                    if (charArray[totalLength - 2] !== allLowerChar[j]) {
                        charArray[totalLength - 1] = allLowerChar[j];
                        break;
                    }
                }
            }
        }
    }
    
    return charArray.join("");
};
