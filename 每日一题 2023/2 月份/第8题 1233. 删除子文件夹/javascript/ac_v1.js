/**
 * @param {string[]} folder
 * @return {string[]}
 */
var removeSubfolders = function(folder) {
    const res = [];
    const total = folder.length;

    folder.sort();
    res.push(folder[0]);
    for (let i = 1; i < total; i++) {
        const prePath = res[res.length - 1] + "/";

        if (folder[i].indexOf(prePath) !== 0) {
            res.push(folder[i]);
        }
    }

    return res;
};
