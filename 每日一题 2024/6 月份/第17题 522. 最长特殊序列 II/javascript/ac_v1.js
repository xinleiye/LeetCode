/**
 * @param {string[]} strs
 * @return {number}
 */
var findLUSlength = function(strs) {
    let res = -1;
    const total = strs.length;

    for (let i = 0; i < total; i++) {
        let check = true;

        for (let j = 0; j < total; j++) {
            if (i !== j && isSubseq(strs[i], strs[j])) {
                check = false;
                break;
            }
        }
        if (check) {
            res = Math.max(res ,strs[i].length);
        }
    }

    return res;
};

function isSubseq(src, tar) {
    let ps = 0;
    const ls = src.length;
    let pt = 0;
    const lt = tar.length;

    while (ps < ls && pt < lt) {
        if (src[ps] === tar[pt]) {
            ps++;
        }
        pt++;
    }

    return ps === ls;
}
