/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function(dominoes) {
    let res = 0;
    const getHash = (num1, num2) => 0 | (1 << (num1 - 1)) | (1 << (num2 -1));
    const map = new Map();

    for (const [d1, d2] of dominoes) {
        const hash = getHash(d1, d2);

        map.set(hash, (map.get(hash) || 0) + 1);
    }
    map.forEach(count => {
        res += count * (count - 1) / 2;
    });

    return res;
};
