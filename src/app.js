import GameSavingLoader from './gameSavingLoader';
import gameSaving from './gameSaving';

GameSavingLoader.load().then((saving) => {
  console.log(saving);
}, () => {
  // ...
});

(async () => {
  try {
    await gameSaving.load().then((saving) => {
      console.log(saving);
    });
  } catch (error) {
    console.log(error);
  }
})();
