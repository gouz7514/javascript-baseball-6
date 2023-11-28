import InputValidator from "../../src/validator/inputValidator.js";

describe("InputValidator 테스트", () => {
  describe("단위 메소드 테스트", () => {
    test("3자리 숫자가 아닌 경우 예외를 발생시킨다", () => {
      const number = "1234";
      expect(() => InputValidator.validateLength(number)).toThrow("[ERROR]");
    })
  
    test("숫자가 아닌 경우 예외를 발생시킨다", () => {
      const number = "12a";
      expect(() => InputValidator.validateNumber(number)).toThrow("[ERROR]");
    })
  
    test("주어진 숫자가 정수가 아닌 경우 false를 반환한다", () => {
      const number = 1.2;
      expect(InputValidator.isNumber(number)).toBe(false);
    })
  
    test("플레이어의 숫자가 1 ~ 9 사이의 정수가 아닌 경우 예외를 발생시킨다", () => {
      const number = "120";
      expect(() => InputValidator.validateNumerRange(number)).toThrow("[ERROR]");
    })
  
    test("1 ~ 9 사이의 정수가 아닌 경우 false를 반환한다", () => {
      const number = 10;
      expect(InputValidator.isNumberInRange(number)).toBe(false);
    })
  
    test("중복되는 숫자가 있는 경우 예외를 발생시킨다", () => {
      const number = "112";
      expect(() => InputValidator.validateDuplicateNumber(number)).toThrow("[ERROR]");
    })
  })

  describe("통합 메소드 테스트", () => {
    test("플레이어가 입력한 숫자가 유효하지 않은 경우 예외를 발생시킨다", () => {
      const numbers = ["1234", "12a", "120", "112"];
      numbers.forEach((number) => {
        expect(() => InputValidator.validateUserNumber(number)).toThrow("[ERROR]");
      })
    })

    test("재시작 또는 종료를 위한 숫자가 유효하지 않은 경우 예외를 발생시킨다", () => {
      const numbers = ["a", "3"];
      numbers.forEach((number) => {
        expect(() => InputValidator.validateRestartNumber(number)).toThrow("[ERROR]");
      })
    })
  })
});