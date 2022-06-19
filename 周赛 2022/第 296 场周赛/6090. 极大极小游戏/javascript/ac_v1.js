/**
 * @param {number[]} nums
 * @return {number}
 */
var minMaxGame = function(nums) {
    let numArr = nums;
    
    while (numArr.length > 1) {
        const total = numArr.length / 2;
        const tempArr = new Array(numArr.length / 2);
        
        for (let i = 0; i < total; i++) {
            if (i % 2) {
                tempArr[i] = Math.max(numArr[i * 2], numArr[i * 2 + 1]);
            } else {
                tempArr[i] = Math.min(numArr[i * 2], numArr[i * 2 + 1]);
            }
        }
        
        numArr = tempArr;
    }
    
    return numArr[0];
};
