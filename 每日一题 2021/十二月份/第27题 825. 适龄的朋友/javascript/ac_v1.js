/**
 * @param {number[]} ages
 * @return {number}
 */
var numFriendRequests = function(ages) {
    let res = 0;
    const count = new Array(121).fill(0);
    const preCountSum = new Array(121).fill(0);

    for (const age of ages) {
        count[age]++;
    }
    for (let i = 1; i < 121; i++) {
        preCountSum[i] = preCountSum[i - 1] + count[i];
    }
    for (let i = 15; i < 121; i++) {
        if (count[i] > 0) {
            res += count[i] * (preCountSum[i] - preCountSum[Math.floor(i * 0.5 + 8) - 1] - 1);
        }
    }

    return res;
};
