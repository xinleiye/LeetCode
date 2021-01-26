/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function(dominoes) {
    let res = 0;
    let dominoMap = new Map();
    const getHashVal = (val1, val2) => {
        return 0 | (1 << (val1 - 1)) | (1 << (val2 -1));
    };

    dominoes.forEach(item => {
        const hash = getHashVal(item[0], item[1]);
        
        if (dominoMap.has(hash)) {
            dominoMap.set(hash, dominoMap.get(hash) + 1);
        } else {
            dominoMap.set(hash, 1);
        }
    });

    dominoMap.forEach(val => {
        res += val * (val - 1) / 2;
    });

    return res;
};
