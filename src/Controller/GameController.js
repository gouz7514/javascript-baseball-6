import OutputView from "../View/OutputView.js";
import InputView from "../View/InputView.js";
import Game from "../Model/Game.js";

import InputValidator from "../validator/inputValidator.js";
import { generateRandomNumber } from "../util/generateRandomNumber.js";

class GameController {
  constructor() {
    this.startGame();
  }

  startGame() {
    OutputView.startGame();

    const computerNumber = this.generateComputerNumber();
    const game = this.generateGame(computerNumber);

    this.getUserNumber()
  }

  // 1-2. 컴퓨터는 임의의 3자리 숫자를 생성한다.
  generateComputerNumber() {
    return generateRandomNumber();
  }

  generateGame(randomNumber) {
    const game = new Game(randomNumber);
    return game;
  }

  async getUserNumber() {
    const userNumber = InputValidator.validateUserNumber(await InputView.getUserNumber());
    console.log(userNumber);
  }
}

export default GameController;