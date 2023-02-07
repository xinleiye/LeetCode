/**
 * @param {string[]} words
 * @param {string} target
 * @param {number} startIndex
 * @return {number}
 */
var closetTarget = function(words, target, startIndex) {
    const total = words.length;
    const calcSteps = (start, target) => {
        const dis = Math.abs(start - target);
        return Math.min(dis, total - dis);
    };
    let res = total;

    for (let i = 0; i < total; i++) {
        if (words[i] === target) {
            res = Math.min(res, calcSteps(startIndex, i));
        }
    }

    return res === total ? -1 : res; 
};
