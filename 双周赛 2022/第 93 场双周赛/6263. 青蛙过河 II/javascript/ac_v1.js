/**
 * @param {number[]} stones
 * @return {number}
 */
var maxJump = function(stones) {
    let res = stones[1] - stones[0];
    const length = stones.length;

    for (let i = 2; i < length; i++) {
        res = Math.max(res, stones[i] - stones[i - 2]);
    }

    return res;
};
