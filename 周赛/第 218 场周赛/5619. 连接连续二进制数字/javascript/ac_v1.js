/**
 * @param {number} n
 * @return {number}
 */
var concatenatedBinary = function(n) {
    let res = 0;
    const mod = 1e9 + 7;

    for (let i = 1; i <= n; i++) {
        let bits = [];
        let num = i;

        while (num) {
            bits.push(num % 2);
            num = num >>> 1;
        }

        for (let j = bits.length - 1; j >= 0; j--) {
            res = ((res * 2) % mod + bits[j]) % mod;
        }
    }
    
    return res;
};
