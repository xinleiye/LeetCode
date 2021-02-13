/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const res = [];
    const length = nums.length;
    let buff = new Array(length + 1).fill(0);

    nums.forEach(val => {
        buff[val]++;
    });

    for (let i = 1; i <= length; i++) {
        if (buff[i] === 0) {
            res.push(i);
        }
    }

    return res;
};
