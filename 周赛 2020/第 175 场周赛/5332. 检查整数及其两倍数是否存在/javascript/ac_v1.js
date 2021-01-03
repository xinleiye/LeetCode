/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    let length = arr.length;

    for (let i = 0; i < length; i++) {
        let target = arr[i] * 2;

        for (let j = 0; j < length; j++) {
            if (arr[j] === target && j !== i) {
                return true;
            }
        }
    }

    return false;
};
