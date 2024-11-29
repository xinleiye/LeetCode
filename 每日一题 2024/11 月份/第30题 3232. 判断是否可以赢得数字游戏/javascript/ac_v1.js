/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canAliceWin = function(nums) {
    let one = 0;
    let sum = 0;

    for (const n of nums) {
        if (n < 10) {
            one += n;
        }
        sum += n;
    }

    return one !== sum / 2;
};
