const gameBoard = () => {
  const board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  let play1 = 'Player1';
  let play2 = 'Player2';

  const changeSpace = (space, value) => {
    board[space] = value;
  };
  const getValue = (space) => (board[space]);

  const setPlayerName = (name, value) => {
    if (value === true) {
      play1 = name;
    } else {
      play2 = name;
    }
  };

  const getPlayerName = (value) => {
    let play;
    if (value === true) {
      play = play1;
    } else {
      play = play2;
    }
    return play;
  };

  return {
    board, changeSpace, getValue, play1, play2, setPlayerName, getPlayerName,
  };
};

const playTurn = (value) => {
  let playerTurn = value;

  const setPlayerTurn = (value) => {
    playerTurn = value;
  };
  const getPlayerTurn = () => (playerTurn);

  return { playerTurn, setPlayerTurn, getPlayerTurn };
};

function init() {
  const board = gameBoard();
  return (board);
}

function initPlayTurn() {
  const playerTurn = playTurn(1);
  return (playerTurn);
}

function playGame() {
  const board = init();
  const playerTurn = initPlayTurn();
}

function updateSpace(board, space, value) {
  board.changeSpace(space, value);
}

function checkBoard(board) {
  for (let i = 0; i <= 2; i += 1) {
    if ((board.getValue(i * 3) === board.getValue(i * 3 + 1)
        && board.getValue(i * 3) === board.getValue(i * 3 + 2)
        && board.getValue(i * 3) !== 0)
        || (board.getValue(i) === board.getValue(i + 3)
        && board.getValue(i) === board.getValue(i + 6)
        && board.getValue(i) !== 0)) {
      return true;
    }
  }

  if ((board.getValue(0) === board.getValue(4)
      && board.getValue(0) === board.getValue(8)
      && board.getValue(0) !== 0)
      || (board.getValue(2) === board.getValue(4)
      && board.getValue(2) === board.getValue(6)
      && board.getValue(2) !== 0)) {
    return true;
  }

  return false;
}

function changeTurn(playerTurn) {
  if (playerTurn.getPlayerTurn() === 1) {
    playerTurn.setPlayerTurn(2);
  } else {
    playerTurn.setPlayerTurn(1);
  }
  return playerTurn;
}

function movement(value, board, playerTurn) {
  updateSpace(board, value, playerTurn.getPlayerTurn());

  if (checkBoard(board) === false) {
    playerTurn = changeTurn(playerTurn);
  } else if (playerTurn.getPlayerTurn() === 1) {
    return 'won1';
  } else {
    return 'won2';
  }
  return playerTurn.getPlayerTurn();
}


export {
  gameBoard, playGame, init,
};
