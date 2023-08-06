import GameSavingLoader from './gameSavingLoader';

export default class GameSaving extends GameSavingLoader {
  constructor(id) {
    super();
    this.id = id;
    this.created = Date.now();
    this.userInfo = GameSavingLoader.load();
  }
}
