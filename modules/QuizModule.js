class QuizModule {

  init(config){
    this.title = config.metadata?.title ?? "Learning Game"
    this.levels=config.levels
    this.currentLevel = 0
    this.current = 0
    this.score = 0

    this.showScore = config.settings?.showScore ?? true
    this.showStartScreen()
  }

  loadLevel(){

  const level = this.levels[this.currentLevel]

  this.questions = level.questions
  this.difficulty = level.difficulty

  this.current = 0

}

  render(){

  const q = this.questions[this.current]
  const game = document.getElementById("game")
  const progress = Math.floor((this.current / this.questions.length) * 100)
  game.innerHTML = `
    <p class="level-tag">${this.difficulty} Level</p>
    <div class="progress-bar">
    <div class="progress" style="width:${progress}%"></div>
    </div>
    <p>Question ${this.current + 1} / ${this.questions.length}</p>
    <h2>${q.question}</h2>
    <div id="options"></div>
    <div id="feedback"></div>
    ${this.showScore ? `<p>Score: ${this.score}</p>` : ""}
  `
  const optionsContainer = document.getElementById("options")
  const feedback = document.getElementById("feedback")
  q.options.forEach(option => {
    const btn = document.createElement("button")
    btn.innerText = option

    btn.onclick = () => {
      const allButtons = document.querySelectorAll("#options button")
      allButtons.forEach(b => b.disabled = true)

      if(option === q.answer){
        btn.style.background = "green"
        feedback.innerHTML = `<p class="correct">Correct!</p>`
        this.score++
      } else {
        btn.style.background = "red"
        feedback.innerHTML = `<p class="wrong">Wrong!</p>`
        allButtons.forEach(b => {
          if(b.innerText === q.answer){
            b.style.background = "green"
          }
        })
      }
      
      setTimeout(() => {
       this.nextQuestion()
        }, 800)
    }
    optionsContainer.appendChild(btn)
  })
}

  nextQuestion(){
    this.current++ 
    if(this.current < this.questions.length){
      this.render()
    } else {
      this.currentLevel++
      if(this.currentLevel < this.levels.length){
        this.showLevelComplete()
      }else{
          const totalQuestions = this.levels.reduce(
         (sum, level) => sum + level.questions.length,0)
         document.getElementById("game").innerHTML = `
             <div class="card">
              <h2>Game Finished 🎉</h2>
              <h3>Your Score: ${this.score} / ${totalQuestions}</h3>
              <button onclick="location.reload()">Restart</button>
            </div>
`
  }
}
  }
  showLevelComplete(){
  const game = document.getElementById("game")
  const levelName = this.levels[this.currentLevel].name
  game.innerHTML = `
    <div class="card">
      <h2>Level Complete 🎉</h2>
      <p>Next Level: ${levelName}</p>
      <button id="nextLevelBtn">Start Next Level</button>
    </div>
  `
  document.getElementById("nextLevelBtn").onclick = () => {
    this.loadLevel()
    this.render()
  }
}

  showStartScreen(){

  const game = document.getElementById("game")

  game.innerHTML = `
    <div class="card">
      <h2>${this.title}</h2>
      <p>Test your knowledge across multiple levels!</p>
      <button id="startBtn">Start Game</button>
    </div>
  `

  document.getElementById("startBtn").onclick = () => {
    this.loadLevel()
    this.render()
  }

}
}

export default QuizModule
