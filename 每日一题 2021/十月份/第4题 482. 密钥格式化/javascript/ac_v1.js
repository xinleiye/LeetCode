/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function(s, k) {
    const res = [];
    const chars = [];
    let index = 0;

    s = s.toUpperCase();
    for (let i = 0, len = s.length; i < len; i++) {
        if (s[i] !== '-') {
            chars.push(s[i]);
        }
    }

    index = chars.length - 1;
    while (index >= 0) {
        let i = 0;
        let str = '';

        while (index >= 0 && i < k) {
            str = chars[index] + str;
            i++;
            index--;
        }

        res.unshift(str);
    }

    return res.join('-');
};
