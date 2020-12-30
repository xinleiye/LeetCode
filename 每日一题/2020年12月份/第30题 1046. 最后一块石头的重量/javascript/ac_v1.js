/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    while (stones.length > 1) {
        let max;

        stones.sort((val1, val2) => {
            return val1 - val2;
        });
        max = stones.pop();
        if (max !== stones[stones.length - 1]) {
            stones.push(max - stones.pop());
        } else {
            stones.pop();
        }
    }

    return stones.length === 1 ? stones[0] : 0;
};
