/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
    const res = [];
    const dir = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    const visited = new Array(board.length);
    const maxRow = board.length;
    const maxCol = board[0].length;
    const tree = new TrieTree();

    const dfsSearch = (node, row, col, word) => {
        const ch = board[row][col];
        const index = ch.charCodeAt(0) - 97;

        if (!node.chars[index]) {
            return;
        }
        word.push(ch);
        visited[row][col] = true;
        node = node.chars[index];
        if (node.isEnd) {
            res.push(word.join(""));
            node.isEnd = false;
        }
        for (let i = 0; i < 4; i++) {
            const aRow = row + dir[i][0];
            const aCol = col + dir[i][1];

            if (aRow >= 0 && aRow < maxRow && aCol >= 0 && aCol < maxCol) {
                if (!visited[aRow][aCol]) {
                    dfsSearch(node, aRow, aCol, word);
                }
            }
        }
        word.pop();
        visited[row][col] = false;
    };

    for (let i = 0; i < maxRow; i++) {
        visited[i] = new Array(maxCol).fill(false);
    }
    words.forEach(word => {
        tree.insert(word);
    });
    for (let i = 0; i < maxRow; i++) {
        for (let j = 0; j < maxCol; j++) {
            dfsSearch(tree.root, i, j, []);
        }
    }

    return res;
};


/**
 * 只包含小写字母的前缀树
 */
class TrieNode {
    constructor () {
        this.chars =  new Array(26).fill(null);
        this.isEnd = false;
    }
}
class TrieTree {
    constructor () {
        this.root = new TrieNode();
    }
    insert (str) {
        let currentNode = this.root;

        for (let i = 0; i < str.length; i++) {
            let index = str.charCodeAt(i) - 97;

            if (currentNode.chars[index] === null) {
                currentNode.chars[index] = new TrieNode();
            }
            currentNode = currentNode.chars[index];
        }

        currentNode.isEnd = true;
    }
    find (str) {
        let currentNode = this.root;

        for (let i = 0; i < str.length; i++) {
            let index = str.charCodeAt(i) - 97;

            if (currentNode.chars[index] === null) {
                return false;
            }
            currentNode = currentNode.chars[index];
        }

        return currentNode.isEnd;
    }
}
