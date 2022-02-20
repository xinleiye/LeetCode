/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
    let res = false;
    const total = bits.length;
    let index = 0;

    while (index < total) {
        if (bits[index] === 1) {
            index += 2;
        } else {
            if (index === total - 1) {
                res = true;
            }
            index++;
        }
    }

    return res;
};
