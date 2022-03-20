/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
    const numCount = new Array(501).fill(0);

    nums.forEach(n => {
        numCount[n]++;
    });
    for (let i = 1; i <= 500; i++) {
        if (numCount[i] % 2) {
            return false;
        }
    }
    
    return true;
};
