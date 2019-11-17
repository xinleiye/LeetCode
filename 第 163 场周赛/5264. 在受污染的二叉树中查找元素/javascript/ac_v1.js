/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 */
var FindElements = function(root) {
    let calcNodeVal = (node, val, dir) => {
        let nodeVal;

        if (!node) {
            return;
        }
        if (dir === "l") {
            nodeVal = val * 2 + 1;
        } else if (dir === "r") {
            nodeVal = val * 2 + 2;
        }
        node.val = nodeVal;
        calcNodeVal(node.left, nodeVal, "l");
        calcNodeVal(node.right, nodeVal, "r");
    };
    if (!root) {
        this.root = null;
        return;
    }
    root.val = 0;
    calcNodeVal(root.left, 0, "l");
    calcNodeVal(root.right, 0, "r");

    this.root = root;
};

/** 
 * @param {number} target
 * @return {boolean}
 */
FindElements.prototype.find = function(target) {
    let layerNodes = [];

    if (!this.root) {
        return false;
    }
    layerNodes.push(this.root);
    while (layerNodes.length) {
        let node = layerNodes.shift();
        
        if (node.val === target) {
            return true;
        }
        if (node.left) {
            layerNodes.push(node.left);
        }
        if (node.right) {
            layerNodes.push(node.right);
        }
    }
    return false;
};

/** 
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */