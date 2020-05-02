/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let m, index;
    
    if (ransomNote === magazine) {
        return true;
    }
    
    if (ransomNote.length > magazine.length) {
        return false;
    }
    
    m = magazine.split("");

    for (let i = 0, len = ransomNote.length; i < len; i++) {
        index = m.indexOf(ransomNote[i]);
        if (index > -1) {
            m[index] = "*";
        } else {
            return false;
        }
    }

    return true;
};
