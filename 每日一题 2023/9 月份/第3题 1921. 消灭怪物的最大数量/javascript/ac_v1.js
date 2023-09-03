/**
 * @param {number[]} forts
 * @return {number}
 */
var captureForts = function(forts) {
    let res = 0;
    const total = forts.length;
    let pos = 0;

    while (pos < total) {
        if (forts[pos] !== 0) {
            const start = forts[pos];
            let next = pos + 1;

            while (next < total && forts[next] === 0) {
                next++;
            }
            if ((start === 1 && forts[next] === -1) || (start === -1 && forts[next] === 1)) {
                res = Math.max(res, next - pos - 1);
            }
            pos = next;
        } else {
            pos++;
        }
    }

    return res;
};
