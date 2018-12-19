export class Board {
    constructor(numberOfRows, numberOfColumns, numberOfBombs) {
        this._numberOfBombs = numberOfBombs;
        this._numberOfTiles = numberOfRows * numberOfColumns;
        this._playerBoard = Board.generatePlayerBoard(numberOfRows, numberOfColumns);
        this._bombBoard = Board.generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs);
    }

    get playerBoard() {
        return this._playerBoard;
    }

    flipTile(rowIndex, columnIndex) {
        if (this.playerBoard[rowIndex][columnIndex] !== ' ') {
            console.log('This tile has already been flipped!');
        } else if (this._bombBoard[rowIndex][columnIndex] === 'B') {
            this.playerBoard[rowIndex][columnIndex] = 'B';
        } else {
            this.playerBoard[rowIndex][columnIndex]
                = this.getNumberOfNeighborBombs(rowIndex, columnIndex);
        }
        this._numberOfTiles -= 1;
    }

    getNumberOfNeighborBombs(rowIndex, columnIndex) {
        const neighborOffsets = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
        const numberOfRows = this._bombBoard.length;
        const numberOfColumns = this._bombBoard[1].length;
        let numberOfBombs = 0;
        neighborOffsets.forEach(offset => {
            const neighborRowIndex = rowIndex + offset[0];
            const neighborColumnIndex = columnIndex + offset[1];
            if ((neighborRowIndex >= 0)
                && (neighborRowIndex <= numberOfRows)
                && (neighborColumnIndex >= 0)
                && (neighborColumnIndex <= numberOfColumns)) {
                if (this._bombBoard[neighborRowIndex][neighborColumnIndex] === "B") {
                    numberOfBombs += 1;
                }
            }
        });
        return numberOfBombs;
    }

    hasSafeTiles() {
        return this._numberOfTiles !== this._numberOfBombs;
    }

    static print(board) {
        console.log(board.map(row => row.join(' | ')).join('\n'));
    }

    static generatePlayerBoard(numberOfRows, numberOfColumns) {
        let board = [];
        for (let i = 0; i < numberOfRows; i += 1){
            let row = [];
            for (let j = 0; j < numberOfColumns; j += 1) {
                row.push(' ');
            }
            board.push(row);
        }
        return board;
    }

    static generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {
        let board = [];
        for (let i = 0; i < numberOfRows; i += 1){
            let row = [];
            for (let j = 0; j < numberOfColumns; j += 1) {
                row.push(null);
            }
            board.push(row);
        }
        let numberOfBombsPlaced = 0;
        while (numberOfBombsPlaced < numberOfBombs) {
            let randomRowIndex = Math.floor(Math.random() * numberOfRows);
            let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
            if (board[randomRowIndex][randomColumnIndex] !== 'B') {
                board[randomRowIndex][randomColumnIndex] = 'B';
                numberOfBombsPlaced += 1;
            }
        }
        return board;
    }
}