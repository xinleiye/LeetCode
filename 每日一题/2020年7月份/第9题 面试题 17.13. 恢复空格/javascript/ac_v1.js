/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {number}
 */
var respace = function(dictionary, sentence) {
    let trie = new TrieTree();
    let unMatch = new Array(sentence.length + 1).fill(sentence.length);

    dictionary.forEach(word => {
        trie.insert(word);
    });

    unMatch[0] = 0;
    for (let i = 1; i <= sentence.length; i++) {
        let currentPos = trie.root;

        unMatch[i] = unMatch[i - 1] + 1;

        for (let j = i - 1; j >= 0; j--) {
            let index = sentence.charCodeAt(j) - 97;

            if (currentPos.next[index] === null) {
                break;
            } else if (currentPos.next[index].isEnd === true) {
                unMatch[i] = Math.min(unMatch[i], unMatch[j]);
            }
            if (unMatch[i] === 0) {
                break;
            }
            currentPos = currentPos.next[index];
        }
    }

    return unMatch[sentence.length];
};

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
    insert (s) {
        let currentNode = this.root;

        for (let i = s.length - 1; i >= 0; i--) {
            let index = s.charCodeAt(i) - 97;

            if (currentNode.next[index] === null) {
                currentNode.next[index] = new TrieNode();
            }
            currentNode = currentNode.next[index];
        }
        currentNode.isEnd = true;
    }
}
