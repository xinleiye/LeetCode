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
    let res = 0;
    const employeeMap = new Map();
    const dfs = (employeeId) => {
        let currentEmployee = employeeMap.get(employeeId);

        res += currentEmployee.weight;
        for (let item of currentEmployee.sub) {
            dfs(item);
        }
    };

    employees.forEach(item => {
        console.log(item);
        employeeMap.set(item.id, {
            weight: item.importance,
            sub: item.subordinates
        });
    });

    dfs(id);

    return res;
};
