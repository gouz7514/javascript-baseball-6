import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "../constants/constants.js";

const InputView = {
  getUserNumber() {
    const userNumber = Console.readLineAsync(INPUT_MESSAGE.getUserNumber);
    return userNumber;
  },
  restartGame() {
    const answer = Console.readLineAsync(INPUT_MESSAGE.restartGame);
    return answer;
  }
}

export default InputView;