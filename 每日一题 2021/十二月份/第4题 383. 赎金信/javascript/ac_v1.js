/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {    
    if (ransomNote === magazine) {
        return true;
    }
    if (ransomNote.length > magazine.length) {
        return false;
    }

    const chArr = new Array(26).fill(0);
    const chArrM = new Array(26).fill(0);

    for (const ch of ransomNote) {
        chArr[ch.charCodeAt(0) - 97]++;
    }
    for (const ch of magazine) {
        chArrM[ch.charCodeAt(0) - 97]++;
    }
    for (let i = 0; i < 26; i++) {
        if (chArr[i] > chArrM[i]) {
            return false;
        }
    }

    return true;
};
