/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 * @Runtime 60 ms, faster than 98.76% of JavaScript online submissions for Ransom Note.
 * @Memory_Usage 37.4 MB, less than 50.39% of JavaScript online submissions for Ransom Note.
 * @ac_test_case
 * "a" "b"
 * "z" "z"
 * "abcd" "abcde"
 * "aabcd" "abcde"
 * "fihjjjjei" "hjibagacbhadfaefdjaeaebgi"
 * "bg" "efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj"
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
