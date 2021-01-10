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
 * @return {ListNode}
 */
var swapNodes = function(head, k) {
    const newHead = new ListNode();
    let preNodeK1;
    let nodeK1 = newHead;
    let preNodeK2;
    let nodeK2 = newHead;
    let node = newHead;
    
    newHead.next = head;
    for(let i = 0; i < k; i++) {
        preNodeK1 = nodeK1;
        nodeK1 = nodeK1.next;
        node = node.next;
    }

    while (node) {
        preNodeK2 = nodeK2;
        nodeK2 = nodeK2.next;
        node = node.next;
    }

    if (nodeK1.next === nodeK2) {
        preNodeK1.next = nodeK2;
        nodeK1.next = nodeK2.next;
        nodeK2.next = nodeK1;
    } else if(nodeK1 === nodeK2.next) {
        preNodeK2.next = nodeK1;
        nodeK2.next = nodeK1.next;
        nodeK1.next = nodeK2;
    } else if (nodeK1 !== nodeK2) {
        node = nodeK1.next;
        nodeK1.next = nodeK2.next;
        nodeK2.next = node;
        preNodeK1.next = nodeK2;
        preNodeK2.next = nodeK1;
    }

    return newHead.next;
};
