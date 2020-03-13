import {
  init, initPlayTurn, updateSpace, checkBoard, movement,
} from './mockGame';

describe('Get the board in the initialization of the game', () => {
  test('Test the initial game board', () => {
    const board = init();
    for (let i = 0; i < 8; i += 1) {
      expect(board.getValue(i)).toBe(0);
    }
    expect(board.getPlayerName(true)).toBe('Player1');
    expect(board.getPlayerName(false)).toBe('Player2');
  });

  test('Change players names', () => {
    const board = init();
    board.setPlayerName('Foo', true);
    board.setPlayerName('Bar', false);

    expect(board.getPlayerName(true)).toBe('Foo');
    expect(board.getPlayerName(false)).toBe('Bar');
  });

  test('Change the spaces in the board', () => {
    const board = init();
    for (let i = 0; i < 8; i += 1) {
      board.changeSpace(i, 1);
      expect(board.getValue(i)).toBe(1);
    }
  });
});

describe("Test player's turns", () => {
  test('Check if in the begining the player is the player one', () => {
    const playerTurn = initPlayTurn();
    expect(playerTurn.getPlayerTurn()).toBeTruthy();
  });

  test("Check if the change of a pleyr's turn is working", () => {
    const playerTurn = initPlayTurn();
    playerTurn.setPlayerTurn();
    expect(playerTurn.getPlayerTurn()).toBeFalsy();
  });
});

describe('Test the updateSpace', () => {
  test('Check change the board', () => {
    const board = init();
    const space = 0;
    const value = true;
    updateSpace(board, space, value);
    expect(board.getValue(space)).toBeTruthy();
  });
});

describe('Test if someone win', () => {
  test('Checks if there is a winner in the horizontal', () => {
    const board = init();
    updateSpace(board, 0, true);
    updateSpace(board, 1, true);
    updateSpace(board, 2, true);
    expect(checkBoard(board)).toBeTruthy();
  });

  test('Checks if there is a winner in the vetical', () => {
    const board = init();
    updateSpace(board, 0, true);
    updateSpace(board, 3, true);
    updateSpace(board, 6, true);
    expect(checkBoard(board)).toBeTruthy();
  });

  test('Checks if there is a winner in the diagonal', () => {
    const board = init();
    updateSpace(board, 0, true);
    updateSpace(board, 4, true);
    updateSpace(board, 8, true);
    expect(checkBoard(board)).toBeTruthy();
  });
});


describe('Test the tie condicional', () => {
  test('Check tie in the game', () => {
    const board = init();
    const playerTurn = initPlayTurn();

    updateSpace(board, 0, true);
    updateSpace(board, 1, false);
    updateSpace(board, 2, true);
    updateSpace(board, 3, false);
    updateSpace(board, 4, false);
    updateSpace(board, 5, true);
    updateSpace(board, 6, true);
    updateSpace(board, 7, true);

    playerTurn.setPlayerTurn();
    expect(movement(8, board, playerTurn)).toBe('tie');
  });
});