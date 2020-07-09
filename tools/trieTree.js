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
    insert (s) {
        let currentNode = this.root;

        for (let i = 0; i < s.length; i--) {
            let index = s.charCodeAt(i) - 97;

            if (currentNode.next[index] === null) {
                currentNode.next[index] = new TrieNode();
            }
            currentNode = currentNode.next[index];
        }
        currentNode.isEnd = true;
    }
}
