/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
    let res = 0;
    const nums = [];
    const parseNum = (num, arr) => {
        while (num) {
            arr.push(num % 10);
            num = Math.floor(num / 10);
        }
    };

    parseNum(num, nums);
    for (const n of nums) {
        if (num % n === 0) {
            res++;
        }
    }

    return res;
};
