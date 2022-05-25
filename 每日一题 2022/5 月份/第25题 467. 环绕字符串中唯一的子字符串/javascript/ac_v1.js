/**
 * @param {string} p
 * @return {number}
 */
var findSubstringInWraproundString = function(p) {
    const buff = new Array(26).fill(0);
    const total = p.length;
    let len = 1;

    buff[p[0].charCodeAt() - 97] = 1;
    for (let i = 1; i < total; i++) {
        const chCode = p[i].charCodeAt();

        if ((chCode - p[i - 1].charCodeAt() + 26) % 26 === 1) {
            len++;
        } else {
            len = 1;
        }
        buff[chCode - 97] = Math.max(buff[chCode - 97], len);
    }

    return _.sum(buff);
};
