/**
 * @param {string} message
 * @param {number} limit
 * @return {string[]}
 */
var splitMessage = function(message, limit) {
    let blocks = 0;
    let curLen = 0;
    const targetLen = message.length;
    let tailLen = 0;

    while (curLen < targetLen) {
        blocks++;
        if (blocks < 10) {
            tailLen = 5
        } else if (blocks < 100) {
            tailLen = 7;
            if (blocks === 10) {
                curLen -= 9;
            }
        } else if (blocks < 1000) {
            tailLen = 9;
            if (blocks === 100) {
                curLen -= 99;
            }
        } else {
            tailLen = 11;
            if (blocks === 1000) {
                curLen -= 999;
            }
        }
        if (tailLen >= limit) {
            return [];
        }
        curLen += limit - tailLen;
    }

    let res = [];
    let start = 0;
    for (let i = 1; i <= blocks; i++) {
        const tailStr = `<${i}/${blocks}>`;

        if (i < blocks) {
            const len = limit - tailStr.length;

            res.push(`${message.substr(start, len)}${tailStr}`);
            start += len;
        } else {
            res.push(`${message.substr(start)}${tailStr}`);
        }
    }

    return res;
};
