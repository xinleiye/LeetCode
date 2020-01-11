/**
 * @param {string} characters
 * @param {number} combinationLength
 */
var CombinationIterator = function(characters, combinationLength) {
    let count = 1;
    let chars = characters.split("");
    let strings = characters.split("");

    while (count < combinationLength) {
        let tmpStrings = [];

        for (let i = 0; i < strings.length; i++) {
            let str = strings[i];

            for (let j = chars.indexOf(str[str.length - 1]) + 1; j < chars.length; j++) {
                tmpStrings.push(str + chars[j]);
            }
        }
        count++;
        strings = tmpStrings;
    }
    this.currentIndex = 0;
    this.combinationStrings = strings;
};

/**
 * @return {string}
 */
CombinationIterator.prototype.next = function() {
    return this.combinationStrings[this.currentIndex++];
};

/**
 * @return {boolean}
 */
CombinationIterator.prototype.hasNext = function() {
    return this.currentIndex < this.combinationStrings.length;
};

/** 
 * Your CombinationIterator object will be instantiated and called as such:
 * var obj = new CombinationIterator(characters, combinationLength)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
