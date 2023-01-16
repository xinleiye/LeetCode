/**
 * @param {string} sentence1
 * @param {string} sentence2
 * @return {boolean}
 */
var areSentencesSimilar = function(sentence1, sentence2) {
    let shortStr = sentence1.split(" ");
    let shortLen = shortStr.length;
    let longStr = sentence2.split(" ");
    let longLen = longStr.length;
    if (shortLen > longLen) {
        shortLen = longStr.length;
        longLen = shortStr.length;

        const tmpStr = shortStr;
        shortStr = longStr;
        longStr = tmpStr;
    }

    let sameLen = 0;
    let left = 0;
    let longRight = longStr.length - 1;
    let shortRight = shortStr.length - 1;
    while (left < shortLen && shortStr[left] === longStr[left]) {
        sameLen++;
        left++;
    }
    if (sameLen === shortLen) {
        return true;
    }
    while (shortRight >= left && shortStr[shortRight] === longStr[longRight]) {
        sameLen++;
        shortRight--;
        longRight--;
    }

    return sameLen === shortLen;
};
