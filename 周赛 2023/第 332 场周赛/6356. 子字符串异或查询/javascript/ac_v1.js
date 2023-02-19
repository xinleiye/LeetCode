/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[][]}
 */
var substringXorQueries = function(s, queries) {
    const res = [];
    const numMap = new Map();
    const length = s.length;

    for (let i = 0; i < length; i++) {
        let num = 0;

        for (let j = i, len = Math.min(i + 30, length); j < len; j++) {
            num = (num << 1) | Number(s[j]);
            if (!numMap.has(num)) {
                numMap.set(num, [i, j]);
            } else {
                const [l, r] = numMap.get(num);

                if (r - l > j - i) {
                    numMap.set(num, [i, j]);
                }
            }
        }
    }
    for (const [first, second] of queries) {
        const target = first ^ second;

        if (numMap.has(target)) {
            res.push(numMap.get(target));
        } else {
            res.push([-1, -1]);
        }
    }

    return res;
};
