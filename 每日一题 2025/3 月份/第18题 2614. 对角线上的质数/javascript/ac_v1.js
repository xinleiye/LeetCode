/**
 * @param {number[][]} nums
 * @return {number}
 */
var diagonalPrime = function(nums) {
    const row = nums.length;
    let res = 0;

    for (let i = 0; i < row; i++) {
        if (validNum(nums[i][i])) {
            res = Math.max(res, nums[i][i]);
        }
        if (validNum(nums[i][row - i - 1])) {
            res = Math.max(res, nums[i][row - i - 1]);
        }
    }

    return res;
};

function validNum(num) {
    return num !== 1 && isPrime(num);
}

function isPrime(num) {
    const right = Math.floor(Math.sqrt(num));

    for (let i = 2; i <= right; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}
