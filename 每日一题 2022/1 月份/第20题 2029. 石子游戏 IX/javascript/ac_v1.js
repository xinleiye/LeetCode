/**
 * @param {number[]} stones
 * @return {boolean}
 */
var stoneGameIX = function(stones) {
    let count0 = 0;
    let count1 = 0;
    let count2 = 0;

    stones.forEach(stone => {
        const rest = stone % 3;

        if (rest === 0) {
            count0++;
        } else if (rest === 1) {
            count1++;
        } else {
            count2++;
        }
    });

    if (count0 % 2 === 0) {
        return count1 >= 1 && count2 >= 1;
    }

    return count1 - count2 > 2 || count2 - count1 > 2;
};
