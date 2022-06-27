/**
 * @param {string[]} strs
 * @return {number}
 */
var findLUSlength = function(strs) {
    let res = -1;
    const subStrMap = new Map();
    const generateSubStr = (str, mask) => {
        const chs = [];
        let index = 0;

        while (mask) {
            if (mask & 1) {
                chs.unshift(str[index]);
            }
            mask = mask >>> 1;
            index++;
        }

        return chs.join("");
    };

    for (const s of strs) {
        const len = Math.pow(2, s.length);

        for (let i = 1; i < len; i++) {
            const subStr = generateSubStr(s, i);

            if (subStrMap.has(subStr)) {
                subStrMap.set(subStr, subStrMap.get(subStr) + 1);
            } else {
                subStrMap.set(subStr, 1);
            }
        }
    }

    subStrMap.forEach((count, str) => {
        if (count === 1) {
            res = Math.max(res, str.length);
        }
    });

    return res;
};
