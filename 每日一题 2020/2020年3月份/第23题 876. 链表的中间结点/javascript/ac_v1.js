/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let stepOne = head;
    let stepTwo = head;

    while (stepTwo !== null && stepTwo.next !== null) {
        stepOne = stepOne.next;
        stepTwo = stepTwo.next.next;
    }

    return stepOne;
};
