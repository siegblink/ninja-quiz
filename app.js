const correctAnswers = ['B', 'B', 'B', 'B']
const form = document.querySelector('.quiz-form')
const scoreContainer = document.querySelector('.result')
const scorePercentage = scoreContainer.querySelector('span')

form.addEventListener('submit', function(event) {
  // Prevent the form default behaviour
  event.preventDefault()

  // Set initial score to zero
  let score = 0

  // Get user answers
  const questionsCollection = ['q1', 'q2', 'q3', 'q4']
  const answersCollection = questionsCollection
    .flatMap(function(question) {
      return Array.from(document.getElementsByName(question))
    })
    .filter(function(input) {
      return input.checked
    })
    .map(function(input) {
      return input.value
    })
  
  answersCollection.forEach(function(answer, index) {
    score = answer === correctAnswers[index] ? score + 25 : score + 0
  })

  // Scroll to the top of the page
  scrollTo(0, 0)

  // Display score on page
  scoreContainer.classList.remove('d-none')
  let number = 0
  const timer = setInterval(function() {
    scorePercentage.innerText = `${number}%`
    number === score ? clearInterval(timer) : (number = number + 1)
  }, 10)
})
