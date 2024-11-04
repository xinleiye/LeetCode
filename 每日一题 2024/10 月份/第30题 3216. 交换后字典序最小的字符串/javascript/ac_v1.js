/**
 * @param {string} s
 * @return {string}
 */
var getSmallestString = function(s) {
    const total = s.length;
    const numArr = s.split("").map(n => Number(n));

    for (let i = 1; i < total; i++) {
        if ((numArr[i] % 2 === numArr[i - 1] % 2) && (numArr[i - 1] > numArr[i])) {
            const num = numArr[i];
            
            numArr[i] = numArr[i - 1];
            numArr[i - 1] = num;
            break;
        }
    }

    return numArr.join("");
};
