import { Console } from "@woowacourse/mission-utils";

const InputView = {
  getUserNumber() {
    const userNumber = Console.readLineAsync('숫자를 입력해주세요 : ');
    return userNumber;
  }
}

export default InputView;