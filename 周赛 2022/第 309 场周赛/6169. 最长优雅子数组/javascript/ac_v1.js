/**
 * @param {number[]} nums
 * @return {number}
 */
var longestNiceSubarray = function(nums) {
    let left = 0;
    let right = 1;
    let res = 1;
    const total = nums.length;
    const bits = new Array(32).fill(0);
    const setBits = (arr, num, op) => {
        let index = 0;
        
        while (num) {
            if (num & 1) {
                arr[index] += op;
            }
            index++;
            num = num >>> 1;
        }
    };
    const isZero = (arr) => {
        for (let i = 0; i < 32; i++) {
            if (arr[i] > 1) {
                return false;
            }
        }
        
        return true;
    };
    setBits(bits, nums[left], 1);
    while (right < total) {
        setBits(bits, nums[right], 1);
        
        let valid = isZero(bits);
        if (!valid) {
            while (left < right && !isZero(bits)) {
                setBits(bits, nums[left], -1);
                left++;
            }
        } else {
            res = Math.max(res, right - left + 1);
        }
        right++;
    }

    return res;
};
