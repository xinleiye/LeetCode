/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
    const res = [];
    const insertRes = (str) => {
        const substr = str.substring(str.indexOf(" ") + 1);

        for (let i = 0, len = res.length; i < len; i++) {
            const item = res[i].split(" ");
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
    };

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
