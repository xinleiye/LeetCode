/**
 * @param {string[]} queries
 * @param {string} pattern
 * @return {boolean[]}
 */
var camelMatch = function(queries, pattern) {
    const patternLength = pattern.length;
    const queryLength = queries.length;
    const res = new Array(queryLength);

    for (let i = 0; i < queryLength; i++) {
        const q = queries[i];
        const qLen = q.length;
        let pIndex = 0;
        let qIndex = 0;

        while (qIndex < qLen) {
            const qCh = q[qIndex];

            if (qCh >= "A"  && qCh <= "Z") {
                if (qCh === pattern[pIndex]) {
                    qIndex++;
                    pIndex++;
                } else {
                    break;
                }
            } else {
                if (qCh === pattern[pIndex]) {
                    pIndex++;
                }
                qIndex++;
            }
        }
        res[i] = (qIndex === qLen) && (pIndex === patternLength);
    }

    return res;
};
