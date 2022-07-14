/**
 * @param {string[]} words
 */
var WordFilter = function(words) {
    const strMap = new Map();

    for (let k = 0, len = words.length; k < len; k++) {
        const w = words[k];
        const length = w.length;

        for (let i = 1; i <= length; i++) {
            for (let j = 1; j <= length; j++) {
                strMap.set(`${w.substring(0, i)}#${w.substring(length - j, length)}`, k);
            }
        }
    }
    this.strMap = strMap;
};

/** 
 * @param {string} pref 
 * @param {string} suff
 * @return {number}
 */
WordFilter.prototype.f = function(pref, suff) {
    const tar = `${pref}#${suff}`;

    return this.strMap.has(tar) ? this.strMap.get(tar) : -1;
};

/**
 * Your WordFilter object will be instantiated and called as such:
 * var obj = new WordFilter(words)
 * var param_1 = obj.f(pref,suff)
 */
