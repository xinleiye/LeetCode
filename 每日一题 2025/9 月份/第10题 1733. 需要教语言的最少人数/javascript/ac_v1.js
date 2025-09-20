/**
 * @param {number} n
 * @param {number[][]} languages
 * @param {number[][]} friendships
 * @return {number}
 */
var minimumTeachings = function(n, languages, friendships) {
    const total = languages.length;
    const canUse = new Array(total + 1).fill(0).map(_ => new Array(n + 1).fill(0));
    for (let i = 1; i <= total; i++) {
        for (const x of languages[i - 1]) {
            canUse[i][x] = true;
        }
    }

    let needLearn = 0;
    let visited = new Array(total + 1).fill(false);
    const count = new Array(n + 1).fill(0);
    const calcUse = (user) => {
        if (visited[user]) {
            return;
        }
        visited[user] = true;
        needLearn++;
        for (const x of languages[user - 1]) {
            count[x]++;
        }
    }
    for (const [f1, f2] of friendships) {
        let canTalk = false;
        for (const x of languages[f1 - 1]) {
            if (canUse[f2][x]) {
                canTalk = true;
                break;
            }
        }
        if (!canTalk) {
            calcUse(f1);
            calcUse(f2);
        }
    }

    let maxCount = 0;
    for (const c of count) {
        maxCount = Math.max(maxCount, c);
    }

    return needLearn - maxCount;
};
