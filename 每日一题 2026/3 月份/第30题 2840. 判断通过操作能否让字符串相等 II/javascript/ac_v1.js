/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkStrings = function(s1, s2) {
    const total = s1.length;
    const evenCh = Array.from({length: 2}, _ => new Array(26).fill(0));
    const oddCh = Array.from({length: 2}, _ => new Array(26).fill(0));;

    for (let i = 0; i < total; i++) {
        if (i % 2 === 0) {
            evenCh[0][s1.charCodeAt(i) - 97]++;
            evenCh[1][s2.charCodeAt(i) - 97]++;
        } else {
            oddCh[0][s1.charCodeAt(i) - 97]++;
            oddCh[1][s2.charCodeAt(i) - 97]++;
        }
    }
    for (let i = 0; i < 26; i++) {
        if (evenCh[0][i] !== evenCh[1][i]) {
            return false;
        }
        if (oddCh[0][i] !== oddCh[1][i]) {
            return false;
        }
    }

    return true;
};
