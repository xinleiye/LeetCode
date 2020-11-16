/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
    let res = new Array(people.length).fill(null);

    // 按 people[0] 升序，若 people[0] 相同，则按 people[1] 降序
    people.sort((val1, val2) => {
        if (val1[0] === val2[0]) {
            return val2[1] - val1[1];
        } else {
            return val1[0] - val2[0];
        }
    });

    // 将每个 people 插入到第 people[1] + 1 个空位置
    for (let item of people) {
        let empty = item[1] + 1;

        for (let i = 0; i < people.length; i++) {
            if (res[i] === null) {
                empty--;
                if (empty === 0) {
                    res[i] = new Array(item[0], item[1]);
                    break;
                }
            }
        }
    }

    return res;
};
