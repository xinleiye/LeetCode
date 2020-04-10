/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let res = [];
    let endIndex = s.length - 1;
    let startIndex = 0;
    let spaceNum = 0;
    let wordLen = 0;
    let swapChar = (src, start, end) => {
        for (let i = start, len = start + ((end - start + 1) >>> 1); i < len; i++) {
            let tmp = src[i];

            src[i] = src[start + end - i];
            src[start + end - i] = tmp;
        }
    };

    for (let i = endIndex; i >= 0; i--) {
        if (s[i] === " ") {
            endIndex--;
        } else {
            break;
        }
    }

    for (let i = startIndex; i < endIndex; i++) {
        if (s[i] === " ") {
            startIndex++;
        } else {
            break;
        }
    }

    for (let i = startIndex; i <= endIndex; i++) {
        if (s[i] === " ") {
            spaceNum++;
            continue;
        } else {
            if (spaceNum >= 1) {
                spaceNum = 0;
                res.push(" ");
            }
            res.push(s[i]);
        }
    }

    swapChar(res, 0, res.length - 1);

    for (let i = res.length - 1; i >= 0; i--) {
        if (res[i] !== " ") {
            wordLen++;
            continue;
        } else {
            swapChar(res, i + 1, i + wordLen);
            wordLen = 0;
        }
    }

    swapChar(res, 0, wordLen - 1);

    return res.join("");
};
