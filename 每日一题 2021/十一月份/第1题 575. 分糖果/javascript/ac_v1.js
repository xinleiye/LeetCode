/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    const candySet = new Set();
    const total = candyType.length;

    candyType.forEach(candy => {
        if (!candySet.has(candy)) {
            candySet.add(candy);
        }
    });

    return candySet.size > total / 2 ? total / 2 : candySet.size;
};
