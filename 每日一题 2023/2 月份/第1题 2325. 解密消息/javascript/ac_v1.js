/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function(key, message) {
    const keyMap = { " ": " "};
    let code = 97;
    for (const ch of key) {
        if (!keyMap[ch]) {
            keyMap[ch] = String.fromCharCode(code);
            code++;
        }
    }

    const res = [];
    for (const ch of message) {
        res.push(keyMap[ch]);
    }

    return res.join("");
};
