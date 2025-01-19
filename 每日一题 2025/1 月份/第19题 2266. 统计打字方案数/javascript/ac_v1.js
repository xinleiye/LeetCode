/**
 * @param {string} pressedKeys
 * @return {number}
 */
var countTexts = function(pressedKeys) {
    const MOD = 1e9 + 7;
    const total = pressedKeys.length;
    const dp3 = [1, 1, 2, 4];
    const dp4 = [1, 1, 2, 4];
    for (let i = 4; i <= total; i++) {
        dp3.push((dp3[i - 1] + dp3[i - 2] + dp3[i - 3]) % MOD);
        dp4.push((dp4[i - 1] + dp4[i - 2] + dp4[i - 3] + dp4[i - 4]) % MOD);
    }

    let res = 1n;
    let count = 1;
    for (let i = 0; i < total; i++) {
        const ch = pressedKeys[i];
        if ((i < total - 1 && ch !== pressedKeys[i + 1]) || i === total - 1) {
            res = (res * BigInt(ch === "7" || ch === "9" ? dp4[count] : dp3[count])) % BigInt(MOD);
            count = 1;
        } else {
            count++;
        }
    }

    return Number(res);
};
