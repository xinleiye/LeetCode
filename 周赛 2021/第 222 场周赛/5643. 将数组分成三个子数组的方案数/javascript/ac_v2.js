/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplit = function(nums) {
    let res = 0;
    const mod = 1e9 + 7;
    const total = nums.length;
    const numSum = new Array(total);
    const getMidRight = (arr, left, right, target) => {
        while (left <= right) {
            let mid = (left + right) >>> 1;

            if (arr[arr.length - 1] - arr[mid] < arr[mid] - target) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        return left;
    };
    const getMidLeft = (arr, left, right, target) => {
        while (left <= right) {
            let mid = (left + right) >>> 1;

            if (arr[mid] - target < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return left;
    };

    numSum[0] = nums[0];
    for (let i = 1; i < total; i++) {
        numSum[i] = numSum[i - 1] + nums[i];
    }

    for (let i = 0; i < total; i++) {
        if (numSum[i] * 3 > numSum[total - 1]) {
            break;
        }

        res = (res + getMidRight(numSum, i + 1, total - 2, numSum[i]) - getMidLeft(numSum, i + 1, total - 2, numSum[i])) % mod;
    }

    return res;
};
