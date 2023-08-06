import GameSavingLoader from './gameSavingLoader';
import gameSavingAsync from './gameSavingAsync';

GameSavingLoader.load().then((saving) => {
  console.log(saving);
}, () => {
  // ...
});

(async () => {
  try {
    await gameSavingAsync.load().then((saving) => {
      console.log(saving);
    });
  } catch (error) {
    console.log(error);
  }
})();
