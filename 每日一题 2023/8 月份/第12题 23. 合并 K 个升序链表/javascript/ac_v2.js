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
    let res = null;

    for (const list of lists) {
        res = mergeList(res, list);
    }

    return res;
};

function mergeList(list1, list2) {
    const head = new ListNode(-1);
    let tail = head;

    while (list1 && list2) {
        let curNode = list1;

        if (list2.val < curNode.val) {
            curNode = list2;
            list2 = list2.next;
        } else {
            list1 = list1.next;
        }
        tail.next = curNode;
        tail = tail.next;
    }
    while (list1) {
        tail.next = list1;
        tail = tail.next;
        list1 = list1.next;
    }
    while (list2) {
        tail.next = list2;
        tail = tail.next;
        list2 = list2.next;
    }

    return head.next;
}
