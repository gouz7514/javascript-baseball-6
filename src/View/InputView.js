import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "../constants/constants.js";

const InputView = {
  async getUserNumber() {
    const userNumber = await Console.readLineAsync(INPUT_MESSAGE.getUserNumber);
    return userNumber;
  },
  async getRestart() {
    const answer = await Console.readLineAsync(INPUT_MESSAGE.getRestart);
    return answer;
  }
}

export default InputView;