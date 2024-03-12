/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 */
var FindElements = function(root) {
    this.numberSet = new Set();
    function dfsSearch(node, set) {
        if (!node) {
            return;
        }
        if (node.left) {
            node.left.val = node.val * 2 + 1;
        }
        if (node.right) {
            node.right.val = node.val * 2 + 2;
        }
        set.add(node.val);
        dfsSearch(node.left, set);
        dfsSearch(node.right, set);
    }

    root.val = 0;
    dfsSearch(root, this.numberSet);
};

/** 
 * @param {number} target
 * @return {boolean}
 */
FindElements.prototype.find = function(target) {
    return this.numberSet.has(target);
};

/**
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */
