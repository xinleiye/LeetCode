/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let sum1 = 0;
    let sum2 = 0;

    for (const n of nums) {
        sum1 += n;
        sum2 += numSum(n);
    }

    return Math.abs(sum1 - sum2);
};

function numSum(num) {
    let sum = 0;

    while (num) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }

    return sum;
}
