/**
 * @param {number} n
 * @return {number}
 */
var countTriples = function(n) {
    let res = 0;

    for (let i = 1; i <= n; i++) {
        const a = i * i;

        for (let j = i + 1; j <= n; j++) {
            const b = j * j;
            const c = Math.floor(Math.sqrt(a + b + 1));

            if (c <= n && a + b === c * c) {
                res++;
            }
        }
    }

    return res * 2;
};
