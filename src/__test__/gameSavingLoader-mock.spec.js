import GameSavingLoader from '../gameSavingLoader';
import read from '../reader';

jest.mock('../reader');
beforeEach(() => {
  jest.resetAllMocks();
});
jest.setTimeout(10000);
describe('testing mock', () => {
  test('check in method load throw Error', async () => {
    try {
      read.mockRejectedValueOnce(new Error('Async error message'));
      await GameSavingLoader.load();
    } catch (error) {
      expect(error.message).toEqual('Async error message');
    }
  });
});
