/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let res = null;
    let mergeList = (tar, src) => {
        let preNode;
        let head;

        if (!src) {
            return tar;
        }
        if (!tar) {
            head = new ListNode(0);
            tar = head;
            while (src) {
                tar.next = new ListNode(src.val);
                tar = tar.next;
                src = src.next;
            }

            return head.next;
        }

        head = new ListNode(0);
        preNode = head;
        head.next = tar;
        while (tar && src) {
            if (tar.val <= src.val) {
                preNode = tar;
                tar = tar.next;
            } else {
                let node = new ListNode(src.val);

                node.next = tar;
                preNode.next = node;
                preNode = node;
                src = src.next;
            }
        }

        while (src) {
            let node = new ListNode(src.val);

            preNode.next = node;
            preNode = node;
            src = src.next;
        }

        return head.next;
    }

    for (let i = 0; i < lists.length; i++) {
        res = mergeList(res, lists[i]);
    }

    return res;
};
