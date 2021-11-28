/**
 * @param {string} street
 * @return {number}
 */
var minimumBuckets = function(street) {
    const length = street.length;
    const bucketSet = new Set();

    for (let i = 0; i < length; i++) {
        if (street[i] === 'H') {
            if (!bucketSet.has(i - 1) && !bucketSet.has(i + 1)) {
                if (i + 1 < length && street[i + 1] === '.') {
                    bucketSet.add(i + 1);
                } else if (i - 1 >= 0 && street[i - 1] === '.') {
                    bucketSet.add(i - 1);
                } else {
                    return -1;
                }
            }
        }
    }
    
    return bucketSet.size;
};
