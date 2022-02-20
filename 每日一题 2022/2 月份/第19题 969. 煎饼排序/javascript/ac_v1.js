/**
 * @param {number[]} arr
 * @return {number[]}
 */
var pancakeSort = function(arr) {
    const res = [];

    for (let i = arr.length; i > 1; i--) {
        let maxIndex = 0;

        for (let j = 1; j < i; j++) {
            if (arr[j] >= arr[maxIndex]) {
                maxIndex = j;
            }
        }
        reverse(arr, 0, maxIndex);
        reverse(arr, 0, i - 1);
        res.push(maxIndex + 1);
        res.push(i);
    }

    return res;
};

const reverse = (arr, start, end) => {
    while (start < end) {
        const tmp = arr[start];

        arr[start] = arr[end];
        arr[end] = tmp;
        start++;
        end--;
    }
}
