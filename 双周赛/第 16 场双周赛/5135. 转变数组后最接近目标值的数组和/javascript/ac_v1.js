/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var findBestValue = function(arr, target) {
    let res = target;
    let left = 0;
    let right = target;
    let diff = Infinity;
    let getSum = (aArr, aVal) => {
        let sum = 0;

        for (let i = 0, len = arr.length; i < len; i++) {
            sum = sum + Math.min(aArr[i], aVal);
        }

        return sum;
    };

    while (left < right) {
        let mid = (left + right ) >>> 1;
        let sum = getSum(arr, mid);

        if (Math.abs(sum - target) < diff) {
            res = mid;
            diff = Math.abs(sum - target);
        } else if (Math.abs(sum - target) === diff) {
            res = Math.min(res, mid);
        }
        if (sum > target) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return res;
};
