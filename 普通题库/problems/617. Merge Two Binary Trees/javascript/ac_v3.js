/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
    let nodes1 = [];
    let nodes2 = [];

    if (t1 === null) {
        return t2;
    }

    nodes1.push(t1);
    nodes2.push(t2);

    while (nodes1.length || nodes2.length) {
        let n1 = nodes1.pop();
        let n2 = nodes2.pop();

        if (n1 === null || n2 === null) {
            continue;
        }
        n1.val += n2.val;
        if (n1.left === null) {
            n1.left = n2.left;
        } else {
            nodes1.push(n1.left);
            nodes2.push(n2.left);
        }
        if (n1.right === null) {
            n1.right = n2.right;
        } else {
            nodes1.push(n1.right);
            nodes2.push(n2.right);
        }
    }

    return t1;
};
