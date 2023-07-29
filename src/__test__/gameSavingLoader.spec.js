import GameSavingLoader from '../gameSavingLoader';
import GameSaving from '../gameSaving';

jest.setTimeout(10000);
describe('testing class GameSavingLoader', () => {
  test('check in method load', (done) => {
    const result = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
    GameSavingLoader.load().then((saving) => {
      expect(saving).toEqual(result);
      done();
    });
  });
});

describe('testing async', () => {
  test('check in method load with async', async () => {
    const result = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
    try {
      await GameSaving.load().then((saving) => {
        expect(saving).toEqual(result);
      });
    } catch (error) {
      expect(error).toBe(error);
    }
  });
});
