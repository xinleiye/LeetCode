/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    let max = 1;
    let min = 1000;
    
    nums.forEach(val => {
        max = Math.max(val, max);
        min = Math.min(val, min);
    });

    return gcd(max, min);
};

function gcd (num1, num2) {
    let num;

    while (num2 > 0) {
        num = num1 % num2;
        num1 = num2;
        num2 = num;
    }

    return num1;
}
