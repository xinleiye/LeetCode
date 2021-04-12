/**
 * @param {number} n
 * @return {number}
 */
 var nthUglyNumber = function(n) {
    let buff = new Array(n + 1);
    let p2 = 1;
    let p3 = 1;
    let p5 = 1;

    buff[1] = 1;
    for (let i = 2; i <= n; i++) {
        let num2 = buff[p2] * 2;
        let num3 = buff[p3] * 3;
        let num5 = buff[p5] * 5;

        buff[i] = Math.min(num2, num3, num5);
        if (buff[i] === num2) {
            p2++;
        }
        if (buff[i] === num3) {
            p3++;
        }
        if (buff[i] === num5) {
            p5++;
        }
    }

    return buff[n];
};
