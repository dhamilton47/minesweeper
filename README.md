# Minesweeper

This is a CLI-based game.

##### To begin playing Minesweeper:
```
$ cd lib
$ node
> .load game.js
> let game = new Game(numberOfRows, numberOfColumns, numberOfBombs);
```
In the last command above, replace the variables with integers.  For example, Game(5, 10, 15) will create a game board which has 5 rows, 10 columns and 15 bombs.

##### To turn a Tile on the game board:
```
> game.playMove(rowIndex, columnIndex);
```
In this command replace the variables with integers, where 
* 0 <= rowIndex < numberOfRows, and
* 0 <= columnIndex < numberOfColumns.

For example, game.playMove(0, 0) will turn over the first tile in the first row (note the 0-based indexing for the matrix).

##### To re-start:
```
> game = new Game(numberOfRows, numberOfColumns, numberOfBombs);
```
We have already created the variable 'game'.  So we do not need to use the keyword 'let' again.

##### To exit Node:
```
> .exit
```
