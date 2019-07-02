/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 * @Runtime 92 ms, faster than 36.79% of JavaScript online submissions for Ransom Note.
 * @Memory_Usage 37.2 MB, less than 62.99% of JavaScript online submissions for Ransom Note.
 * @ac_test_case
 * "a" "b"
 * "z" "z"
 * "abcd" "abcde"
 * "aabcd" "abcde"
 * "zeabcd" "abcdezzz"
 */
var canConstruct = function(ransomNote, magazine) {
    let r, m;

    function getAlphaNum (str) {
        let res = {};
        
        for (let i = 0, len = str.length; i < len; i++) {
            if (res[str[i]]) {
                res[str[i]]++;
            } else {
                res[str[i]] = 1;
            }
        }
        
        return res;
    }
    
    r = getAlphaNum(ransomNote);
    m = getAlphaNum(magazine);

    for (let key in r) {
       if (m[key] && m[key] >= r[key]) {
           continue;
       } else {
           return false;
       }
    }
    return true;
};
