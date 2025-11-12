/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    const total = nums.length;
    let one = 0;
    let gcdAll = 0;
    for (const n of nums) {
        if (n === 1) {
            one++;
        }
        gcdAll = gcd(gcdAll, n);
    }
    if (one) {
        return total - one;
    }
    if (gcdAll > 1) {
        return -1;
    }

    let minLen = total;
    for (let i = 0; i < total; i++) {
        let curGcd = 0;
        for (let j = i; j < total; j++) {
            curGcd = gcd(curGcd, nums[j]);
            if (curGcd === 1) {
                minLen = Math.min(minLen, j - i + 1);
                break;
            }
        }
    }

    return minLen + total - 2;
};

function gcd(num1, num2) {
    while (num2) {
        const temp = num2;

        num2 = num1 % num2;
        num1 = temp;
    }

    return num1;
}
