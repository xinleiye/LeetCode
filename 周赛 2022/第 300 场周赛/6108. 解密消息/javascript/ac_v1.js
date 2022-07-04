/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function(key, message) {
    const keyCh = new Array(26).fill("");
    let index = 0;
    for (const ch of key) {
        const code = ch.charCodeAt() - 97;
        if (ch !== " " && keyCh[code] === "") {
            keyCh[code] = String.fromCharCode(index + 97);
            index++;
        }
    }

    const res = [];
    for (const m of message) {
        let ch = m;
        if (ch !== " ") {
            ch = keyCh[m.charCodeAt() - 97];
        }
        res.push(ch);
    }
    
    return res.join("");
};
