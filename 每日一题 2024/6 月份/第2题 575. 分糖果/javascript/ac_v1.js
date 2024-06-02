/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    const candySet = new Set();
    const total = candyType.length;

    for (const c of candyType) {
        candySet.add(c);
    }

    return candySet.size >= total / 2 ? total / 2 : candySet.size;
};
