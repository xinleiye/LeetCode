/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function(sequence, word) {
    let res = 0;
    let subStr = "";
    let isSubString = (str, subStr) => {
        const len = str.length;
        const subLen = subStr.length;

        for (let i = 0; i <= len - subLen; i++) {
            let index = i;
            let subIndex = 0;

            while (subIndex < subLen && str[index] === subStr[subIndex]) {
                index++;
                subIndex++;
            }
            if (subIndex === subLen) {
                return true;
            }
        }
        
        return false;
    };
    
    while (isSubString(sequence, subStr + word)) {
        res++;
        subStr += word;
    }

    return res;
};
