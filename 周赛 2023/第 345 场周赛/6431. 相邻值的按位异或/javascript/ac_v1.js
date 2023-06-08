/**
 * @param {number[]} derived
 * @return {boolean}
 */
var doesValidArrayExist = function(derived) {
    return check(0, derived) || check(1, derived);
};

function check(start, target) {
    const total = target.length;
    const srcArr = new Array(total);

    srcArr[0] = start;
    for (let i = 0; i < total - 1; i++) {
        srcArr[i + 1] = target[i] ^ srcArr[i];
    }

    return target[total - 1] === srcArr[total - 1] ^ srcArr[0];
}
