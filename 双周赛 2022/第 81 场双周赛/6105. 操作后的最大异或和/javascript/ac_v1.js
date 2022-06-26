/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumXOR = function(nums) {
    let res = 0;
    
    for (let n of nums) {
        let index = 0;
        
        while (n) {
            if (n & 1) {
                res |= (n << index);
            }
            n = n >>> 1;
            index++;
        }
    }
    
    return res;
};
