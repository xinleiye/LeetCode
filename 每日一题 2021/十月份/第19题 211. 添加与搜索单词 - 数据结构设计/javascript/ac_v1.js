const CHAR_COUNT = 26;

function charNode() {
    this.children = new Array(CHAR_COUNT).fill(null);
    this.isEnd = false
}
function dfsSearch(node, word, index) {
    if (index === word.length) {
        return node.isEnd;
    }

    if (word[index] === '.') {
        for (let i = 0; i < CHAR_COUNT; i++) {
            const child = node.children[i];

            if (child && dfsSearch(child, word, index + 1)) {
                return true;
            }
        }
    } else {
        const child = node.children[word.charCodeAt(index) - 97];

        if (child && dfsSearch(child, word, index + 1)) {
            return true;
        }
    }
    return false;
}

var WordDictionary = function() {
    this.root = new charNode();
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    let node = this.root;

    for (let i = 0; i < word.length; i++) {
        const index = word.charCodeAt(i) - 97;

        if (node.children[index] === null) {
            node.children[index] = new charNode();
        }
        node = node.children[index];
    }
    node.isEnd = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    return dfsSearch(this.root, word, 0);
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
