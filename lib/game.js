"use strict";

var _board = require("./board.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Game =
/*#__PURE__*/
function () {
  function Game(numberOfRows, numberOfColumns, numberOfBombs) {
    _classCallCheck(this, Game);

    this._board = new _board.Board(numberOfRows, numberOfColumns, numberOfBombs);
  }

  _createClass(Game, [{
    key: "playMove",
    value: function playMove(rowIndex, columnIndex) {
      this._board.flipTile(rowIndex, columnIndex);

      if (this._board.playerBoard[rowIndex][columnIndex] === 'B') {
        // game over
        console.log('BOMB!! Game over!!'); //this._board.print(this._board.playerBoard);

        _board.Board.print(this._board.playerBoard);
      } else if (!this._board.hasSafeTiles()) {
        // player wins
        console.log('Congratulations, you win!!');
      } else {
        // game continues
        console.log('Current Board:'); //this._board.print(this._board.playerBoard);

        _board.Board.print(this._board.playerBoard);
      }
    }
  }]);

  return Game;
}();