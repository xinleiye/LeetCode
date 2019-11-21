/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSumDivThree = function(nums) {
    let res = 0;
    let preSum = Infinity;
    let rest1 = [];
    let rest2 = [];
    let insert = (tar, num) => {
        if (tar.length === 0) {
            tar[0] = num;
        } else if (tar.length === 1) {
            if (num <= tar[0]) {
                tar[1] = tar[0];
                tar[0] = num;
            } else {
                tar[1] = num;
            }
        } else {
            if (num <= tar[0]) {
                tar[1] = tar[0];
                tar[0] = num;
            } else if (num <= tar[1]) {
                tar[1] = num;
            }
        }
    };
    
    for (let i = 0; i < nums.length; i++) {
        res += nums[i];
        if (nums[i] % 3 === 1) {
            insert(rest1, nums[i]);
        } else if (nums[i]  % 3 === 2) {
            insert(rest2, nums[i]);
        }
    }

    if (res % 3 === 0) {
        return res;
    } else if (res % 3 === 1) {
        if (rest1.length >= 1) {
            preSum = rest1[0];
        }
        if (rest2.length === 2) {
            preSum = Math.min(rest2[0] + rest2[1], preSum);
        }
    } else {
        if (rest1.length === 2) {
            preSum = rest1[0] + rest1[1];
        }
        if (rest2.length >= 1) {
            preSum = Math.min(preSum, rest2[0]);
        }
    }

    return res - preSum;
};
