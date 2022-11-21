/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    let zero = 0;
    let negative = 0;

    for (const n of nums) {
        if (n < 0) {
            negative++;
        } else if (n === 0){
            zero++;
        }
    }

    if (zero > 0) {
        return 0;
    } else if (negative % 2) {
        return -1;
    } else {
        return 1;
    }
};
