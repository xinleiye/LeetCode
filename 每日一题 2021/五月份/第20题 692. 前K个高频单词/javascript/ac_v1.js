/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    let wordMap = new Map();
    let wordArr = [];
    let wordCount = [];
    let wordIndexMap = new Map();

    words.forEach(word => {
        if (wordMap.has(word)) {
            wordMap.set(word, wordMap.get(word) + 1);
        } else {
            wordMap.set(word, 1);
            wordArr.push(word)
        }
    });

    wordArr.forEach((word, index) => {
        wordCount.push(wordMap.get(word));
        wordIndexMap.set(word, index);
    });

    wordArr.sort((word1, word2) => {
        const count1 = wordCount[wordIndexMap.get(word1)];
        const count2 = wordCount[wordIndexMap.get(word2)];

        if (count1 === count2) {
            return word1 > word2 ? 1 : -1;
        } else {
            return count2 - count1;
        }
    });

    return wordArr.slice(0, k);
};
