/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let index = 0;
    let pos = 0;
    const length = chars.length;

    while (index < length) {
        let count = 0;
        const ch = chars[index];

        while (index < length && chars[index] === ch) {
            index++;
            count++;
        }

        chars[pos] = ch;
        pos++;
        if (count > 1) {
            const strCount = String(count);

            for (let i = 0; i < strCount.length; i++) {
                chars[pos + i] = strCount[i];
            }
            pos += strCount.length;
        }
    }

    return pos;
};
