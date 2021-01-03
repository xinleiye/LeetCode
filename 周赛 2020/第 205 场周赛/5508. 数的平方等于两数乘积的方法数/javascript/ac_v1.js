/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var numTriplets = function(nums1, nums2) {
    let res = 0;
    let nums1Square;
    let nums2Square;
    let nums1Multi;
    let nums2Multi;
    let increaseOrder = (val1, val2) => {
        return val1 - val2;
    };

    nums1Square = getSquare(nums1).sort(increaseOrder);
    nums2Square = getSquare(nums2).sort(increaseOrder);

    nums1Multi = getMuilti(nums1).sort(increaseOrder);
    nums2Multi = getMuilti(nums2).sort(increaseOrder);

    res += getResult(nums1Square, nums2Multi);
    res += getResult(nums2Square, nums1Multi);

    return res;
};

function getSquare (nums) {
    let square = new Array(nums.length);

    for (let i = 0; i < nums.length; i++) {
        square[i] = nums[i] * nums[i];
    }

    return square;
}

function getMuilti (nums) {
    let arr = [];
    let length = nums.length;

    for (let i = 0; i < length - 1; i++) {
        for (let j = i + 1; j < length; j++) {
            arr.push(nums[i] * nums[j]);
        }
    }

    return arr;
}

function getResult (nums1, nums2) {
    let res = 0;
    let resMap = new Map();

    for (let i = 0; i < nums1.length; i++) {
        let count = 0;

        if (resMap.has(nums1[i])) {
            res += resMap.get(nums1[i]);
            continue;
        }
        for (let j = 0; j < nums2.length; j++) {
            if (nums2[j] === nums1[i]) {
                count++;
            } else if (nums2[j] < nums1[i]) {
                continue;
            } else {
                break;
            }
        }
        resMap.set(nums1[i], count);
        res += count;
    }

    return res;
}

// 二分查找，由于有重复数字，故无效
// function getResult (nums1, nums2) {
//     let res = 0;

//     for (let i = 0; i < nums1.length; i++) {
//         let left = 0;
//         let right = nums2.length - 1;
//         let mid;

//         while (left <= right) {
//             mid = (left + right) >>> 1;
//             if (nums2[mid] === nums1[i]) {
//                 res++;
//                 break;
//             } else if (nums2[mid] > nums1[i]) {
//                 right = mid - 1;
//             } else {
//                 left = mid + 1;
//             }
//         }
//     }

//     return res;
// }
