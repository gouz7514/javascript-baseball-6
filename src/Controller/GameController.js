import OutputView from "../View/OutputView.js";
import InputView from "../View/InputView.js";
import Game from "../Model/Game.js";

import { GAME } from "../constants/constants.js";
import InputValidator from "../validator/inputValidator.js";
import { generateRandomNumber } from "../util/generateRandomNumber.js";

class GameController {
  constructor() {
    OutputView.startGame();
  }

  async startGame() {
    const computerNumber = this.#generateComputerNumber();
    const game = this.#generateGame(computerNumber);

    await this.#playGame(game);
  }

  // 1-2. 컴퓨터는 임의의 3자리 숫자를 생성한다.
  #generateComputerNumber() {
    return generateRandomNumber();
  }

  #generateGame(computerNumber) {
    const game = new Game(computerNumber);
    return game;
  }

  // 2. 숫자 야구 게임을 진행한다.
  async #playGame(game) {
    while (true) {
      const userNumber = await this.#getUserNumber();
      game.setUser(userNumber);
      const result = game.compareNumber();
      OutputView.printResult(result);
      
      // 2-3. 3개의 숫자를 모두 맞히면 게임이 종료된다.
      if (result.strike === GAME.end) {
        OutputView.endGame();
        break;
      }
    }
    await this.#getRestart();
  }

  // 2-1. 플레이어는 3자리의 숫자를 입력한다.
  async #getUserNumber() {
    const userNumber = InputValidator.validateUserNumber(await InputView.getUserNumber());
    return userNumber;
  }

  // 2-4. 게임을 종료한 후 게임을 다시 시작하거나 완전히 종료할 수 있다.
  async #getRestart() {
    const answer = InputValidator.validateRestartNumber(await InputView.getRestart());
    if (answer === GAME.restart) {
      await this.startGame();
    }
  }
}

export default GameController;