/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubsequence = function(s, k) {
    let res = 0;
    const length = s.length;
    const bits = s.split("");
    const oneIndex = [];
    for (let i = 0; i < length; i++) {
        if (bits[i] === "1") {
            oneIndex.push(i);
        }
    }

    let index = 0;
    const choiced = new Array(s.length).fill(false);
    const generateNum = (bitArr, bits, right) => {
        const bit = [];

        for (let i = 0; i <= right; i++) {
            if (bitArr[i]) {
                bit.push(bits[i]);
            }
        }

        return {
            num: parseInt(bit.join(""), 2),
            len: bit.length
        };
    };
    while (index < length) {
        choiced[index] = true;

        let {num, len} = generateNum(choiced, bits, index);
        if (num <= k) {
            res = Math.max(res, len);
        } else {
            while (oneIndex[0] <= index && num > k) {
                choiced[oneIndex.shift()] = false;
                num = generateNum(choiced, bits, index).num;
            }
        }
        index++;
    }

    return res;
};
