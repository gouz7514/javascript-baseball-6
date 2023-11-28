class Game {
  #computer;
  #user;

  constructor(computer) {
    this.#computer = computer;
  }

  setUser(user) {
    this.#user = user;
  }

  // 2-2. 컴퓨터와 플레이어의 숫자를 비교하고 결과를 반환한다.
  compareNumber() {
    const result = {
      ball: 0,
      strike: 0
    }

    for (let i = 0; i < this.#computer.length; i++) {
      if (this.#computer[i] === this.#user[i]) {
        result.strike++;
      } else if (this.#computer.includes(this.#user[i])) {
        result.ball++;
      }
    }

    return result;
  }
}

export default Game;