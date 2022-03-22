/**
 * @param {string} colors
 * @return {boolean}
 */
var winnerOfGame = function(colors) {
    let curChar = "";
    let count = 0;
    const countArr = [0, 0];

    for (const ch of colors) {
        if (ch !== curChar) {
            count = 1;
            curChar = ch;
        } else {
            count++;
        }
        if (count >= 3) {
            countArr[curChar.charCodeAt(0) - 65] += count - 2;
        }
    }

    return countArr[0] > countArr[1];
};
