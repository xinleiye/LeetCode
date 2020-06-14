/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var findBestValue = function(arr, target) {
    let res = 0;
    let left = 0;
    let right = 0;
    // 累加和数组
    let sumArr = new Array(arr.length + 1).fill(0);
    // 获取大于 aVal 的第一个元素的下标
    let getIndex = (aArr, aVal) => {
        let left = 0;
        let right = aArr.length - 1;

        while (left <= right) {
            let mid = (left + right) >>> 1;

            if (aArr[mid] < aVal) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return left;
    };
    let getSum = (aArr, aVal) => {
        let sum = 0;

        for (let i = 0, len = aArr.length; i < len; i++) {
            sum = sum + Math.min(aArr[i], aVal);
        }

        return sum;
    };

    arr.sort((val1, val2) => {
        return val1 - val2;
    });

    right = arr[arr.length - 1];

    for (let i = 1; i <= arr.length; i++) {
        sumArr[i] = arr[i - 1] + sumArr[i - 1];
    }

    while (left <= right) {
        let sum = sumArr[sumArr.length];
        let mid = (left + right ) >>> 1;
        let index = getIndex(arr, mid);

        sum = sumArr[index] + (arr.length - index) * mid;

        if (sum <= target) {
            res = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return Math.abs(getSum(arr, res) - target) <= Math.abs(getSum(arr, res + 1) - target) ? res : res + 1;
};