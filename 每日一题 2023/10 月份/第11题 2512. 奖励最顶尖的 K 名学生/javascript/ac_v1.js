/**
 * @param {string[]} positive_feedback
 * @param {string[]} negative_feedback
 * @param {string[]} report
 * @param {number[]} student_id
 * @param {number} k
 * @return {number[]}
 */
var topStudents = function(positive_feedback, negative_feedback, report, student_id, k) {
    const studentIDMap = new Map();
    for (const id of student_id) {
        studentIDMap.set(id, 0);
    }

    const positiveWordSet = new Set();
    for (const w of positive_feedback) {
        positiveWordSet.add(w);
    }

    const negativeWordSet = new Set();
    for (const w of negative_feedback) {
        negativeWordSet.add(w);
    }

    const reportCount = report.length;
    for (let i = 0; i < reportCount; i++) {
        const id = student_id[i];
        const reportWord = report[i].split(" ");
        let score = studentIDMap.get(id);

        for (const w of reportWord) {
            if (positiveWordSet.has(w)) {
                score += 3;
            } else if (negativeWordSet.has(w)) {
                score--;
            }
        }
        studentIDMap.set(id, score);
    }

    const res = [];
    studentIDMap.forEach((score, id) => {
        res.push({
            id,
            score
        });
    });
    res.sort((r1, r2) => {
        if (r1.score !== r2.score) {
            return r2.score - r1.score;
        } else {
            return r1.id - r2.id;
        }
    });

    return res.splice(0, k).map(({ id }) => id);
};
