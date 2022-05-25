/**
 * @param {number[]} candidates
 * @return {number}
 */
var largestCombination = function(candidates) {
    const bitMap = new Map();
    const total = candidates.length;

    for (let i = 0; i < total; i++) {
        let index = 0;
        let num = candidates[i];
        while (num) {
            if (num & 1) {
                if (bitMap.has(index)) {
                    bitMap.get(index).push(i);
                } else {
                    bitMap.set(index, [i]);
                }
            }
            num = num >>> 1;
            index++;
        }
    }

    let res = 0;
    bitMap.forEach((val, key) => {
        res = Math.max(res, val.length);
    });
    
    return res;
};
