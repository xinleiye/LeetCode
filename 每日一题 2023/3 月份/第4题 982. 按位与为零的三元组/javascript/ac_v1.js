/**
 * @param {number[]} nums
 * @return {number}
 */
var countTriplets = function(nums) {
    const andMap = new Map();
    let res = 0;

    for (const n1 of nums) {
        for (const n2 of nums) {
            const and = n1 & n2;

            if (andMap.has(and)) {
                andMap.set(and, andMap.get(and) + 1);
            } else {
                andMap.set(and, 1);
            }
        }
    }
    andMap.forEach((count, and) => {
        for (const n of nums) {
            if ((and & n) === 0) {
                res += count;
            }
        }
    });

    return res;
};
