/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
    let flag = false;
    const length1 = haystack.length;
    const length2 = needle.length;

    if (length2 === 0) {
        return 0;
    }
    for (let i = 0; i <= length1 - length2; i++) {
        flag = true;
        for (let j = 0; j < length2; j++) {
            if (haystack[i + j] !== needle[j]) {
                flag = false;
                break;
            }
        }
        if (flag) {
            return i;
        }
    }

    return -1;
};
