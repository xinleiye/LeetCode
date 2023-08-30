/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    const total = lists.length;
    const res = new ListNode(-1);
    const heads = new Array(total);
    let tail = res;

    for (let i = 0; i < total; i++) {
        heads[i] = lists[i];
    }
    while (true) {
        let minVal = 1e4;
        let minNode = null;
        let minIndex = -1;

        for (let i = 0; i < total; i++) {
            if (heads[i] && heads[i].val < minVal) {
                minVal = heads[i].val;
                minNode = heads[i];
                minIndex = i;
            }
        }
        if (minIndex >= 0) {
            tail.next = minNode;
            tail = tail.next;
            heads[minIndex] = minNode.next;
        } else {
            break;
        }
    }

    return res.next;
};
