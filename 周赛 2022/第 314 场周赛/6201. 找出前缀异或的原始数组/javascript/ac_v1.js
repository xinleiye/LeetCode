/**
 * @param {number[]} pref
 * @return {number[]}
 */
var findArray = function(pref) {
    const total = pref.length;
    let xorSum = 0;
    const res = new Array(pref.length);

    for (let i = 0; i < total; i++) {
        res[i] = xorSum ^ pref[i];
        xorSum ^= res[i];
    }

    return res;
};
