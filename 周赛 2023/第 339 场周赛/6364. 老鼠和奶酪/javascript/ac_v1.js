/**
 * @param {number[]} reward1
 * @param {number[]} reward2
 * @param {number} k
 * @return {number}
 */
var miceAndCheese = function(reward1, reward2, k) {
    const total = reward1.length;
    const diff = new Array();
    for (let i = 0; i < total; i++) {
        diff[i] = reward1[i] - reward2[i];
    }

    const diffIndex = new Array(total).fill(0).map((_, index) => index);
    diffIndex.sort((d1, d2) => diff[d2] - diff[d1]);

    let res = 0;
    for (let i = 0; i < total; i++) {
        if (i < k) {
            res += reward1[diffIndex[i]];
        } else {
            res += reward2[diffIndex[i]];
        }
    }

    return res;
};
