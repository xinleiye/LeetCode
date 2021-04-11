/**
 * @param {number[]} nums
 * @return {number}
 */
 var arraySign = function(nums) {
    let numCount = new Array(3).fill(0);
    
    nums.forEach(num => {
        if (num > 0) {
            numCount[0]++;
        } else if (num < 0) {
            numCount[1]++;
        } else {
            numCount[2]++;
        }
    });
    
    if (numCount[2]) {
        return 0;
    } else if (numCount[1] % 2) {
        return -1;
    } else {
        return 1;
    }
};
