/**
 * @param {number[]} nums
 * @return {number}
 */
var sumFourDivisors = function(nums) {
    let sum = 0;

    for (const n of nums) {
        const factor = getFactors(n);

        if (factor.length === 4) {
            sum += factor.reduce((s, p) => s + p);
        }
    }

    return sum;
};

function getFactors(num) {
    const factors = [];
    const max = Math.floor(Math.sqrt(num));

    for (let i = 1; i <= max; i++) {
        if (num % i === 0) {
            factors.push(i);
            if (i !== num / i) {
                factors.push(num / i);
            }
        }
    }

    return factors;
}
