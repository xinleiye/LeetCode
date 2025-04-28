/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function(n) {
    let res = 0;
    const sumMap = new Map();
    let maxCount = 0;

    for (let i = 1; i <= n; i++) {
        const sum = generateSum(i);

        if (!sumMap.has(sum)) {
            sumMap.set(sum, []);
        }
        sumMap.get(sum).push(i);
    }
    sumMap.forEach(nums => {
        if (nums.length > maxCount) {
            res = 1;
            maxCount = nums.length;
        } else if (nums.length === maxCount) {
            res++;
        }
    })

    return res;
};

function generateSum(num) {
    let sum = 0;

    while (num) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }

    return sum;
}
