/**
 * @param {number[]} start1
 * @param {number[]} end1
 * @param {number[]} start2
 * @param {number[]} end2
 * @return {number[]}
 */
var intersection = function(start1, end1, start2, end2) {
    let res = [];
    let x1 = start1[0];
    let y1 = start1[1];
    let x2 = end1[0];
    let y2 = end1[1];
    let x3 = start2[0];
    let y3 = start2[1];
    let x4 = end2[0];
    let y4 = end2[1];
    let isContain = (x1, y1, x2, y2, tx, ty) => {
        return (x1 === x2 || (Math.min(x1, x2) <= tx && tx <= Math.max(x1, x2))) && (y1 === y2 || Math.min(y1, y2) <= ty && ty <= Math.max(y1, y2)) ;
    };
    let updateRes = (tx, ty) => {
        if (!res.length || tx < res[0] || tx === res[0] && ty < res[1]) {
            res[0] = tx;
            res[1] = ty;
        }
    };
    // 基于参数表示法的解：x = x1 + t1(x2 - x1), y = y1 + t1(y2 - y1);
    // 两个线段平行
    if ((y4 - y3) * (x2 - x1) === (x4 - x3) * (y2 - y1)) {
        // 在同一条直线上
        if ((y4 - y3) * (x3 - x2) === (x4 - x3) * (y3 - y2)) {
            if (isContain(x1, y1, x2, y2, x3, y3)) {
                updateRes(x3, y3);
            }
            if (isContain(x1, y1, x2, y2, x4, y4)) {
                updateRes(x4, y4);
            }
            if (isContain(x3, y3, x4, y4, x1, y1)) {
                updateRes(x1, y1);
            }
            if (isContain(x3, y3, x4, y4, x2, y2)) {
                updateRes(x2, y2);
            }
        }
    } else {
        let t1 = (x3 * (y4 - y3) + y1 * (x4 - x3) - y3 * (x4 - x3) - x1 * (y4 - y3)) / ((y4 - y3) * (x2 - x1) - (y2 - y1) * (x4 - x3));
        let t2 = (x1 * (y2 - y1) + y3 * (x2 - x1) - y1 * (x2 - x1) - x3 * (y2 - y1)) / ((x4 - x3) * (y2 - y1) - (x2 - x1) * (y4 - y3));

        if (t1 >= 0 && t1 <= 1 && t2 >= 0 && t2 <= 1) {
            res[0] = x1 + t1 * (x2 - x1);
            res[1] = y1 + t1 * (y2 - y1);
        }
    }

    return res;
};
