/**
 * @param {string} S
 * @return {string}
 */
var compressString = function(S) {
    let preChar = S[0];
    let count = 1;
    let compressStr = "";

    for (let i = 1, len = S.length; i < len; i++) {
        if (S[i] === preChar) {
            count++;
        } else {
            compressStr += preChar + count;
            preChar = S[i];
            count = 1;
        }
    }

    compressStr += preChar + count;

    return compressStr.length >= S.length ? S : compressStr;
};
