import GameSavingLoader from '../gameSavingLoader';
import read from '../reader';

jest.mock('../reader');
beforeEach(() => {
  jest.resetAllMocks();
});

jest.setTimeout(10000);
describe('testing class GameSavingLoader', () => {
  test('check in method load', (done) => {
    const result = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
    GameSavingLoader.load().then((saving) => {
      expect(saving).toEqual(result);
      done();
    });
  });
  test('check in method load throw Error', async () => {
    try {
      read.mockRejectedValueOnce(new Error('Async error message'));
      await GameSavingLoader.load();
    } catch (error) {
      expect(error.message).toEqual('Async error message');
    }
  });
});
