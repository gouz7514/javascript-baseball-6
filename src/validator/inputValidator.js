import { NUMBER, ERROR_MESSAGE } from "../constants/constants.js";

const InputValidator = {
  // 2-1. 플레이어가 입력한 숫자를 검증한다.
  validateUserNumber(userNumber) {
    this.validateLength(userNumber);
    this.validateNumber(userNumber);
    this.validateNumerRange(userNumber);
    this.validateDuplicateNumber(userNumber);

    return userNumber.split('').map((number) => +number);
  },
  // 3자리만 입력 가능하다.
  validateLength(userNumber) {
    if (userNumber.length !== NUMBER.length) {
      throw new Error(ERROR_MESSAGE.inValidLength);
    }
  },
  // 숫자만 입력 가능하다.
  validateNumber(userNumber) {
    if (userNumber.split('').some((number) => !this.isNumber(+number))) {
      throw new Error(ERROR_MESSAGE.inValidNumber);
    }
  },
  isNumber(number) {
    return typeof number === "number" && Number.isSafeInteger(number);
  },
  // 1 ~ 9까지만 입력 가능하다.
  validateNumerRange(userNumber) {
    if (userNumber.split('').some((number) => !this.isNumberInRange(+number))) {
      throw new Error(ERROR_MESSAGE.inValidNumberRange);
    }
  },
  isNumberInRange(number) {
    return number >= NUMBER.min && number <= NUMBER.max;
  },
  // 중복되지 않아야 한다.
  validateDuplicateNumber(userNumber) {
    const set = new Set(userNumber.split(''));
    if (set.size !== NUMBER.length) {
      throw new Error(ERROR_MESSAGE.duplicateNumber);
    }
  }
}

export default InputValidator;