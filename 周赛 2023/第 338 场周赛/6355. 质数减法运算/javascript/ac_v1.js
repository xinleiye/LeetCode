/**
 * @param {number[]} nums
 * @return {boolean}
 */
var primeSubOperation = function(nums) {
    const validPrime = (n) => {
        if (n === 1) {
            return false;
        }
        if (n === 2) {
            return true;
        }
        for (let i = 2, len = Math.floor(Math.sqrt(n)); i <= len; i++) {
            if ((n % i) === 0) {
                return false;
            }
        }
        return true;
    };
    const total = nums.length;

    for (let i = total - 1; i > 0; i--) {
        if (nums[i - 1] >= nums[i]) {
            for (let j = nums[i - 1] - nums[i] + 1; j < nums[i - 1]; j++) {
                if (validPrime(j)) {
                    nums[i - 1] -= j;
                    break;
                }
            }
        }
    }
    for (let i = 1; i < total; i++) {
        if (nums[i] <= nums[i - 1]) {
            return false;
        }
    }

    return true;
};
