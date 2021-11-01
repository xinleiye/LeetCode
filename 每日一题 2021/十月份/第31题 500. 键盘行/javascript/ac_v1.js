/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    let res = [];
    const charArr = [
        ['Q', 'q', 'W', 'w', 'E', 'e', 'R', 'r', 'T', 't', 'Y', 'y', 'U', 'u', 'I', 'i', 'O', 'o', 'P', 'p'],
        ['A', 'a', 'S', 's', 'D', 'd', 'F', 'f', 'G', 'g', 'H', 'h', 'J', 'j', 'K', 'k', 'L', 'l'],
        ['Z', 'z', 'X', 'x', 'C', 'c', 'V', 'v', 'B', 'b', 'N', 'n', 'M', 'm'],
    ];
    const getCharRow = (ch) => {
        for (const chars of charArr) {
            if (chars.indexOf(ch) >= 0) {
                return chars;
            }
        }
    };

    words.forEach(word => {
        let got = true;
        const charRow = getCharRow(word[0]);

        for (let i = 1; i < word.length; i++) {
            if (charRow.indexOf(word[i]) < 0) {
                got = false;
                break;
            }
        }
        if (got) {
            res.push(word);
        }
    });

    return res;
};
