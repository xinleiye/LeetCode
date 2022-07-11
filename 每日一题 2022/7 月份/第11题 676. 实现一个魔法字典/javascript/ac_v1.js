var MagicDictionary = function() {
    this.trieTree = new TrieTree();
};

/** 
 * @param {string[]} dictionary
 * @return {void}
 */
MagicDictionary.prototype.buildDict = function(dictionary) {
    for (const d of dictionary) {
        this.trieTree.insert(d);
    }
};

/** 
 * @param {string} searchWord
 * @return {boolean}
 */
MagicDictionary.prototype.search = function(searchWord) {
    return this.trieTree.find(searchWord);
};

/**
 * Your MagicDictionary object will be instantiated and called as such:
 * var obj = new MagicDictionary()
 * obj.buildDict(dictionary)
 * var param_2 = obj.search(searchWord)
 */

class TrieTreeNode {
    constructor () {
        this.next = new Array(26).fill(null);
        this.isEnd = false;
    }
}

class TrieTree {
    constructor () {
        const { next, isEnd } = new TrieTreeNode();
        this.next = next;
        this.isEnd = isEnd
    }

    insert (str) {
        let cur = this.next;
        for (const ch of str) {
            const index = ch.charCodeAt() - 97;

            if (cur[index] === null) {
                cur[index] = new TrieTreeNode();
            }
            cur = cur[index].next;
        }
        cur.isEnd = true;
    }

    find (str) {
        let res = false;
        const dfsSearch = (node, cur, target, diff) => {
            if (res || diff > 1) {
                return;
            }
            if (cur === target.length) {
                if (diff === 1 && node.isEnd) {
                    res = true;
                }
                return;
            }
            for (let i = 0; i < 26; i++) {
                if (!node[i]) {
                    continue;
                }

                const ch = String.fromCharCode(i + 97);
                if (ch === target[cur]) {
                    dfsSearch(node[i].next, cur + 1, target, diff);
                } else {
                    dfsSearch(node[i].next, cur + 1, target, diff + 1);
                }
            }
        };

        dfsSearch(this.next, 0, str, 0);

        return res;
    }
}
