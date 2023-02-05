/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
    const res = [];
    const parseNum = (num) => {
        const arr = [];
        
        while (num) {
            arr.unshift(num % 10);
            num = Math.floor(num / 10);
        }
        
        return arr;
    };

    for (const num of nums) {
        res.push(...parseNum(num));
    }

    return res;
};
