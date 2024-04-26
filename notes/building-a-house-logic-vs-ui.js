// The pupose of thhis is to learn how to separate state logic from UI and DOM driven logic decisions.
// The main analogy is building a house from the inside out. 

// Pretend for a moment that building a game application is something like building a house. Imagine 
// your dream house, and what it looks like in its final form. You're probably imagining all the elements 
// of a house that are supposed to be seen from the outside and enjoyed aesthetically: the outside of the 
// house, painted to your liking, decorations, the front yard, a charming front door. As you move inside, 
// each room looks like it came straight from HGTV. Brand new appliances, furniture, etc...

// But what about the structural elements of the house? Of course we appreciate those things too, but we 
// don't often think about them because their implementation is hidden from our view in the final product.

// In the same way, our application's user interface should be a visual representation of underlying 
// application logic. In other words, behind everything that makes our game look and feel nice, there 
// should be solid, foundational code. 

// Just like a builder would first consider the structural design and blueprints of a house before beginning 
// to imagine walls, doors, and windows, let's attempt to think through how our application is going to 
// function at its core before implementing details in the user interface.

// Our DOM elements and queries should NOT be responsible for storing or handling the implementation details
// of how our application works. That is not their responsibility, nor what they were designed to do. 
// The DOM should be responsible for reading and displaying the application state to the user and providing an 
// easy-to-use gateway to interact with the methods it needs to. For example, if I am making a game, my UI 
// should have access to a method it needs to use in order to play a round. This method should be simple to 
// call and as restrictive as possible (meaning, it should not need to provide a multitude of arguments to 
// do something). Conversely, the DOM probably doesn't need access to a way of changing which player's turn it is.

// ***One great strategy to help keep game logic separate from your UI is to challenge yourself to build the game so 
// that it can be played, in full, in the console. ***

_____________________________

/*
** The Gameboard represents the state of the board
** Each equare holds a Cell (defined later)
** and we expose a dropToken method to be able to add Cells to squares
*/

function Gameboard() {
  const rows = 6;
  const columns = 7;
  const board = [];

  // Create a 2d array that will represent the state of the game board
  // For this 2d array, row 0 will represent the top row and
  // column 0 will represent the left-most column.
  // This nested-loop technique is a simple and common way to create a 2d array.
  for (let i = 0; i < rows; i++) {
    board[i] = [];
    for (let j = 0; j < columns; j++) {
      board[i].push(Cell()); 
    }
  }

  // This will be the method of getting the entire board that our
  // UI will eventually need to render it.
  const getBoard = () => board;

  // In order to drop a token, we need to find what the lowest point of the
  // selected column is, *then* change that cell's value to the player number
  const dropToken = (column, player) => {
    // Our board's outermost array represents the row,
    // so we need to loop through the rows, starting at row 0,
    // find all the rows that don't have a token, then take the
    // last one, which will represent the bottom-most empty cell
    const availableCells = board.filter((row) => row[column].getValue() === 0).map(row => row[column]);

    // If no cells make it through the filter, 
    // the move is invalid. Stop execution.
    if (!availableCells.length) return;

    // Otherwise, I have a valid cell, the last one in the filtered array
    const lowestRow = availableCells.length - 1;
    board[lowestRow][column].addToken(player);
  };

  // This method will be used to print our board to the console.
  // It is helpful to see what the board looks like after each turn as we play,
  // but we won't need it after we build our UI
  const printBoard = () => {
    const boardWithCellValues = board.map((row) => row.map((cell) => cell.getValue()))
    console.log(boardWithCellValues);
  };

  // Here, we provide an interface for the rest of our
  // application to interact with the board
  return { getBoard, dropToken, printBoard };
}

/*
** A Cell represents one "square" on the board and can have one of
** 0: no token is in the square,
** 1: Player One's token,
** 2: Player 2's token
*/

function Cell() {
  let value = 0;

  // Accept a player's token to change the value of the cell
  const addToken = (player) => {
    value = player;
  };

  // How we will retrieve the current value of this cell through closure
  const getValue = () => value;

  return {
    addToken,
    getValue
  };
}

/* 
** The GameController will be responsible for controlling the 
** flow and state of the game's turns, as well as whether
** anybody has won the game
*/
function GameController(
  playerOneName = "Player One",
  playerTwoName = "Player Two"
) {
  const board = Gameboard();

  const players = [
    {
      name: playerOneName,
      token: 1
    },
    {
      name: playerTwoName,
      token: 2
    }
  ];

  let activePlayer = players[0];

  const switchPlayerTurn = () => {
    activePlayer = activePlayer === players[0] ? players[1] : players[0];
  };
  const getActivePlayer = () => activePlayer;

  const printNewRound = () => {
    board.printBoard();
    console.log(`${getActivePlayer().name}'s turn.`);
  };

  const playRound = (column) => {
    // Drop a token for the current player
    console.log(
      `Dropping ${getActivePlayer().name}'s token into column ${column}...`
    );
    board.dropToken(column, getActivePlayer().token);

    /*  This is where we would check for a winner and handle that logic,
        such as a win message. */

    // Switch player turn
    switchPlayerTurn();
    printNewRound();
  };

  // Initial play game message
  printNewRound();

  // For the console version, we will only use playRound, but we will need
  // getActivePlayer for the UI version, so I'm revealing it now
  return {
    playRound,
    getActivePlayer
  };
}

