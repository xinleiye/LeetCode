/**
 * @param {number} n
 * @return {string[]}
 */
var validStrings = function(n) {
    const res = [];
    const max = 1 << n;
    const mask = max - 1;

    for (let i = 0; i < max; i++) {
        if (((i >>> 1) & i) === 0) {
            res.push(number2String(i ^ mask, n));
        }
    }

    return res;
};

function number2String(num, length) {
    const str = new Array(length).fill(0);
    let pos = length - 1;

    while (num) {
        if (num & 1) {
            str[pos] = 1;
        }
        num = num >>> 1;
        pos--;
    }

    return str.join("");
}
