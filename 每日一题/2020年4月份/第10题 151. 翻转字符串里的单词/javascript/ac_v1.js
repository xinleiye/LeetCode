/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let res = [];
    let endIndex = s.length - 1;
    let startIndex = 0;
    let spaceNum = 0;

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

    return res.join("").split(" ").reverse().join(" ");
};
