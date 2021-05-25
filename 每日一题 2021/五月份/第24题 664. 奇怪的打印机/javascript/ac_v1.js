/**
 * @param {string} s
 * @return {number}
 */
var strangePrinter = function(s) {
    const length = s.length;
    const buff = new Array(s.length);

    for (let i = 0; i < length; i++) {
        buff[i] = new Array(length);
    }

    for (let i = length - 1; i >= 0; i--) {
        buff[i][i] = 1;
        for (let j = i + 1; j < length; j++) {
            if (s[i] === s[j]) {
                buff[i][j] = buff[i][j - 1];
            } else {
                let minCount = Number.MAX_SAFE_INTEGER;

                for (let k = i; k < j; k++) {
                    minCount = Math.min(minCount, buff[i][k] + buff[k + 1][j]);
                }
                buff[i][j] = minCount;
            }
        }
    }

    return buff[0][length - 1];
};
