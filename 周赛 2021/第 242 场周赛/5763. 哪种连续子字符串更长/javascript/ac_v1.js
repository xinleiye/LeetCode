/**
 * @param {string} s
 * @return {boolean}
 */
var checkZeroOnes = function(s) {
    let one = 0;
    let zero = 0;
    let index = 0;
    const length = s.length;

    while (index < length) {
        const current = s[index];
        let count = 0;
        
        while (index < length && s[index] === current) {
            count++;
            index++;
        }
        if (current === "1") {
            one = Math.max(one, count);
        } else {
            zero = Math.max(zero, count);
        }
    }

    return one > zero;
};
