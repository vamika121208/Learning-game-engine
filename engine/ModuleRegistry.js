class ModuleRegistry {

  static modules = {}

  static register(type,module){
    this.modules[type] = module
  }

  static get(type){
    return this.modules[type]
  }
}

export default ModuleRegistry
