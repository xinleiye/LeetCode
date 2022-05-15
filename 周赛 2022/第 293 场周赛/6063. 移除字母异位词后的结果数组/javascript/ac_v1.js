/**
 * @param {string[]} words
 * @return {string[]}
 */
var removeAnagrams = function(words) {
    const isAnagrams = (str1, str2) => {
        if (str1.length !== str2.length) {
            return false;
        }
        const chArr = new Array(26).fill(0);
        for (const ch of str1) {
            chArr[ch.charCodeAt(0) - 97]++;
        }
        for (const ch of str2) {
            chArr[ch.charCodeAt(0) - 97]--;
        }
        for (const n of chArr) {
            if (n !== 0) {
                return false;
            }
        }
        return true;
    };

    while (true) {
        let deleteFlag = false;
        const total = words.length;
        for (let i = 1; i < total; i++) {
            if (isAnagrams(words[i - 1], words[i])) {
                words.splice(i, 1);
                deleteFlag = true;
                break;
            }
        }
        if (!deleteFlag) {
            break;
        }
    }
    
    return words
};
