/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
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
