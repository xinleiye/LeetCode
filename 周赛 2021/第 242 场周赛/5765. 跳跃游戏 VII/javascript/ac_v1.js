/**
 * @param {string} s
 * @param {number} minJump
 * @param {number} maxJump
 * @return {boolean}
 */
var canReach = function(s, minJump, maxJump) {
    const length = s.length;
    const posMap = new Map();

    if (s[length - 1] === "1") {
        return false;
    }

    for (let i = 0; i < length; i++) {
        if (s[i] === "0") {
            posMap.set(i, []);
        }
    }
    posMap.get(0).push(0);
    for (let i = 0; i < length; i++) {
        if (s[i] === "1" || posMap.get(i).length === 0) {
            continue;
        }
        for (let j = i + minJump, len = Math.min(i + maxJump, length - 1); j <= len; j++) {
            if (s[j] === "0") {
                posMap.get(j).push(i);
            }
        }
    }

    return posMap.get(length - 1).length > 0;
};
