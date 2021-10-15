/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let res = "1";
    let index = 1;

    while (index < n) {
        let preChar = res[0];
        let currentStr = "";
        let count = 1;

        for (let i = 1; i < res.length; i++) {
            if (res[i] === preChar) {
                count++;
            } else {
                currentStr += count + preChar;
                preChar = res[i];
                count = 1;
            }
        }
        if (count > 0) {
            currentStr += count + preChar;
        }
        res = currentStr;
        index++;
    }

    return res;
};
