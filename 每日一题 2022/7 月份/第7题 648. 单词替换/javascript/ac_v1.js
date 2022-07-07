/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dictionary, sentence) {
    const root = new TrieTree();
    const res = [];
    const words = sentence.split(" ");

    for (const d of dictionary) {
        root.insert(d);
    }
    for (const w of words) {
        res.push(root.getTrie(w));
    }

    return res.join(" ");
};

class TrieTreeNode {
    constructor () {
        this.next =  new Array(26).fill(null);
        this.isEnd = false;
    }
}
class TrieTree {
    constructor () {
        this.root = new TrieTreeNode();
    }

    insert (str) {
        let cur = this.root;

        for (const ch of str) {
            const index = ch.charCodeAt() - 97;

            if (cur.next[index] === null) {
                cur.next[index] = new TrieTreeNode();
            }
            cur = cur.next[index];
        }
        cur.isEnd = true;
    }

    getTrie (str) {
        const trie = [];
        let cur = this.root;

        for (const ch of str) {
            const index = ch.charCodeAt() - 97;

            if (cur.next[index] === null) {
                return str;
            }
            trie.push(ch);
            if (cur.next[index].isEnd) {
                break;
            }
            cur = cur.next[index];
        }

        return trie.join("");
    }
}
