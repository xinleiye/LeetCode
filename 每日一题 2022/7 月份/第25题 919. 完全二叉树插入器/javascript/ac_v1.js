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
var CBTInserter = function(root) {
    this.root = root;
};


/** 
 * @param {number} val
 * @return {number}
 */
CBTInserter.prototype.insert = function(val) {
    const tar = new TreeNode(val);
    let stack = [this.root];

    while (stack.length) {
        const next = [];
        
        for (let i = 0, len = stack.length; i < len; i++) {
            const cur = stack[i];

            if (cur.left) {
                next.push(cur.left);
            } else {
                cur.left = tar;
                return cur.val;
            }
            if (cur.right) {
                next.push(cur.right);
            } else {
                cur.right = tar;
                return cur.val;
            }
        }
        stack = next;
    }
};

/**
 * @return {TreeNode}
 */
CBTInserter.prototype.get_root = function() {
    return this.root;
};

/**
 * Your CBTInserter object will be instantiated and called as such:
 * var obj = new CBTInserter(root)
 * var param_1 = obj.insert(val)
 * var param_2 = obj.get_root()
 */
