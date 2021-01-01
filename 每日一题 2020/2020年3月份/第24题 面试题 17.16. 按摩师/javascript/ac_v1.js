/**
 * @param {number[]} nums
 * @return {number}
 */
var massage = function(nums) {
    let choose = 0;
    let noChoose = 0;

    nums.forEach((val) => {
        let tmp = choose;

        choose = Math.max(noChoose + val, choose);
        noChoose = Math.max(noChoose, tmp);
    });

    return Math.max(noChoose, choose);
};
