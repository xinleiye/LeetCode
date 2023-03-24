/**
 * @param {string[]} words
 */
var StreamChecker = function(words) {
    const trieTree = new TrieTree();

    for (const w of words) {
        trieTree.insert(w.split("").reverse().join(""));
    }
    this.dict = trieTree;
    this.strings = [];
};

/** 
 * @param {character} letter
 * @return {boolean}
 */
StreamChecker.prototype.query = function(letter) {
    this.strings.unshift(letter);
    return this.dict.find(this.strings);
};

/**
 * Your StreamChecker object will be instantiated and called as such:
 * var obj = new StreamChecker(words)
 * var param_1 = obj.query(letter)
 */

/**
 * 只包含小写字母的前缀树
 */
class TrieNode {
    constructor () {
        this.next =  new Array(26).fill(null);
        this.isEnd = false;
    }
}
class TrieTree {
    constructor () {
        this.root = new TrieNode();
    }
    insert (str) {
        let currentNode = this.root;

        for (let i = 0; i < str.length; i++) {
            let index = str.charCodeAt(i) - 97;

            if (currentNode.next[index] === null) {
                currentNode.next[index] = new TrieNode();
            }
            currentNode = currentNode.next[index];
        }
        currentNode.isEnd = true;
    }
    find (str) {
        let currentNode = this.root;
        const length = str.length;

        for (let i = 0; i < length; i++) {
            let index = str[i].charCodeAt() - 97;

            if (currentNode.next[index] === null) {
                return false;
            }
            if (currentNode.next[index].isEnd) {
                return true;
            }
            currentNode = currentNode.next[index];
        }

        return currentNode.isEnd;
    }
}
