/**
 * @param {number} n
 * @return {number}
 */
var waysToChange = function(n) {
    let mod = 1e9 + 7;
    let buffer = new Array(n + 1).fill(0);
    let coins = [25, 10, 5, 1];

    buffer[0] = 1;
    for (let i = 0; i < 4; i++) {
        let coin = coins[i];

        for (let j = coin; j <= n; j++) {
            buffer[j] = (buffer[j] + buffer[j - coin]) % mod;
        }
    }

    return buffer[n];
};
