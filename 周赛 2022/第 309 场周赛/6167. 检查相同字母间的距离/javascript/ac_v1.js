/**
 * @param {string} s
 * @param {number[]} distance
 * @return {boolean}
 */
var checkDistances = function(s, distance) {
    const dis = new Array(26).fill(-1);
    const length = s.length;

    for (let i = 0; i < length; i++) {
        const index = s.charCodeAt(i) - 97;
        
        if (dis[index] !== -1) {
            dis[index] = i - dis[index] - 1;
        } else {
            dis[index] = i;
        }
    }
    for (let i = 0; i < 26; i++) {
        if (dis[i] !== -1 && dis[i] !== distance[i]) {
            return false;
        }
    }

    return true;
};
