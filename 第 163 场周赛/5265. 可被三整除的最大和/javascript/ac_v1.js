/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSumDivThree = function(nums) {
    let res = 0;
    let preSum = 0;
    let rest = [];
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 3 === 0) {
            res += nums[i];
        } else {
            rest.push(nums[i]);
        }
    }

    for (let i = 0, len = rest.length << 1; i < len; i++) {
        let pos = i;
        let totalSum = 0;

        for (let j = 0; j < rest.length; j++) {
            if (!(i & Math.pow(2, j))) {
                continue;
            }
            totalSum += rest[j];
        }
        if (totalSum % 3 === 0) {
            preSum = Math.max(preSum, totalSum);
        }
    }

    return res + preSum;
};
[366,809,6,792,822,181,210,588,344,618,341,410,121,864,191,749,637,169,123,472,358,908,235,914,322,946,738,754,908,272,267,326,587,267,803,281,586,707,94,627,724,469,568,57,103,984,787,552,14,545,866,494,263,157,479,823,835,100,495,773,729,921,348,871,91,386,183,979,716,806,639,290,612,322,289,910,484,300,195,546,499,213,8,623,490,473,603,721,793,418,551,331,598,670,960,483,154,317,834,352]