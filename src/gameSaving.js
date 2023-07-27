import json from './parser';
import read from './reader';

export default class GameSavingLoader {
  static async load() {
    const obj = await read();
    // eslint-disable-next-line no-return-await
    return await json(obj);
  }
}
