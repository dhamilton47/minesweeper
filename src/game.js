// To play Minesweeper, we will create instances of MineSweeperGame in command line.
// For example:
// In the command line, navigate to the lib directory and run `node`
// Run `.load game.js` to load the contents of this file.
// Then create a Game instance and run commands like so:
// let game = new Game(3, 3, 3);
// game.playMove(0, 1);
// game.playMove(1, 2);
// When done run `.exit`

import{ Board } from './board.js';

class Game{
    constructor(numberOfRows, numberOfColumns, numberOfBombs) {
        this._board = new Board(numberOfRows, numberOfColumns, numberOfBombs);
    }

    playMove(rowIndex, columnIndex) {
        this._board.flipTile(rowIndex, columnIndex);

        if (this._board.playerBoard[rowIndex][columnIndex] === 'B') {
            // game over
            console.log('BOMB!! Game over!!');
            //this._board.print(this._board.playerBoard);
            Board.print(this._board.playerBoard);
        } else if (!this._board.hasSafeTiles()) {
            // player wins
            console.log('Congratulations, you win!!');
        } else {
            // game continues
            console.log('Current Board:');
            //this._board.print(this._board.playerBoard);
            Board.print(this._board.playerBoard);
        }
    }
}
