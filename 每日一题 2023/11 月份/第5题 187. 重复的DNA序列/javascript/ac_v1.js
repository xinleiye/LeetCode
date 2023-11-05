/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    const subSeq = 10;
    const total = s.length;
    if (total <= subSeq) {
        return [];
    }

    const charMap = {
        A: 0,
        C: 1,
        G: 2,
        T: 3
    };
    let num = 0;
    for (let i = 0; i < subSeq - 1; i++) {
        num = (num << 2) | charMap[s[i]];
    }

    const res = [];
    const seqMap = new Map();
    const mask = (1 << (subSeq * 2)) - 1;
    for (let i = subSeq - 1; i < total; i++) {
        num = ((num << 2) | charMap[s[i]]) & mask;

        const count = seqMap.has(num) ? seqMap.get(num) + 1 : 1;
        seqMap.set(num, count);
        if (count === 2) {
            res.push(s.substring(i - subSeq + 1, i + 1));
        }
    }

    return res;
};
