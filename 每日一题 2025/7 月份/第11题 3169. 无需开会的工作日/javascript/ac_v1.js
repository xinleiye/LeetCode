/**
 * @param {number} days
 * @param {number[][]} meetings
 * @return {number}
 */
var countDays = function(days, meetings) {
    let res = 0;
    let pre = 0;
    let index = 0;
    const total = meetings.length;

    meetings.sort((m1, m2) => m1[0] - m2[0]);
    while (index < total) {
        let [left, right] = meetings[index];

        index++;
        while (index < total && meetings[index][0] <= right) {
            right = Math.max(right, meetings[index][1]);
            index++;
        }
        res += left - pre - 1;
        pre = right;
    }
    res += days - pre;

    return res;
};
