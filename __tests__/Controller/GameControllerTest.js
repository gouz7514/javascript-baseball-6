import GameController from "../../src/Controller/GameController";
import { MissionUtils } from "@woowacourse/mission-utils";
import Game from "../../src/Model/Game";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("GameController 테스트", () => {
  test("게임이 시작되면 게임 시작 문구를 출력한다", () => {
    const logSpy = getLogSpy();
    const expected = "숫자 야구 게임을 시작합니다.";

    new GameController();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(expected));
  })

  describe("숫자 야구 게임을 진행한다", () => {
    test("3스트라이크인 경우 게임을 종료한다", async () => {
      const computerNumbers = [1, 3, 5];
      const userNumbers = ["246", "156", "135", "2"];
      const logSpy = getLogSpy();
      const messages = ["낫싱", "1볼 1스트라이크", "3스트라이크", "게임 종료"];
    
      mockRandoms(computerNumbers);
      mockQuestions(userNumbers);
    
      const gameController = new GameController();
      await gameController.startGame();
    
      messages.forEach((output) => {
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
      });
    })

    test("3스트라이크인 경우 게임을 한 번 더 진행한다", async () => {
      const computerNumbers = [1, 3, 5, 5, 8, 9];
      const answers = ["246", "135", "1", "597", "589", "2"];
      const logSpy = getLogSpy();
      const messages = ["낫싱", "3스트라이크", "1볼 1스트라이크", "3스트라이크", "게임 종료"];

      mockRandoms(computerNumbers);
      mockQuestions(answers);

      const gameController = new GameController();
      await gameController.startGame();

      messages.forEach((output) => {
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
      });
    })
  })
});