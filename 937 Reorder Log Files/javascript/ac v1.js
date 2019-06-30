/**
 * @param {string[]} logs
 * @return {string[]}
 * @result
 * Runtime: 68 ms, faster than 63.45% of JavaScript online submissions for Reorder Log Files.
 * Memory Usage: 38.3 MB, less than 16.88% of JavaScript online submissions for Reorder Log Files.
 * @ac_test_case
 * ["a1 9 2 3 1","g1 act car","zo4 4 7","ab1 off key dog","a8 act zoo"]
 * ["a1 9 2 3 1"]
 * ["a1 9 2 3 1", "zo4 4 7"]
 * ["ab1 off key dog"]
 * ["g1 act car", "ab1 off key dog"]
 */
var reorderLogFiles = function(logs) {
    let res = [];

    function insertRes (str) {
        let item;
        let substr = str.substring(str.indexOf(" ") + 1);

        for (let i = 0, len = res.length; i < len; i++) {
            item = res[i].split(" ");
            if (isNaN(item[1])) {
                if (substr > res[i].substring(res[i].indexOf(" ") + 1)) {
                    if (i === len - 1) {
                        res.push(str);
                    } else {
                        continue;
                    }
                } else {
                    res.splice(i, 0, str);
                    break;
                }
            } else {
                res.splice(i, 0, str);
                break;
            }
        }
    }

    if (!logs.length) {
        return res;
    } else {
        res.push(logs[0]);
    }

    for (let i = 1, len = logs.length; i < len; i++) {
        let log = logs[i].split(" ");

        if (isNaN(log[1])) {
            insertRes(logs[i]);
        } else {
            res.push(logs[i]);
        }
    }
    
    return res;
};
