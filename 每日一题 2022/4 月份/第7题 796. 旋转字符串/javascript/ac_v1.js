/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    if (s === goal) {
        return true;
    }
    if (s.length !== goal.length) {
        return false;
    }
    const starts = [];
    const total = s.length;
    for (let i = 0; i < total; i++) {
        if (s[i] === goal[0]) {
            starts.push(i);
        }
    }
    for (const index of starts) {
        if (s.slice(index) + s.slice(0, index) === goal) {
            return true;
        }
    }
    return false;
};
