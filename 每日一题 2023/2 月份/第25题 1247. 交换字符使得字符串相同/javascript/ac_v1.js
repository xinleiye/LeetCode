/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumSwap = function(s1, s2) {
    const s1DiffInfo = {
        x: 0,
        y: 0
    };
    let diffCounts = 0;
    const total = s1.length;

    for (let i = 0; i < total; i++) {
        if (s1[i] !== s2[i]) {
            s1DiffInfo[s1[i]]++;
            diffCounts++;
        }
    }
    if (diffCounts === 0) {
        return 0;
    }
    if (diffCounts % 2) {
        return -1;
    }

    return diffCounts / 2 + s1DiffInfo.x % 2;
};
