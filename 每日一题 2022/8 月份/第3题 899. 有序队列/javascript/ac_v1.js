/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var orderlyQueue = function(s, k) {
    const length = s.length;

    if (k === 1) {
        let res = s;
        const s2 = s.repeat(2);

        for (let i = 0; i < length; i++) {
            const subStr = s2.substr(i, length);

            if (subStr < res) {
                res = subStr;
            }
        }

        return res;
    } else {
        const charArr = s.split("");

        charArr.sort();

        return charArr.join("");
    }
};
