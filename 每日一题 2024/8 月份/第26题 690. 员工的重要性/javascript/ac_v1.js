/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function(employees, id) {
    const employeeMap = new Map();
    for (const e of employees) {
        employeeMap.set(e.id, e);
    }

    let res = employeeMap.get(id).importance;
    let subs = employeeMap.get(id).subordinates;
    while (subs.length) {
        const newSubs = [];
        for (const subId of subs) {
            const cur = employeeMap.get(subId);
            res += cur.importance;
            newSubs.push(...cur.subordinates);
        }
        subs = newSubs;
    }

    return res;
};
