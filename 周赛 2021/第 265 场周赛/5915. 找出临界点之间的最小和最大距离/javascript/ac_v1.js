/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nodesBetweenCriticalPoints = function(head) {
    const nums = [];
    const points = [];

    while (head) {
        nums.push(head.val);
        head = head.next;
    }

    for (let i = 1, len = nums.length - 1; i < len; i++) {
        if ((nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) ||
            (nums[i] < nums[i - 1] && nums[i] < nums[i + 1])) {
            points.push(i);
        }
    }

    if (points.length < 2) {
        return [-1, -1];
    } else {
        let minDis = 1e5;

        for (let i = 1; i < points.length; i++) {
            minDis = Math.min(minDis, points[i] - points[i - 1]);
        }

        return [minDis, points[points.length - 1] - points[0]];
    }
};
