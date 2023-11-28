import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "../constants/constants.js";

const InputView = {
  getUserNumber() {
    const userNumber = Console.readLineAsync(INPUT_MESSAGE.getUserNumber);
    return userNumber;
  },
  getRestart() {
    const answer = Console.readLineAsync(INPUT_MESSAGE.getRestart);
    return answer;
  }
}

export default InputView;