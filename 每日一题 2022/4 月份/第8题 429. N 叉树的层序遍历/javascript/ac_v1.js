/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let res = [];
    let nodes = [];
    let childrens = [];
    let levelVal = [];

    if (!root) {
        return [];
    }

    nodes.push(root);
    while (nodes.length) {
        let node = nodes.shift();

        levelVal.push(node.val);
        for (let i = 0, len = node.children.length; i < len; i++) {
            childrens.push(node.children[i]);
        }
        if (!nodes.length) {
            res.push(levelVal); 
            levelVal = [];
            nodes = childrens;
            childrens = [];
        }
    }
    return res;
};
