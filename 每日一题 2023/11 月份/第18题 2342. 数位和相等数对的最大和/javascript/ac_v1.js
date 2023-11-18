/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumSum = function(nums) {
    const calcNumSum = (num) => {
        let sum = 0;

        while (num) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }

        return sum;
    };
    const sumMap = new Map();
    let res = -1;

    for (const n of nums) {
        const sum = calcNumSum(n);

        if (sumMap.has(sum)) {
            sumMap.get(sum).push(n);
        } else {
            sumMap.set(sum, [n]);
        }
    }
    sumMap.forEach(nums => {
        if (nums.length > 1) {
            nums.sort((n1, n2) => n2 - n1);
            res = Math.max(res, nums[0] + nums[1]);
        }
    });

    return res;
};
