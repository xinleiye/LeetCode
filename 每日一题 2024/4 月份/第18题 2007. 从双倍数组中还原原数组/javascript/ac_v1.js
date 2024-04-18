/**
 * @param {number[]} changed
 * @return {number[]}
 */
var findOriginalArray = function(changed) {
    const total = changed.length;
    if (total % 2 === 1) {
        return [];
    }

    const numMap = new Map();
    const numArr = [];
    let zero = 0;
    for (const n of changed) {
        if (n !== 0) {
            if (numMap.has(n)) {
                numMap.set(n, numMap.get(n) + 1);
            } else {
                numMap.set(n, 1);
                numArr.push(n);
            }
        } else {
            zero++;
        }
    }
    if (zero % 2 === 1) {
        return [];
    }

    const res = new Array(zero / 2).fill(0);
    numArr.sort((n1, n2) => n1 - n2);
    for (const n of numArr) {
        const c1 = numMap.get(n);
        if (c1 === 0) {
            continue;
        }

        const n2 = n * 2;
        if (!numMap.has(n2)) {
            return [];
        }

        const c2 = numMap.get(n2);
        if (c1 > c2) {
            return [];
        }
        numMap.set(n, 0);
        numMap.set(n2, c2 - c1);
        res.push(...(new Array(c1).fill(n)));
    }

    return res;
};
