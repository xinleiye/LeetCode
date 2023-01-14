/**
 * @param {number[]} nums
 * @return {number}
 */
var countDifferentSubsequenceGCDs = function(nums) {
    let res = 0;
    const maxVal = _.max(nums);
    const numArray = new Array(maxVal + 1).fill(false);

    for (const n of nums) {
        numArray[n] = true;
    }
    for (let i = 1; i <= maxVal; i++) {
        let curGcd = 0;

        for (let j = i; j <= maxVal; j += i) {
            if (numArray[j]) {
                if (curGcd) {
                    curGcd = gcd(curGcd, j);
                } else {
                    curGcd = j;
                }
            }
            if (curGcd === i) {
                res++;
                break;
            }
        }
    }

    return res;
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
