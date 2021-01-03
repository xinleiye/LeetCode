/**
 * @param {string[]} words
 * @param {character[]} letters
 * @param {number[]} score
 * @return {number}
 */
var maxScoreWords = function(words, letters, score) {
    let res = 0;
    let scoreMap = new Map();
    let lettersMap = new Map();
    let wordInfoMap = new Map();
    let mergeWordLetter = (tar, src) => {
        for (key in src) {
            if (tar[key]) {
                tar[key] += src[key];
            } else {
                tar[key] = src[key];
            }
        }
    };
    let isValidWord = (tar, src) => {
        for (key in tar) {
            if (!(src.has(key)) || tar[key] > src.get(key)) {
                return false;
            }
        }
        return true;
    };

    for (let i = 0; i < score.length; i++) {
        scoreMap.set(String.fromCharCode(97 + i), score[i]);
    }

    for (let letter of letters) {
        if (lettersMap.has(letter)) {
            lettersMap.set(letter, lettersMap.get(letter) + 1);
        } else {
            lettersMap.set(letter, 1);
        }
    }

    for (let word of words) {
        let wordInfo = {
            letter: {},
            score: 0
        };

        for (let i = 0; i < word.length; i++) {
            wordInfo.score += scoreMap.get(word[i]);
            if (wordInfo.letter[word[i]]) {
                wordInfo.letter[word[i]]++;
            } else {
                wordInfo.letter[word[i]] = 1;
            }
        }
        wordInfoMap.set(word, wordInfo);
    }

    for (let i = 0; i < Math.pow(2, words.length); i++) {
        let totalScore = 0;
        let wordsLetter = {};
        for (let j = 0; j < words.length; j++) {
            let wordInfo = wordInfoMap.get(words[j]);
            if (!(i & Math.pow(2, j))) {
                continue;
            }
            mergeWordLetter(wordsLetter, wordInfo.letter);
            if (isValidWord(wordsLetter, lettersMap)) {
                totalScore += wordInfo.score;
                res = Math.max(totalScore, res);
            }
        }
    }

    return res;
};
