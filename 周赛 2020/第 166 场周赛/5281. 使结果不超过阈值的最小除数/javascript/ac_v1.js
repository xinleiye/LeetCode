/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var smallestDivisor = function(nums, threshold) {
    let mid = 0;
    let left = 0;
    let right = 0;

    nums.forEach((val) => {
        right = right > val ? right : val;
    });

    left = 1;
    while (left < right) {
        let sum = 0;
        mid = (left + right) >>> 1;
        nums.forEach((val) => {
            sum += Math.ceil(val / mid);
        });
        if (sum <= threshold) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
};
