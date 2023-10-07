/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let pre = 0;
    let cur = 0;

    for (const n of nums) {
        const temp = Math.max(cur, pre + n);

        pre = cur;
        cur = temp;
    }

    return cur;
};
