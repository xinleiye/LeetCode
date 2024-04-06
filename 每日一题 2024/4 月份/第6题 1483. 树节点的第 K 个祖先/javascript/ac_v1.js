/**
 * @param {number} n
 * @param {number[]} parent
 */
var TreeAncestor = function(n, parent) {
    const MAX = 16;
    const ancestors = new Array(n).fill(0).map(() => new Array(MAX).fill(-1));

    for (let i = 0; i < n; i++) {
        ancestors[i][0] = parent[i];
    }
    for (let i = 1; i < MAX; i++) {
        for (let j = 0; j < n; j++) {
            if (ancestors[j][i - 1] !== -1) {
                ancestors[j][i] = ancestors[ancestors[j][i - 1]][i - 1];
            }
        }
    }
    this.MAX = MAX;
    this.ancestors = ancestors;
};

/** 
 * @param {number} node 
 * @param {number} k
 * @return {number}
 */
TreeAncestor.prototype.getKthAncestor = function(node, k) {
    const MAX = this.MAX;
    const ancestors = this.ancestors;

    for (let i = 0; i < MAX; i++) {
        if (((k >> i) & 1) !== 0) {
            node = ancestors[node][i];
            if (node === -1) {
                break;
            }
        }
    }

    return node;
};

/**
 * Your TreeAncestor object will be instantiated and called as such:
 * var obj = new TreeAncestor(n, parent)
 * var param_1 = obj.getKthAncestor(node,k)
 */
