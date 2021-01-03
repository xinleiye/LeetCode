/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplit = function(nums) {
    let res = 0;
    const mod = 1e9 + 7;
    const total = nums.length;
    const numSum = new Array(total);
    let leftIndex = 0;

    numSum[0] = nums[0];
    for (let i = 1; i < total; i++) {
        numSum[i] = numSum[i - 1] + nums[i];
    }

    while (leftIndex < total - 2) {
        if (numSum[leftIndex] > Math.floor(numSum[total - 1] / 3)) {
            break;
        }
        let midIndexL = leftIndex + 1;
        let midIndexR = total - 2;
        let maxSum = Math.floor((numSum[total - 1] - numSum[leftIndex]) / 2);

        while (midIndexL < total - 2 && (numSum[midIndexL] - numSum[leftIndex]) < numSum[leftIndex]) {
            midIndexL++;
        }

        while (midIndexR >= midIndexL &&(numSum[midIndexR] - numSum[leftIndex]) > maxSum) {
            midIndexR--;
        }

        res = (res + midIndexR - midIndexL + 1) % mod;
        leftIndex++;
    }

    return res;
};
