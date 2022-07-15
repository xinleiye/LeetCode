/**
 * // Definition for a QuadTree node.
 * function Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */

/**
 * @param {Node} quadTree1
 * @param {Node} quadTree2
 * @return {Node}
 */
var intersect = function(quadTree1, quadTree2) {
    const getNextNode = (node) => {
        if (node.isLeaf) {
            const newNode = new Node(node.val, false);

            newNode.topLeft = new Node(node.val, true);
            newNode.topRight = new Node(node.val, true);
            newNode.bottomLeft = new Node(node.val, true);
            newNode.bottomRight = new Node(node.val, true);

            return newNode;
        }
        return node;
    };
    const calcNodeVal = (node1, node2) => {
        const node = new Node(true, false);
        if (node1.isLeaf && node2.isLeaf) {
            node.val = node1.val | node2.val;
            node.isLeaf = true;
            return node;
        }

        const tl = calcNodeVal(getNextNode(node1).topLeft, getNextNode(node2).topLeft);
        const tr = calcNodeVal(getNextNode(node1).topRight, getNextNode(node2).topRight);
        const bl = calcNodeVal(getNextNode(node1).bottomLeft, getNextNode(node2).bottomLeft);
        const br = calcNodeVal(getNextNode(node1).bottomRight, getNextNode(node2).bottomRight);

        if (tl.val === tr.val &&
            tr.val === bl.val &&
            bl.val === br.val &&
            tl.isLeaf && tr.isLeaf && bl.isLeaf && br.isLeaf) {
            node.val = tl.val;
            node.isLeaf = true;
        } else {
            node.topLeft = tl;
            node.topRight = tr;
            node.bottomLeft = bl;
            node.bottomRight = br;
        }

        return node;
    };

    return calcNodeVal(quadTree1, quadTree2);
};
