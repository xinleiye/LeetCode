/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
var removeOccurrences = function(s, part) {
    const len1 = s.length;
    const len2 = part.length;
    let delFlag = true;

    if (len1 < len2) {
        return s;
    }
    if (s === part) {
        return "";
    }

    while (delFlag) {
        let index = 0;
        let start = -1;
        
        while (index <= len1 - len2) {
            if (s[index] === part[0]) {
                if (s.slice(index, index + len2) === part) {
                    start = index;
                    break;
                }
            }
            index++;
        }

        if (start !== -1) {
            s = s.slice(0, start) + s.slice(start + len2);
        } else {
            delFlag = false;
        }
    }
    
    return s;
};
