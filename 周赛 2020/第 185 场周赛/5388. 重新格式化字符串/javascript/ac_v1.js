/**
 * @param {string} s
 * @return {string}
 */
var reformat = function(s) {
    let res = "";
    let chars = [];
    let nums = [];
    let index = 0;
    
    for (let i = 0, len = s.length; i < len; i++) {
        if (s[i] >= "a" && s[i] <= "z") {
            chars.push(s[i]);
        } else if (s[i] >= "0" && s[i] <= "9") {
            nums.push(s[i]);
        }
    }
    
    if (Math.abs(chars.length - nums.length) > 1) {
        return res;
    }

    for (let len = Math.min(chars.length, nums.length); index < len; index++) {
        res += chars[index] + nums[index];
    }
    
    if (index < chars.length) {
        res += chars[chars.length - 1];
    }
    if (index < nums.length) {
        res = nums[nums.length - 1] + res;
    }
    
    return res;
};
