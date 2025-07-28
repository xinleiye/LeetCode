/**
 * @param {string} s
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var maximumGain = function(s, x, y) {
    let str = "ab";
    if (x < y) {
        str = "ba";
        [x, y] = [y, x];
    }

    let res = 0;
    const chs = s.split("");
    const removeCh = (src, score, tar1, tar2) => {
        let val = 0;
        const stack = [];
        for (const ch of src) {
            if (stack.length && ch === tar2 && stack[stack.length - 1] === tar1) {
                val += score;
                stack.pop();
            } else {
                stack.push(ch);
            }
        }

        const length = stack.length;
        for (let i = 0; i < length; i++) {
            src[i] = stack[i];
        }
        src.length = length;

        return val;
    };

    res += removeCh(chs, x, str[0], str[1]);
    res += removeCh(chs, y, str[1], str[0]);

    return res;
};
