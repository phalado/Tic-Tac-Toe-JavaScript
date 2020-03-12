import {
  gameBoard, playGame, init,
} from './mock';


beforeAll(() => playGame());

test('Test the initial game board', () => {
  expect(playerTurn).toBe([0, 0, 0, 0, 0, 0, 0, 0, 0]);
});