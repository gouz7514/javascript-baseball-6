import GameController from "./Controller/GameController.js";

class App {
  constructor() {
    this.gameController = new GameController();
  }

  async play() {}
}

const app = new App();
app.play();

export default App;