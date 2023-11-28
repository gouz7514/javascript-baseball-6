import OutputView from "../../src/View/OutputView"
import { MissionUtils } from "@woowacourse/mission-utils";
import { EOL as LINE_SEPARATOR } from "os";

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

const getOutput = (logSpy) => {
  return [...logSpy.mock.calls].join(LINE_SEPARATOR);
}

const expectLogContains = (received, expectedLogs) => {
  expectedLogs.forEach((log) => {
    expect(received).toContain(log);
  });
};

describe("OutputView 출력 테스트", () => {
  test("게임 시작 문구를 출력한다", () => {
    const logSpy = getLogSpy();
    const expected = ["숫자 야구 게임을 시작합니다."];

    OutputView.startGame();

    expectLogContains(getOutput(logSpy), expected);
  })

  describe("게임 결과를 출력한다", () => {
    test("낫싱", () => {
      const logSpy = getLogSpy();
      const expected = ["낫싱"];

      OutputView.printResult({ ball: 0, strike: 0 });

      expectLogContains(getOutput(logSpy), expected);
    })

    test("볼", () => {
      const logSpy = getLogSpy();
      const expected = ["1볼"];

      OutputView.printResult({ ball: 1, strike: 0 });

      expectLogContains(getOutput(logSpy), expected);
    })

    test("스트라이크", () => {
      const logSpy = getLogSpy();
      const expected = ["1스트라이크"];

      OutputView.printResult({ ball: 0, strike: 1 });

      expectLogContains(getOutput(logSpy), expected);
    })

    test("볼 스트라이크", () => {
      const logSpy = getLogSpy();
      const expected = ["1볼 1스트라이크"];

      OutputView.printResult({ ball: 1, strike: 1 });

      expectLogContains(getOutput(logSpy), expected);
    })
  })
})