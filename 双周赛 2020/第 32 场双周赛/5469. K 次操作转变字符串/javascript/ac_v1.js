/**
 * @param {string} s
 * @param {string} t
 * @param {number} k
 * @return {boolean}
 */
var canConvertString = function(s, t, k) {
    let length = s.length;
    let switchTimeMap = new Map();

    if (s.length !== t.length) {
        return false;
    }

    for (let i = 0; i < length; i++) {
        if (s[i] !== t[i]) {
            let base = 0;
            let minDistance = (t.charCodeAt(i) - s.charCodeAt(i) + 26) % 26;
            let distance = minDistance;

            if (switchTimeMap.has(minDistance)) {
                base = switchTimeMap.get(minDistance) + 1;
                distance += base * 26;
            }

            if (distance > k) {
                return false;
            } else {
                switchTimeMap.set(minDistance, base);
            }
        }
    }

    return true;
};
