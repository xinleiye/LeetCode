/**
 * @param {string} s
 * @param {number[]} indices
 * @param {string[]} sources
 * @param {string[]} targets
 * @return {string}
 */
var findReplaceString = function(s, indices, sources, targets) {
    const total = indices.length;
    const ops = new Array(total);
    for (let i = 0; i < total; i++) {
        ops[i] = {
            index: indices[i],
            src: sources[i],
            tar: targets[i]
        }
    }
    ops.sort((o1, o2) => o1.index - o2.index);

    const flag = new Array(total).fill(false);
    for (let i = 0; i < total; i++) {
        const src = ops[i].src;
        const base = ops[i].index;
        let valid = true;

        for (let j = 0; j < src.length; j++) {
            if (s[base + j] !== src[j]) {
                valid = false;
                break;
            }
        }
        flag[i] = valid;
    }

    const res = [];
    const length = s.length;
    let index = 0;
    let pos = 0;
    while (pos < length) {
        if (index < total && ops[index].index === pos) {
            if (flag[index]) {
                res.push(ops[index].tar);
                pos += ops[index].src.length;
            }
            index++;
        } else {
            res.push(s[pos]);
            pos++;
        }
    }

    return res.join("");
};
