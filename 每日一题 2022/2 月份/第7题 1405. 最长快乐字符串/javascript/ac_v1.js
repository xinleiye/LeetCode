/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
var longestDiverseString = function(a, b, c) {
    const res = [];
    const charArr = [{ ch: "a", count: a}, { ch: "b", count: b }, {ch: "c", count: c}];

    while (true) {
        let hasNext = false;

        charArr.sort((item1, item2) => item2.count - item1.count);
        for (const item of charArr) {
            const length = res.length;

            if (item.count <= 0) {
                break;
            }
            if (length >= 2 && item.ch === res[length - 2] && item.ch === res[length - 1]) {
                continue;
            }
            hasNext = true;
            res.push(item.ch);
            item.count--;
            break;
        }
        if (!hasNext) {
            break;
        }
    }

    return res.join("");
};
