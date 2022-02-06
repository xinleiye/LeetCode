/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
    const nums = new Array(4).fill(0);
    
    for (let i = 0; i < 4; i++) {
        nums[i] = num % 10;
        num = Math.floor(num / 10);
    }
    nums.sort((val1, val2) => val1 - val2);

    return (nums[0] + nums[1]) * 10 + nums[2] + nums[3];
};
