/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    let res = [];
    let num1 = 0;
    let num2 = 0;
    let vote1 = 0;
    let vote2 = 0;
    let count1 = 0;
    let count2 = 0;

    nums.forEach(num => {
        if (vote1 > 0 && num === num1) {
            vote1++;
        } else if (vote2 > 0 && num === num2) {
            vote2++;
        } else if (vote1 === 0) {
            num1 = num;
            vote1++;
        } else if (vote2 === 0) {
            num2 = num;
            vote2++;
        } else {
            vote1--;
            vote2--;
        }
    });

    nums.forEach(num => {
        if (vote1 > 0 && num === num1) {
            count1++;
        } else if (vote2 > 0 && num === num2) {
            count2++;
        }
    });
    if (vote1 > 0 && (count1 > Math.floor(nums.length / 3))) {
        res.push(num1);
    }
    if (vote2 > 0 && (count2 > Math.floor(nums.length / 3))) {
        res.push(num2);
    }

    return res;
};
