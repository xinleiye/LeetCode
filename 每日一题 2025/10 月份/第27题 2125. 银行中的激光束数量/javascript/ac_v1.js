/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function(bank) {
    let res = 0;
    let pre = 0;

    for (const b of bank) {
        const cur = oneCount(b);

        res += pre * cur;
        if (cur > 0) {
            pre = cur;
        }
    }

    return res;
};

function oneCount(str) {
    let count = 0;

    for (const s of str) {
        if (s === "1") {
            count++;
        }
    }

    return count;
}
