
var MagicDictionary = function() {

};

/** 
 * @param {string[]} dictionary
 * @return {void}
 */
MagicDictionary.prototype.buildDict = function(dictionary) {
    this.dictionary = dictionary;
};

/** 
 * @param {string} searchWord
 * @return {boolean}
 */
MagicDictionary.prototype.search = function(searchWord) {
    for (const d of this.dictionary) {
        if (d.length === searchWord.length) {
            let diff = 0;
            const length = d.length;

            for (let i = 0; i < length; i++) {
                if (d[i] !== searchWord[i]) {
                    diff++;
                }
                if (diff > 1) {
                    break;
                }
            }
            if (diff === 1) {
                return true;
            }
        }
    }

    return false;
};

/**
 * Your MagicDictionary object will be instantiated and called as such:
 * var obj = new MagicDictionary()
 * obj.buildDict(dictionary)
 * var param_2 = obj.search(searchWord)
 */
