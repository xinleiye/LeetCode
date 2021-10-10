/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    const res = [];
    const length = s.length;
    const SUBLEN = 10;
    const subStrMap = new Map();

    for (let i = 0; i <= length - SUBLEN; i++) {
        const str = s.slice(i, i + SUBLEN);

        if (subStrMap.has(str)) {
            const count = subStrMap.get(str);

            if (count === 1) {
                res.push(str);
            }
            subStrMap.set(str, count + 1);
        } else {
            subStrMap.set(str, 1);
        }
    }

    return res;
};
