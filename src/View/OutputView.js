import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_MESSAGE } from "../constants/constants.js";

const OutputView = {
  // 1-1. 게임 시작 문구를 출력한다.
  startGame() {
    Console.print(OUTPUT_MESSAGE.startGame);
  },
  printResult(result) {
    const { ball, strike } = result;
    let message = '';
    if (ball) {
      message += `${ball}볼 `;
    }
    if (strike) {
      message += `${strike}스트라이크`;
    }
    if (!ball && !strike) {
      message += '낫싱';
    }
    Console.print(message);
  },
  endGame() {
    Console.print(OUTPUT_MESSAGE.endGame);
  }
}

export default OutputView;