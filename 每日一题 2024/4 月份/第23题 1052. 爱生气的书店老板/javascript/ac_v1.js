/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */
var maxSatisfied = function(customers, grumpy, minutes) {
    const totalTime = customers.length;
    let base = 0;
    for (let i = 0; i < totalTime; i++) {
        if (grumpy[i] === 0) {
            base += customers[i];
        }
    }

    let res = base;
    let left = 0;
    let right = 0;
    let diff = 0;
    while (right < minutes) {
        diff += grumpy[right] === 1 ? customers[right] : 0;
        right++;
    }
    res = Math.max(res, base + diff);
    while (right < totalTime) {
        diff -= grumpy[left] === 1 ? customers[left] : 0;
        diff += grumpy[right] === 1 ? customers[right] : 0;
        left++;
        right++;
        res = Math.max(res, base + diff);
    }

    return res;
};
