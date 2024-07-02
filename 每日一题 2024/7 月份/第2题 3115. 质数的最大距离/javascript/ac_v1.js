/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumPrimeDifference = function(nums) {
    const total = nums.length;
    let left = 0;
    while (left < total && !isPrime(nums[left])) {
        left++;
    }

    let right = total - 1;
    while (right >= left && !isPrime(nums[right])) {
        right--;
    }

    return right - left;
};

function isPrime(num) {
    if (num === 1) {
        return false;
    }

    const max = Math.floor(Math.sqrt(num));
    for (let i = 2; i <= max; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}
