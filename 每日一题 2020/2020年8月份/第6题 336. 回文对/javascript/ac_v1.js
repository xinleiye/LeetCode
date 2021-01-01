/**
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function(words) {
    let res = [];
    let trieTree = new TrieTree();
    let isPalindrome = (str, start, end) => {
        let len = (end - start + 1) >> 1;

        for(let i = 0; i < len; i++) {
            if (str[start + i] !== str[end - i]) {
                return false;
            }
        }

        return true;
    };

    words.forEach((word, index) => {
        trieTree.insert(word, index);
    });

    words.forEach((word, index) => {
        let length = word.length;

        for(let i = 0; i <= length; i++) {
            // 往 word 后面拼接
            if (isPalindrome(word, i, length - 1)) {
                let end = trieTree.find(word, 0, i - 1);

                if (end > -1 && end !== index) {
                    res.push([index, end]);
                }
            }
            // 往 word 前面拼接
            if (i > 0 && isPalindrome(word, 0, i - 1)) {
                let end = trieTree.find(word, i, length - 1);

                if (end > -1 && end !== index) {
                    res.push([end, index]);
                }
            }
        }
    });

    return res;
};

class TrieNode {
    constructor () {
        this.next =  new Array(26).fill(null);
        this.isEnd = -1;
    }
}
class TrieTree {
    constructor () {
        this.root = new TrieNode();
    }
    insert (str, index) {
        let currentNode = this.root;

        for (let i = 0; i < str.length; i++) {
            let index = str.charCodeAt(i) - 97;

            if (currentNode.next[index] === null) {
                currentNode.next[index] = new TrieNode();
            }
            currentNode = currentNode.next[index];
        }
        currentNode.isEnd = index;
    }
    find (str, start, end) {
        let currentNode = this.root;

        for (let i = end; i >= start; i--) {
            let index = str.charCodeAt(i) - 97;

            if (currentNode.next[index] === null) {
                return -1;
            }
            currentNode = currentNode.next[index];
        }

        return currentNode.isEnd;
    }
}
