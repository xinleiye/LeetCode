/**
 * @param {number} target
 * @param {number} maxDoubles
 * @return {number}
 */
var minMoves = function(target, maxDoubles) {
    let res = 0;
    let cur = target;

    while (cur > 1) {
        if (cur % 2 === 1) {
            cur -= 1;
            res++;
        } else {
            if (maxDoubles > 0) {
                cur /= 2;
                res++;
                maxDoubles--;
            } else {
                res += cur - 1;
                cur = 1;
            }
        }
    }

    return res;
};
