import Game from "../../src/Model/Game.js";

describe("Game 모델 테스트", () => {
  describe("숫자 비교 테스트", () => {
    test("숫자와 위치가 모두 일치하는 경우", () => {
      const game = new Game([1,2,3]);
      game.setUser([1,2,3]);
      const result = game.compareNumber();
      expect(result).toEqual({ ball: 0, strike: 3 });
    })

    test("숫자는 일치하지만 위치가 일치하지 않는 경우", () => {
      const game = new Game([1,2,3]);
      game.setUser([3,1,2]);
      const result = game.compareNumber();
      expect(result).toEqual({ ball: 3, strike: 0 });
    })

    test("숫자와 위치가 모두 일치하지 않는 경우", () => {
      const game = new Game([1,2,3]);
      game.setUser([4,5,6]);
      const result = game.compareNumber();
      expect(result).toEqual({ ball: 0, strike: 0 });
    })
  })
})