const game = GameController();
_____________________________

// It's worth noting at this point that the beauty of decoupled code is that 
// changing the implementation of any of the sub-modules will not require us 
// to rewrite our whole program. Say, for instance, we wanted to create a 
// version where the rows filled from the top-down. All we'd need to change is 
// the Gameboard.dropToken() method's details, and the rest of the game would 
// still run as intended.

// Take a moment to understand that the only way the UI should need to interact
//  with the core game code in order to play a round is through the GameController.playRound() method. 
//  The cells are buttons, not divs. Why? In most cases, anything clickable should be a button or link. 
//  This enables those with accessibility issues to still be able to use our site easily be tabbing and 
//  selecting with the keyboard.

 ______________________

 function Gameboard() {
  const rows = 6;
  const columns = 7;
  const board = [];

  for (let i = 0; i < rows; i++) {
    board[i] = [];
    for (let j = 0; j < columns; j++) {
      board[i].push(Cell());
    }
  }

  const getBoard = () => board;

  const dropToken = (column, player) => {
    const availableCells = board.filter((row) => row[column].getValue() === 0).map(row => row[column]);

    if (!availableCells.length) return;

    const lowestRow = availableCells.length - 1;
    board[lowestRow][column].addToken(player);
  };

  const printBoard = () => {
    const boardWithCellValues = board.map((row) => row.map((cell) => cell.getValue()))
    console.log(boardWithCellValues);
  };

  return { getBoard, dropToken, printBoard };
}

function Cell() {
  let value = 0;

  const addToken = (player) => {
    value = player;
  };

  const getValue = () => value;

  return {
    addToken,
    getValue
  };
}

function GameController(
  playerOneName = "Player One",
  playerTwoName = "Player Two"
) {
  const board = Gameboard();

  const players = [
    {
      name: playerOneName,
      token: 1
    },
    {
      name: playerTwoName,
      token: 2
    }
  ];

  let activePlayer = players[0];

  const switchPlayerTurn = () => {
    activePlayer = activePlayer === players[0] ? players[1] : players[0];
  };
  const getActivePlayer = () => activePlayer;

  const printNewRound = () => {
    board.printBoard();
    console.log(`${getActivePlayer().name}'s turn.`);
  };

  const playRound = (column) => {
    console.log(
      `Dropping ${getActivePlayer().name}'s token into column ${column}...`
    );
    board.dropToken(column, getActivePlayer().token);

    /*  This is where we would check for a winner and handle that logic,
        such as a win message. */

    switchPlayerTurn();
    printNewRound();
  };

  printNewRound();

  return {
    playRound,
    getActivePlayer,
    getBoard: board.getBoard
  };
}

function ScreenController() {
  const game = GameController();
  const playerTurnDiv = document.querySelector('.turn');
  const boardDiv = document.querySelector('.board');

  const updateScreen = () => {
    // clear the board
    boardDiv.textContent = "";

    // get the newest version of the board and player turn
    const board = game.getBoard();
    const activePlayer = game.getActivePlayer();

    // Display player's turn
    playerTurnDiv.textContent = `${activePlayer.name}'s turn...`

    // Render board squares
    board.forEach(row => {
      row.forEach((cell, index) => {
        // Anything clickable should be a button!!
        const cellButton = document.createElement("button");
        cellButton.classList.add("cell");
        // Create a data attribute to identify the column
        // This makes it easier to pass into our `playRound` function 
        cellButton.dataset.column = index
        cellButton.textContent = cell.getValue();
        boardDiv.appendChild(cellButton);
      })
    })
  }

  // Add event listener for the board
  function clickHandlerBoard(e) {
    const selectedColumn = e.target.dataset.column;
    // Make sure I've clicked a column and not the gaps in between
    if (!selectedColumn) return;
    
    game.playRound(selectedColumn);
    updateScreen();
  }
  boardDiv.addEventListener("click", clickHandlerBoard);

  // Initial render
  updateScreen();

  // We don't need to return anything from this module because everything is encapsulated inside this screen controller.
}

ScreenController();
__________________________ 

// It should be easy to recognize that once the console version of our game was created, implementing the user interface 
// was incredibly simple. We limited the scope of the DOM's interaction with our game to just 3 methods, and as a result 
// did not need to worry about querying nodes for their text content or anything messy like that. As a result, our code 
// is significantly easier to read, easier to debug, and more performant than the spaghettified, DOM-coupled, alternative.