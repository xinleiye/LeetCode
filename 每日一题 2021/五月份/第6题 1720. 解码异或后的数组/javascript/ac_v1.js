/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function(encoded, first) {
    const length = encoded.length;
    const res = new Array(length + 1);
    
    res[0] = first;
    for (let i = 0; i < length; i++) {
        res[i + 1] = encoded[i] ^ res[i];
    }
    
    return res;
};
