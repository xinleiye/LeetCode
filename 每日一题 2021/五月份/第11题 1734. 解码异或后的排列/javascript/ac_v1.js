/**
 * @param {number[]} encoded
 * @return {number[]}
 */
 var decode = function(encoded) {
    const length = encoded.length + 1;
    const res = new Array(encoded.length + 1);
    let total = 0;
    let odd = 0;

    for (let i = 1; i <= length; i++) {
        total ^= i;
    }
    for (let i = 1; i < length - 1; i += 2) {
        odd ^= encoded[i];
    }

    res[0] = total ^ odd;
    for (let i = 0; i < length - 1; i++) {
        res[i + 1] = res[i] ^ encoded[i];
    }

    return res;
};
