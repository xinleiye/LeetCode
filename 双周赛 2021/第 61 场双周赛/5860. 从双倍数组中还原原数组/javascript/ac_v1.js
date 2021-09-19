/**
 * @param {number[]} changed
 * @return {number[]}
 */
var findOriginalArray = function(changed) {
    const res = [];
    const numMap = new Map();
    const length = changed.length;
    const delNumFromMap = (numMap, num) => {
        if (numMap.has(num)) {
            let count;

            count = numMap.get(num);
            if (count === 1) {
                numMap.delete(num);
            } else {
                numMap.set(num, count - 1);
            }
        }
    };

    if (length % 2) {
        return [];
    }
    changed.forEach(val => {
        if (numMap.has(val)) {
            numMap.set(val, numMap.get(val) + 1);
        } else {
            numMap.set(val, 1);
        }
    });
    changed.sort((val1, val2) => {
        return val1 - val2;
    });

    for (let i = 0; i < length; i++) {
        const val = changed[i];
        const dv = val * 2;

        if (numMap.has(val)) {
            delNumFromMap(numMap, val);
            if (numMap.has(dv)) {
                res.push(val);
                delNumFromMap(numMap, dv);
            }
        }
    }

    return res.length === length / 2 ? res : [];
};
