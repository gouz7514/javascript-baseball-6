import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_MESSAGE } from "../constants/constants.js";

const OutputView = {
  // 1-1. 게임 시작 문구를 출력한다.
  startGame() {
    Console.print(OUTPUT_MESSAGE.startGame);
  }
}

export default OutputView;