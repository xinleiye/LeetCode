/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function(products, searchWord) {
    let res = [];
    let src = products;
    let tar = "";

    // 暴力搜索，从 searchWord[0] 开始，searchWord[i + 1] 基于 searchWord[i] 的结果进行
    products.sort();
    for (let i = 0; i < searchWord.length; i++) {
        let matched = [];
        
        tar = tar + searchWord[i];
        for (let j = 0; j < src.length; j++) {
            if (src[j].indexOf(tar) === 0) {
                matched.push(src[j]);
            }
        }
        if (matched.length > 3) {
            res.push([matched[0], matched[1], matched[2]]);
        } else {
            res.push(matched);
        }
        src = matched;
    }

    return res;
};
