/**
 * @param {number[]} data
 * @return {boolean}
 */
var validUtf8 = function(data) {
    let res = true;
    const totalBytes = data.length;
    let curIndex = 0;

    while (curIndex < totalBytes) {
        let len = 0;

        if ((data[curIndex] & 0xF8) === 0xF8) {
            res = false;
            break;
        }
        if ((data[curIndex] & 0xF0) === 0xF0) {
            len = 4;
        } else if ((data[curIndex] & 0xE0) === 0xE0) {
            len = 3;
        } else if ((data[curIndex] & 0xC0) === 0xC0) {
            len = 2;
        } else if ((data[curIndex] & 0x80) === 0x0){
            len = 1;
        }
        if (len === 0 || curIndex + len > totalBytes) {
            res = false;
            break;
        }
        for (let i = 1; i < len; i++) {
            if ((data[curIndex + i] & 0x80) !== 0x80) {
                res = false;
                break;
            }
        }
        if (!res) {
            break;
        }
        curIndex += len;
    }

    return res;
};
