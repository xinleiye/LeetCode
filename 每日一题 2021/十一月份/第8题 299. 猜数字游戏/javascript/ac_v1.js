/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    const length = secret.length;
    const secretArr = new Array(10).fill(0);
    let bulls = 0;
    let cows = 0;

    for (let i = 0; i < length; i++) {
        if (secret[i] === guess[i]) {
            bulls++;
        } else {
            secretArr[secret.charCodeAt(i) - 48]++;
        }
    }

    for (let i = 0; i < length; i++) {
        const index = guess.charCodeAt(i) - 48;

        if (secret[i] !== guess[i] && secretArr[index]) {
            cows++;
            secretArr[index]--;
        }
    }

    return `${bulls}A${cows}B`;
};
