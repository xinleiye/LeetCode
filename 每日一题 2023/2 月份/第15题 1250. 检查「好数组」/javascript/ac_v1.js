/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isGoodArray = function(nums) {
    let divisor = nums[0];

    for (const n of nums) {
        divisor = gcd(divisor, n);
        if (divisor === 1) {
            return true;
        }
    }

    return false;
};

function gcd (num1, num2) {
    let tmpNum;

    while (num2) {
        tmpNum = num1 % num2;
        num1 = num2;
        num2 = tmpNum;
    }

    return num1;
}
