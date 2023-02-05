/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let res = 0;
    const calcNumSum = (num) => {
        let sum = 0;

        while (num) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }

        return sum;
    };

    for (const n of nums) {
        res += n - calcNumSum(n);
    }

    return Math.abs(res);
};
