/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function(n) {
    const parseNum = (num) => {
        let nums = [];

        while (num) {
            nums.unshift(num % 10);
            num = Math.floor(num / 10);
        }

        return nums;
    };
    let res = 0;
    const numArr = parseNum(n);
    let flag = 1;

    for (const num of numArr) {
        res += flag * num;
        flag = 0 - flag;
    }

    return res;
};
