import { Random } from "@woowacourse/mission-utils"
import { NUMBER } from "../constants/constants.js"

export const generateRandomNumber = () => {
  const numbers = [];
  while (numbers.length < NUMBER.length) {
    const number = Random.pickNumberInRange(NUMBER.min, NUMBER.max);
    if (!numbers.includes(number)) {
      numbers.push(number);
    }
  }

  return numbers;
}