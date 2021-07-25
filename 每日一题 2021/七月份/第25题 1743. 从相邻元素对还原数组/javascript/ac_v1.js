/**
 * @param {number[][]} adjacentPairs
 * @return {number[]}
 */
var restoreArray = function(adjacentPairs) {
    let res;
    let index = 0;
    const numMap = new Map();
    const pairsMap = new Map();
    const maxVal = 1e5 + 1;
    
    adjacentPairs.forEach(item => {
        if (numMap.has(item[0])) {
            numMap.set(item[0], 2);
        } else {
            numMap.set(item[0], 1);
        }
        if (numMap.has(item[1])) {
            numMap.set(item[1], 2);
        } else {
            numMap.set(item[1], 1);
        }
        if (pairsMap.has(item[0])) {
            pairsMap.get(item[0]).push(item[1]);
        } else {
            pairsMap.set(item[0], [item[1]]);
        }
        if (pairsMap.has(item[1])) {
            pairsMap.get(item[1]).push(item[0]);
        } else {
            pairsMap.set(item[1], [item[0]]);
        }
    });

    res = new Array(numMap.size).fill(maxVal);
    numMap.forEach((val, key) => {
        if (val === 1) {
            if (res[0] === maxVal) {
                res[0] = key;
            } else {
                res[res.length - 1] = key;
            }
        }
    });

    numMap.delete(res[0]);
    numMap.delete(res[res.length - 1]);

    while (numMap.size) {
        const next = pairsMap.get(res[index]);

        for (let i = 0; i < next.length; i++) {
            if (numMap.has(next[i])) {
                index++;
                res[index] = next[i];
                numMap.delete(next[i]);
            }
        }
    }
    
    return res;
};
