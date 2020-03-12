import {
  render, openModel, openModelAI, closeModel, closeModelAI,
} from './dom';

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

const playTurn = () => {
  let playerTurn = true;

  const setPlayerTurn = () => {
    playerTurn = !playerTurn;
  };
  const getPlayerTurn = () => (playerTurn);

  return { playerTurn, setPlayerTurn, getPlayerTurn };
};

const playTurnAI = (value) => {
  let playerAI = value;

  const setPlayerTurnAI = (value) => {
    playerAI = value;
  };
  const getPlayerTurnAI = () => (playerAI);

  return { playerAI, setPlayerTurnAI, getPlayerTurnAI };
};

function init() {
  const board = gameBoard();
  return (board);
}

function initPlayTurn() {
  const playerTurn = playTurn();
  return (playerTurn);
}

function initPlayTurnAI() {
  const playAI = playTurnAI(true);
  return (playAI);
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

function setEventListeners(board, playerTurn) {
  for (let i = 0; i < 9; i += 1) {
    if (board.getValue(i) === 0) {
      // eslint-disable-next-line no-use-before-define
      document.getElementById(`space-${i}`).addEventListener('click', () => { movement(i, board, playerTurn); });
    }
  }
}

function movement(value, board, playerTurn) {
  updateSpace(board, value, playerTurn.getPlayerTurn());
  render(board);
  setEventListeners(board, playerTurn);
  if (checkBoard(board) === false) {
    playerTurn.setPlayerTurn();
    if (board.board.every(value => value !== 0)) {
      document.getElementById('player-turn').innerHTML = 'Tied! start again';
    } else if (playerTurn.getPlayerTurn() === true) {
      document.getElementById('player-turn').innerHTML = `${board.getPlayerName(true)}'s turn`;
    } else {
      render(board);
      setEventListeners(board, playerTurn);
      document.getElementById('player-turn').innerHTML = `${board.getPlayerName(false)}'s turn`;
    }
  } else if (playerTurn.getPlayerTurn() === true) {
    document.getElementById('player-turn').innerHTML = `${board.getPlayerName(true)} won!!!`;
    render(board);
  } else {
    document.getElementById('player-turn').innerHTML = `${board.getPlayerName(false)} won!!!`;
    render(board);
  }
  return playerTurn.getPlayerTurn();
}

function playGame() {
  closeModel();
  const board = init();
  const playerTurn = initPlayTurn();

  board.setPlayerName(document.getElementById('player1').value, true);
  board.setPlayerName(document.getElementById('player2').value, false);

  if (board.getPlayerName(true) === '') {
    board.setPlayerName('Player1', true);
  }

  if (board.getPlayerName(false) === '') {
    board.setPlayerName('Player2', false);
  }

  document.getElementById('player-turn').innerHTML = `${board.getPlayerName(true)}'s turn`;

  render(board);
  setEventListeners(board, playerTurn);
}

function initialize() {
  document.getElementById('button-playGame').addEventListener('click', openModel);
  document.getElementById('submit').addEventListener('click', playGame);
}

initialize();
