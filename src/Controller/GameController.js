import OutputView from "../View/OutputView.js";
import InputView from "../View/InputView.js";
import Game from "../Model/Game.js";

import InputValidator from "../validator/inputValidator.js";
import { generateRandomNumber } from "../util/generateRandomNumber.js";

class GameController {
  constructor() {
    OutputView.startGame();
  }

  async startGame() {
    const computerNumber = this.generateComputerNumber();
    const game = this.generateGame(computerNumber);

    await this.playGame(game);
  }

  // 1-2. 컴퓨터는 임의의 3자리 숫자를 생성한다.
  generateComputerNumber() {
    return generateRandomNumber();
  }

  generateGame(computerNumber) {
    const game = new Game(computerNumber);
    return game;
  }

  async getUserNumber() {
    const userNumber = InputValidator.validateUserNumber(await InputView.getUserNumber());
    return userNumber;
  }

  // 3. 숫자 야구 게임을 진행한다.
  async playGame(game) {
    while (true) {
      const userNumber = await this.getUserNumber();
      game.setUser(userNumber);
      const result = game.compareNumber();
      OutputView.printResult(result);
      
      // 3-2. 3개의 숫자를 모두 맞히면 게임이 종료된다.
      if (result.strike === 3) {
        OutputView.endGame();
        break;
      }
    }
  }
}

export default GameController;