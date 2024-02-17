/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) {
        return [];
    }

    const res = [];
    let stack = [];
    stack.push(root);
    while (stack.length) {
        const newStack = [];
        const vals = [];
        while (stack.length) {
            const node = stack.shift();
            vals.push(node.val);
            if (node.children) {
                newStack.push(...node.children);
            }
        }
        res.push(vals);
        stack = newStack;
    }

    return res;
};
