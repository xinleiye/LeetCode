/**
 * @param {string} password
 * @return {boolean}
 */
var strongPasswordCheckerII = function(password) {
    const length = password.length;
    if (length < 8) {
        return false;
    }
    for (let i = 1; i < length; i++) {
        if (password[i] === password[i - 1]) {
            return false;
        }
    }

    let res = 0;
    const specialChar = "!@#$%^&*()-+";
    const lowerChar = "abcdefghijklmnopqrstuvwxyz";
    const upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const digistChar = "0123456789";
    for (const ch of password) {
        if (specialChar.indexOf(ch) >= 0) {
            res |= 1;
        } else if (lowerChar.indexOf(ch) >= 0) {
            res |= 1 << 1;
        } else if (upperChar.indexOf(ch) >= 0) {
            res |= 1 << 2;
        } else if (digistChar.indexOf(ch) >= 0) {
            res |= 1 << 3;
        }
    }
    return res === 15;
};
