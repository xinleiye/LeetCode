/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    let res = 0;
    const numArr = new Array(101).fill(0);
    
    nums.forEach(num => {
        numArr[num]++;
    });
    
    numArr.forEach((count, num) => {
        if (count === 1) {
            res += num;
        }
    });
    
    return res;
};
