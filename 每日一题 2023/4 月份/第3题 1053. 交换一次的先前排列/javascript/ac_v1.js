/**
 * @param {number[]} arr
 * @return {number[]}
 */
var prevPermOpt1 = function(arr) {
    const length = arr.length;
    for (let i = length - 2; i >= 0; i--) {
        if (arr[i] > arr[i + 1]) {
            let j = length - 1;
            while (arr[j] >= arr[i] || arr[j] === arr[j - 1]) {
                j--;
            }

            let tmp = arr[i];
            arr[i] = arr[j];
            arr[j] = tmp;
            break;
        }
    }

    return arr;
};
