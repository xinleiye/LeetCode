/**
 * @param {string} ring
 * @param {string} key
 * @return {number}
 */
var findRotateSteps = function(ring, key) {
    let res = Number.MAX_SAFE_INTEGER;
    let steps = new Array(key.length);
    let charMap = new Map();

    for (let i = 0; i < key.length; i++) {
        steps[i] = new Array(ring.length).fill(Number.MAX_SAFE_INTEGER);
    }

    for (let i = 0; i < ring.length; i++) {
        if (charMap.has(ring[i])) {
            charMap.get(ring[i]).push(i);
        } else {
            charMap.set(ring[i], [i]);
        }
    }

    for (let item of charMap.get(key[0])) {
        steps[0][item] = Math.min(item, ring.length - item) + 1;
    }

    for (let i = 1; i < key.length; i++) {
        for (let index of charMap.get(key[i])) {
            for (let preIndex of charMap.get(key[i - 1])) {
                steps[i][index] = Math.min(steps[i][index], steps[i - 1][preIndex] + Math.min(Math.abs(index - preIndex), ring.length - Math.abs(index - preIndex)) + 1);
            }
        }
    }

    for (let item of steps[key.length - 1]) {
        res = Math.min(res, item);
    }

    return res;
};
