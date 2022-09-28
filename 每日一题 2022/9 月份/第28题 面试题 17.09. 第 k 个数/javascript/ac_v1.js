/**
 * @param {number} k
 * @return {number}
 */
var getKthMagicNumber = function(k) {
    let p3 = 1;
    let p5 = 1;
    let p7 = 1;
    let buff = new Array(k + 1);

    buff[1] = 1;
    for (let i = 2; i <= k; i++) {
        const n3 = buff[p3] * 3;
        const n5 = buff[p5] * 5;
        const n7 = buff[p7] * 7;

        buff[i] = Math.min(n3, n5, n7);
        if (buff[i] === n3) {
            p3++;
        }
        if (buff[i] === n5) {
            p5++;
        }
        if (buff[i] === n7) {
            p7++;
        }
    }

    return buff[k];
};
