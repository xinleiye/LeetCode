/**
 * @param {number[]} encoded
 * @return {number[]}
 */
var decode = function(encoded) {
    let base = 0;
    const length = encoded.length;
    const res = new Array(encoded.length + 1);
    const getRes = (start, end) => {
        let numSet = new Set();

        res[length] = end;
        numSet.add(start);
        numSet.add(end);

        for (let i = length - 1; i > 0; i--) {
            res[i] = encoded[i] ^ res[i + 1];
            if (res[i] > length + 1 || res[i] === 0) {
                return false;
            }
            if (numSet.has(res[i])) {
                return false;
            } else {
                numSet.add(res[i]);
            }
        }
        res[0] = encoded[0] ^ res[1];

        return res[0] === start;
    };

    encoded.forEach(val => {
        base = base ^ val;
    });

    for (let i = 1; i <= length + 1; i++) {
        if ((base ^ i) > length + 1 || (base ^ i) === 0) {
            continue;
        }
        if (getRes(i, base ^ i)) {
            return res;
        }
        if (getRes(base ^ i, i)) {
            return res;
        }
    }
};
