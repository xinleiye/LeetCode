/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let res = 0;
    const jewelMap = {};

    for (const ch of jewels) {
        jewelMap[ch] = true;
    }
    for (const ch of stones) {
        if (jewelMap[ch]) {
            res++;
        }
    }

    return res;
};
