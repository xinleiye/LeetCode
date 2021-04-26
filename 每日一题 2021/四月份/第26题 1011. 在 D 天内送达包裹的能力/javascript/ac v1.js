/**
 * @param {number[]} weights
 * @param {number} D
 * @return {number}
 */
var shipWithinDays = function(weights, D) {
    let left = 1;
    let right = 0;

    weights.forEach(val => {
        left = Math.max(left, val);
        right += val;
    });

    while (left < right) {
        let days = 1;
        const mid = (left + right) >>> 1;
        let weight = 0;

        weights.forEach(val => {
            weight += val;
            if (weight > mid) {
                days++;
                weight = val;
            }
        });
        if (days <= D) {
            right = mid
        } else {
            left = mid + 1;
        }
    }

    return right;
};
