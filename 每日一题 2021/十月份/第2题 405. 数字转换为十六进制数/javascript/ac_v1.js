/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
    let res = '';
    const HEX = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

    do {
        res = HEX[num & 15] + res;
        num = num >>> 4;
    } while (num)

    return res;
};
