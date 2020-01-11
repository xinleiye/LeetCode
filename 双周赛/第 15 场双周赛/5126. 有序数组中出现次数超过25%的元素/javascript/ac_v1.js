/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
    let num = 1;
    let totalNum = arr.length;

    for (let i = 1; i < totalNum; i++) {
        if (arr[i] === arr[i - 1]) {
            num++;
            if (num * 4 > totalNum) {
                return arr[i - 1];
            }
        } else {
            num = 1;
        }
    }
    return arr[0];
};
