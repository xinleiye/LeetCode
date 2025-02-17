/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
    let count = 1;
    const totalNum = arr.length;

    for (let i = 1; i < totalNum; i++) {
        if (arr[i] === arr[i - 1]) {
            count++;
            if (count * 4 > totalNum) {
                return arr[i - 1];
            }
        } else {
            count = 1;
        }
    }

    return arr[0];
};
