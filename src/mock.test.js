import {
  gameBoard, playTurn, init, initPlayTurn, updateSpace, checkBoard, changeTurn, movement,
} from './mock';

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

// test('Test the initial player in the game', () => {
//   expect(initPlayTurn).toBe()
// })
