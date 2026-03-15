class QuizModule {

  init(config){
    this.title = config.metadata?.title ?? "Learning Game"
    this.questions = config.content.questions
    this.current = 0
    this.score = 0

    this.showScore = config.settings?.showScore ?? true
    if(config.settings?.shuffleQuestions){
     this.questions.sort(() => Math.random() - 0.5)
  }
  }

  render(){
  const q = this.questions[this.current]
  const game = document.getElementById("game")
  game.innerHTML = `
    <h2>${q.question}</h2>
    <div id="options"></div>
    <div id="feedback"></div>
    ${this.showScore ? `<p>Score: ${this.score}</p>` : ""}
  `
  const optionsContainer = document.getElementById("options")

  q.options.forEach(option => {
    const btn = document.createElement("button")
    btn.innerText = option
    btn.onclick = () => {
      const feedback = document.getElementById("feedback")
      if(option === q.answer){
        feedback.innerHTML += "<p style='color:green'>Correct!</p>"
        this.score++
      } else {
       feedback.innerHTML += `<p style="color:red">Wrong!</p>`      
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
      document.getElementById("game").innerHTML = `
        <h2>Game Finished 🎉</h2>
        <h3>Your Score: ${this.score}/${this.questions.length}</h3>
        <button onclick="location.reload()">Restart</button>
      `
    }
  }
}

export default QuizModule
