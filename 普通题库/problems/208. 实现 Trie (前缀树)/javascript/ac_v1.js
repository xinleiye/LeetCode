/**
 * Initialize your data structure here.
 */
var Trie = function() {
    this.isEnd = false;
    this.next = new Array(26).fill(null);
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let node = this;

    for (let i = 0; i < word.length; i++) {
        let index = word.charCodeAt(i) - 97;

        if (node.next[index] === null) {
            node.next[index] = new Trie();
        }
        node = node.next[index];
    }
    node.isEnd = true;
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let node = this;

    for (let i = 0; i < word.length; i++) {
        let index = word.charCodeAt(i) - 97;

        if (node.next[index] === null) {
            return false;
        }
        node = node.next[index];
    }

    return node.isEnd;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let node = this;

    for (let i = 0; i < prefix.length; i++) {
        let index = prefix.charCodeAt(i) - 97;

        if (node.next[index] === null) {
            return false;
        }
        node = node.next[index];
    }

    return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
