/**
 * @param {number[]} answers
 * @return {number}
 */
var numRabbits = function(answers) {
    const countMap = new Map();
    let res = 0;

    for (const n of answers) {
        if (countMap.has(n)) {
            countMap.set(n, countMap.get(n) + 1);
        } else {
            countMap.set(n, 1);
        }
    }
    countMap.forEach((val, key) => {
        res += Math.ceil(val / (key + 1)) * (key + 1);
    });

    return res;
};
