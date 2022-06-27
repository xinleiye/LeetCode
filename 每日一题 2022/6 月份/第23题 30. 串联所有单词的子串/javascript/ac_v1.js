/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    const res = [];
    const sLen = s.length;
    const wsLen = words.length;
    const wLen = words[0].length;

    for (let i = 0; i < wLen; i++) {
        if (i + wsLen * wLen > sLen) {
            break;
        }

        const diffMap = new Map();
        for (let j = 0; j < wsLen; j++) {
            const w = s.substr(i + j * wLen, wLen);

            if (diffMap.has(w)) {
                diffMap.set(w, diffMap.get(w) + 1);
            } else {
                diffMap.set(w, 1);
            }
        }
        for (const w of words) {
            const count = diffMap.get(w) || 0;

            if (count !== 1) {
                diffMap.set(w, count - 1);
            } else {
                diffMap.delete(w);
            }
        }

        if (diffMap.size === 0) {
            res.push(i);
        }
        for (let index = i + wLen, len = sLen - wsLen * wLen + 1; index < len; index += wLen) {
            let w = s.substr(index + (wsLen - 1) * wLen, wLen);
            let count = diffMap.get(w) || 0;

            if (count !== -1) {
                diffMap.set(w, count + 1);
            } else {
                diffMap.delete(w);
            }

            w = s.substr(index - wLen, wLen);
            count = diffMap.get(w) || 0;
            if (count !== 1) {
                diffMap.set(w, count - 1);
            } else {
                diffMap.delete(w);
            }
            if (diffMap.size === 0) {
                res.push(index);
            }
        }

    }

    return res;
};
