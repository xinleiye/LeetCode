/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var minFlips = function(a, b, c) {
    let res = 0;
    let aBit = (new Array(32)).fill(0);
    let bBit = (new Array(32)).fill(0);
    let cBit = (new Array(32)).fill(0);
    let diffBit = (new Array(32)).fill(0);
    let getBit = (num, bitMap) => {
        let index = bitMap.length - 1;

        while (num) {
            bitMap[index--] = num % 2;
            num = num >>> 1;
        }
    };

    getBit(a, aBit);
    getBit(b, bBit);
    getBit(c, cBit);
    getBit((a | b) ^ c, diffBit);

    for (let i = 0; i < 32; i++) {
        if (diffBit[i]) {
            if (cBit[i]) {
                res++;
            } else {
                if (aBit[i]) {
                    res++;
                }
                if (bBit[i]) {
                    res++;
                }
            }
        }
    }

    return res;
};
