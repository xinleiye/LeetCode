/**
 * @param {string} text
 * @return {string}
 */
var reorderSpaces = function(text) {
    let res = "";
    let spaceNum = 0;
    let spaceBetween = 0;
    let words = [];
    let word = "";
    
    for (let i = 0; i < text.length; i++) {
        if (text[i] === " ") {
            if (word.length > 0) {
                words.push(word);
                word = "";
            }
            spaceNum++;
        } else {
            word += text[i];
        }
    }
    if (word.length) {
        words.push(word);
    }

    res += words[0];
    spaceBetween = Math.floor(spaceNum / (words.length - 1));
    for (i = 1; i < words.length; i++) {
        for (let j = 0; j < spaceBetween; j++) {
            res += " ";
        }
        res += words[i];
    }

    for (let i = 0, len = words.length > 1 ? spaceNum % (words.length - 1) : spaceNum; i < len; i++) {
        res += " ";
    }

    return res;
};
