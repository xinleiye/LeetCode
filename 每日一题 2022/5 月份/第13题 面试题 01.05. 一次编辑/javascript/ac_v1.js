/**
 * @param {string} first
 * @param {string} second
 * @return {boolean}
 */
var oneEditAway = function(first, second) {
    const len1 = first.length;
    const len2 = second.length;

    if (Math.abs(len1 - len2) > 1) {
        return false;
    } else if (Math.abs(len1 - len2) === 1) {
        let shortStr = first;
        let longStr = second
        let shortLen = len1;
        if (len1 - len2 === 1) {
            shortStr = second;
            longStr = first;
            shortLen = len2;
        }
        let index = 0;
        while (index < shortLen) {
            if (longStr[index] !== shortStr[index]) {
                return longStr.substring(0, index) + longStr.substring(index + 1) === shortStr
            }
            index++;
        }
        return true;
    } else {
        let diff = 0;
        for (let i = 0; i < len1; i++) {
            if (first[i] !== second[i]) {
                diff++;
            }
            if (diff > 1) {
                return false;
            }
        }
        return true;
    }
};
