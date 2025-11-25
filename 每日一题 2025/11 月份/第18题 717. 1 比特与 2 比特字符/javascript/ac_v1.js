/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
    const total = bits.length;
    let index = 0;

    while (index < total - 1) {
        if (bits[index] === 1) {
            index += 2;
        } else {
            index++;
        }
    }

    return index === total - 1;
};
