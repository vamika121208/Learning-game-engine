import GameEngine from "./engine/GameEngine.js"
import ModuleRegistry from "./engine/ModuleRegistry.js"
import QuizModule from "./modules/QuizModule.js"

ModuleRegistry.register("quiz", QuizModule)

async function start(){

  const response = await fetch("./configs/sample_quiz_game.json")

  const config = await response.json()

  const engine = new GameEngine(config)

  engine.start()

}

console.log("starting game...")
start()
