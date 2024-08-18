/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    let a = 0;
    const total = s.length;
    let index = 0;

    while (index < total) {
        if (s[index] === "A") {
            a++;
            if (a >= 2) {
                return false;
            }
            index++;
        } else if (s[index] === "L") {
            let l = 0;

            while (index < total && s[index] === "L") {
                l++;
                index++;
            }
            if (l >= 3) {
                return false;
            }
        } else {
            index++;
        }
    }

    return true;
};
