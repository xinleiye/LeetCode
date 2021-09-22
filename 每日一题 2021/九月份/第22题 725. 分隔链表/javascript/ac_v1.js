/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function(head, k) {
    const res = [];
    let nodeCount = 0;
    let node = head;
    const listLen = new Array(k).fill(0);

    while (node) {
        nodeCount++;
        node = node.next;
    }
    if (nodeCount >= k) {
        listLen.fill(Math.floor(nodeCount / k));
        for (let i = 0; i < nodeCount % k; i++) {
            listLen[i] += 1;
        }
    } else {
        for (let i = 0; i < nodeCount; i++) {
            listLen[i] = 1;
        }
    }

    node = head;
    listLen.forEach(len => {
        if (len > 0) {
            let tmpHead = node;
            let next = node.next;

            for (let i = 1; i < len; i++) {
                node = node.next;
                next = next ? next.next : null;
            }
            node.next = null;
            node = next;
            res.push(tmpHead);
        } else {
            res.push(null);
        }
    });

    return res;
};
