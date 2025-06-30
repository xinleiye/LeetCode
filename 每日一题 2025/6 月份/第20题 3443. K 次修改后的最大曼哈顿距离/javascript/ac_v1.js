/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxDistance = function(s, k) {
    let res = 0;
    let x = 0;
    let y = 0;
    const total = s.length;

    for (let i = 0; i < total; i++) {
        switch(s[i]) {
            case "N": 
                y++;
                break;
            case "S":
                y--;
                break;
            case "E":
                x++;
                break;
            case "W":
                x--;
                break;
        }
        res = Math.max(res, Math.min(Math.abs(x) + Math.abs(y) + k * 2, i + 1));
    }

    return res;
};
