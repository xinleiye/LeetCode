/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let money = new Array(nums.length + 2).fill(0);

    nums.forEach((val, index) => {
        money[index + 2] = Math.max(money[index + 1], money[index] + val);
    });

    return money[money.length - 1];
};
