const binarySearch = (arr, tar) => {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        const mid = (left + right) >>> 1;

        if (arr[mid] < tar) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return left;
};
