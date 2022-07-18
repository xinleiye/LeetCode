/**
 * @param {string[]} words
 */
var WordFilter = function(words) {
    const total = words.length;
    this.trieTree = new TrieTree();

    for (let i = 0; i < total; i++) {
        this.trieTree.insert(words[i], i);
    }
};

/** 
 * @param {string} pref 
 * @param {string} suff
 * @return {number}
 */
WordFilter.prototype.f = function(pref, suff) {
    let res = -1;
    const prefIndexSet = new Set(this.trieTree.findPrefTree(pref));
    const suffIndex = this.trieTree.findSuffTree(suff.split("").reverse().join(""));

    for (const i of suffIndex) {
        if (prefIndexSet.has(i)) {
            res = Math.max(res, i);
        }
    }

    return res;
};

/**
 * Your WordFilter object will be instantiated and called as such:
 * var obj = new WordFilter(words)
 * var param_1 = obj.f(pref,suff)
 */

class TrieTreeNode {
    constructor () {
        this.next = new Array(26).fill(null);
        this.index = -1;
    }
}
class TrieTree {
    constructor () {
        this.prefTree = new TrieTreeNode();
        this.suffTree = new TrieTreeNode();
    }

    insert (str, index) {
        this.insertPrefTree(str, index);
        this.insertSuffTree(str.split("").reverse().join(""), index);
    }

    insertTree (tree, str, index) {
        let cur = tree;

        for (const ch of str) {
            let pos = ch.charCodeAt() - 97;

            if (cur.next[pos] === null) {
                cur.next[pos] = new TrieTreeNode();
            }
            cur = cur.next[pos];
        }
        cur.index = index;
    }

    insertPrefTree (str, index) {
        this.insertTree(this.prefTree, str, index);
    }

    insertSuffTree (str, index) {
        this.insertTree(this.suffTree, str, index);
    }

    find (tree, str) {
        const indexs = [];
        let cur = tree;
        const dfsSearch = (node, index) => {
            if (node.index > -1) {
                indexs.push(node.index);
            }
            for (const n of node.next) {
                if (n !== null) {
                    dfsSearch(n, index + 1);
                }
            }
        };

        for (const ch of str) {
            let pos = ch.charCodeAt() - 97;

            if (!cur.next[pos]) {
                return indexs;
            }
            cur = cur.next[pos];
        }

        dfsSearch(cur, 0);

        return indexs;
    }

    findPrefTree (str) {
        return this.find(this.prefTree, str);
    }

    findSuffTree (str) {
        return this.find(this.suffTree, str);
    }
}
