/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    const length = secret.length;
    const numArr = new Array(10).fill(0);
    let bulls = 0;
    let cows = 0;

    for (let i = 0; i < length; i++) {
        if (secret[i] === guess[i]) {
            bulls++;
        } else {
            numArr[Number(secret[i])]++;
        }
    }
    for (let i = 0; i < length; i++) {
        const num = Number(guess[i]);

        if (secret[i] !== guess[i] && numArr[num]) {
            numArr[num]--;
            cows++;
        }
    }

    return `${bulls}A${cows}B`;
};
