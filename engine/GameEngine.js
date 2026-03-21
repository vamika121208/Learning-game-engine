import ModuleRegistry from "./ModuleRegistry.js"

class GameEngine {
  constructor(config){
    this.config = config
    this.module = null
  }
  start(){
    const moduleType = this.config.gameType
    const Module = ModuleRegistry.get(moduleType)
    if(!Module){
      console.error("Module not found:", moduleType)
      return
    }
    this.module = new Module()
    this.module.init(this.config)
  }
  loop(){
    this.render()
  }
  render(){
    if(this.module){
      this.module.render()
    }
  }
}
export default GameEngine
