/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
var mergeSimilarItems = function(items1, items2) {
    let res = [];
    const MAX_VALUE = 1001;
    const buff = new Array(MAX_VALUE).fill(0);
    const generateValue = (items, buff) => {
        for (const [v, w] of items) {
            buff[v] += w;
        }
    };

    generateValue(items1, buff);
    generateValue(items2, buff);
    for (let i = 1; i < MAX_VALUE; i++) {
        if (buff[i]) {
            res.push([i, buff[i]]);
        }
    }
    res.sort((i1, i2) => i1[0] - i2[0]);

    return res;
};
