/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canSortArray = function(nums) {
    let preCount = 0;
    let preMax = 0;
    let curMax = 0;

    for (const n of nums) {
        const curCount = bits(n);

        if (curCount === preCount) {
            curMax = Math.max(curMax, n);
        } else {
            preCount = curCount;
            preMax = curMax;
            curMax = n;
        }
        if (n < preMax) {
            return false;
        }
    }

    return true;
};

function bits(num) {
    let count = 0;

    while (num) {
        if (num & 1) {
            count++;
        }
        num = num >>> 1;
    }

    return count;
}
