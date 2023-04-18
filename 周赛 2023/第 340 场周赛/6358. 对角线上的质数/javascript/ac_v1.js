/**
 * @param {number[][]} nums
 * @return {number}
 */
var diagonalPrime = function(nums) {
    const maxRow = nums.length;
    const validPrime = (num) => {
        for (let i = 2, len = Math.floor(Math.sqrt(num)); i <= len; i++) {
            if (num % i === 0) {
                return false;
            }
        }

        return true;
    };

    let res = 0;
    for (let i = 0; i < maxRow; i++) {
        if (nums[i][i] > 1 && validPrime(nums[i][i])) {
            res = Math.max(res, nums[i][i]);
        }
        if (nums[i][maxRow - i - 1] > 1 && validPrime(nums[i][maxRow - i - 1])) {
            res = Math.max(res, nums[i][maxRow - i - 1]);
        }
    }

    return res;
};
