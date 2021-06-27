/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
    let res = 0;
    const length = points.length;

    if (length <= 2) {
        return length;
    }
    for (let i = 0; i < length; i++) {
        let max = 0;
        const kMap = new Map();

        if (res >= length - i || res > length / 2) {
            break;
        }
        for (let j = i + 1; j < length; j++) {
            let hash;
            let dx = points[i][0] - points[j][0];
            let dy = points[i][1] - points[j][1];

            if (dx === 0) {
                dy = 1;
            } else if (dy === 0) {
                dx = 1;
            } else {
                let gcdXY;

                if (dy < 0) {
                    dx = -dx;
                    dy = -dy;
                }

                gcdXY = gcd(Math.abs(dx), Math.abs(dy));
                dx = dx / gcdXY;
                dy = dy / gcdXY;
            }
            hash = dy + dx * 20001;
            if (kMap.has(hash)) {
                kMap.set(hash, kMap.get(hash) + 1);
            } else {
                kMap.set(hash, 1);
            }
            kMap.forEach((val, key) => {
                max = Math.max(max, val + 1);
            });
            res = Math.max(res, max);
        }
    }

    return res;
};

function gcd (num1, num2) {
    let num;

    while (num2 > 0) {
        num = num1 % num2;
        num1 = num2;
        num2 = num;
    }

    return num1;
}
