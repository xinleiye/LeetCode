/**
 * @param {number[][]} points
 * @param {number} angle
 * @param {number[]} location
 * @return {number}
 */
var visiblePoints = function(points, angle, location) {
    let maxPoint = 0;
    let samePoint = 0;
    const polarDegrees = [];
    const toDegree = angle * Math.PI / 180;

    for (const [x, y] of points) {
        if (x === location[0] && y === location[1]) {
            samePoint++;
            continue;
        }
        polarDegrees.push(Math.atan2(y - location[1], x - location[0]));
    }
    polarDegrees.sort((d1, d2) => d1 - d2);
    for (let i = 0, len = polarDegrees.length; i < len; i++) {
        polarDegrees.push(polarDegrees[i] + Math.PI * 2);
    }
    for (let i = 0, len = polarDegrees.length / 2; i < len; i++) {
        maxPoint = Math.max(maxPoint, binarySearch(polarDegrees, polarDegrees[i] + toDegree) - i);
    }

    return maxPoint + samePoint;
};

const binarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;
    let res = 0;

    while (left <= right) {
        const mid = (left + right) >>> 1;

        if (arr[mid] > target) {
            right = mid - 1;
            res = mid;
        } else {
            left = mid + 1;
        }
    }

    return res;
};
