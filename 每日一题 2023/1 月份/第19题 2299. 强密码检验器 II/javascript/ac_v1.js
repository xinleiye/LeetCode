/**
 * @param {string} password
 * @return {boolean}
 */
var strongPasswordCheckerII = function(password) {
    let strength = 0;
    const LEN = 1;
    const LOWER = 1 << 1;
    const UPPER = 1 << 2;
    const NUMBER = 1 << 3;
    const SPECIAL = 1 << 4;
    const TWOSAME = 1 << 5;
    const specialStr = "!@#$%^&*()-+";
    let preCh = "";

    if (password.length >= 8) {
        strength |= LEN;
    } else {
        return false;
    }
    for (const ch of password) {
        if (ch >= "a" && ch <= "z") {
            strength |= LOWER;
        } else if (ch >= "A" && ch <= "Z") {
            strength |= UPPER;
        } else if (ch >= "0" && ch <= "9") {
            strength |= NUMBER;
        } else if (specialStr.indexOf(ch) >= 0) {
            strength |= SPECIAL;
        }
        if (preCh) {
            if (preCh !== ch) {
                strength |= TWOSAME;
            } else {
                return false;
            }
        }
        preCh = ch;
    }

    return strength === (LEN | LOWER | UPPER | NUMBER | SPECIAL | TWOSAME);
};
