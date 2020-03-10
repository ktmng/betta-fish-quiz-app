'use strict';
//ALL QUESTIONS AND ANSWERS DATABASE, database is array, ea q/a4 object are array items, ea q,a4,ca are keys/value pairs
const database = [
  {
    question: 'What other name do betta fish go by?',
    answer1: 'Alpha Fish',
    answer2: 'Gamma Fish',
    answer3: 'Siamese Fighting Fish', 
    answer4: 'Kissing Gouramis',
    correctAnswer: 'Siamese Fighting Fish'
  },
  {
    question: 'On average, how long do betta fish live in captivity?',
    answer1: '1-2 years',
    answer2: '3-5 years',
    answer3: '6-9 years',
    answer4: '10+ years',
    correctAnswer: '3-5 years'
  },
  {
    question: 'Betta fish are bred around the world for their amazing colors and diverse fins! They are often identified and referred to by the shape of their tails. Which of the following is not a common betta tail type?',
    answer1: 'Feathertail', 
    answer2: 'Veiltail',
    answer3: 'Spadetail',
    answer4: 'Eclipsetail',
    correctAnswer: 'Eclipsetail'
  }, 
  {
    question: 'What is the name of the nests that male betta fish create at the surface of the water?',
    answer1: 'Spit Nests',
    answer2: 'Bubble Nests',
    answer3: 'Baby Betta Nests', 
    answer4: 'Floating Nests',
    correctAnswer:'Bubble Nests'
  },
  {
    question: 'What organ allows betta fish to breathe air and survive in waters with low-oxygen content and out of water for short periods?',
    answer1: 'Swim Bladder', 
    answer2: 'Gills',
    answer3: 'Labyrinth Organ',
    answer4: 'Air Sac Organ',
    correctAnswer: 'Labyrinth Organ'
  },
  {
    question: 'What kind of container should betta fish be kept in if you were to house one?',
    answer1: 'The cups they come in at the pet store', 
    answer2: 'A vase with a live plant that’s kept in the kitchen',
    answer3: 'A fishbowl like the one Dorothy has on Elmo’s World',
    answer4: 'A tank that is at least 2.5 gallons',
    correctAnswer: 'A tank that is at least 2.5 gallons'
  },
  {
    question: 'Betta fish are tropical fish, naturally found in the warm waters at lower altitudes. What water temperatures should betta fish be kept in?',
    answer1: '65-70°F (18.3-21.1°C)', 
    answer2: '72-75°F (22.2-25.0°C)',
    answer3: '78-80°F (25.6-26.5°C)',
    answer4: '81-86°F (27.2-30.0°C)',
    correctAnswer: '78-80°F (25.6-26.5°C)'
  },
  {
    question: 'Although typically an agressive species, it is possible for betta fish to have tank mates. However, you have to be careful especially when introducing them. Which tank mates would be an appropriate choice for betta fish?',
    answer1: 'Other betta fish', 
    answer2: 'Cichlids',
    answer3: 'Schooling Fish',
    answer4: 'Corydoras Catfish',
    correctAnswer: 'Corydoras Catfish'
  },
  {
    question: 'What tank decor is inappropriate for betta fish?',
    answer1: 'Seashells and Coral', 
    answer2: 'Marimo Balls',
    answer3: 'Live Plants',
    answer4: 'Smooth Rocks',
    correctAnswer: 'Seashells and Coral'
  }, 
  {
    question: 'Betta fish love to eat and beg for more food! Be careful not to overfeed them! Which of the following is least appropriate for betta fish to consume?',
    answer1: 'Fish Flakes', 
    answer2: 'Betta Pellets',
    answer3: 'Blood Worms',
    answer4: 'Brine Shrimp',
    correctAnswer: 'Fish Flakes'
  }, 
];
  
const STORE = {
  quizOnOff: 'off',
  questionNumber: 0,
  currentScore: 0,
};

//vvvvvvvvvvvvvvvvvvvvvvvv     GENERATE/RENDER FUNCTIONS BELOW     vvvvvvvvvvvvvvvvvvvvvvv

//q:0 score:0-------------------------------------------------------------------------------V
function generateZeroQuestionAndScore() {
  console.log('`generateZeroQuestionAndScore` ran')
  return`
  <section class='currentQuestionAndScore'>
    <ul>
    <li class='currentQuestion'>Question: 0/10</li>
    <li class='currentScore'>Score: 0/10</li>
    </ul>
  </section> `;
}
//q:0 score:0-------------------------------------------------------------------------------A

//starting screen---------------------------------------------------------------------------V
function generateStartingScreen() { 
  console.log('`generateStartingScreen` ran')
  return `
  <section class="startBox">
    <span class="quizTitle">Betta Fish Quiz</span>
    <span class="question">Test your knowledge about betta fish and how to care for them!</span>
    <button class="startButton">Start</button>
  </section> `;
} 

function renderStartingScreen() {
  console.log('`renderStartingScreen` ran')
  const addToHtmlAlt = generateZeroQuestionAndScore();
  $('.quizState').html(addToHtmlAlt);
  const addToHtml = generateStartingScreen();
  $('.main').html(addToHtml);
}
//starting screen---------------------------------------------------------------------------A

//question and score updater and zeroer-----------------------------------------------------V
function generateQuestionAndScoreUpdater() {
  console.log('`generateQuestionAndScoreUpdater` ran')
  return`
  <section class='currentQuestionAndScore'>
    <ul>
    <li class='currentQuestion'>Question: ${STORE.questionNumber+1}/10</li>
    <li class='currentScore'>Score: ${STORE.currentScore}/10</li>
    </ul>
  </section> `;
}

function renderQuestionAndScoreUpdater() {
  console.log('`renderQuestionAndScoreUpdater` ran')
  const addToHtml = generateQuestionAndScoreUpdater();
  const addToHtmlAlt = generateZeroQuestionAndScore();

  if (STORE.quizOnOff === 'on') {
    $('.quizState').html(addToHtml);
  } else {
    $('.quizState').html(addToHtmlAlt);
  }
}
//question and score updater and zeroer-----------------------------------------------------A

//question----------------------------------------------------------------------------------V
function generateQuestion (question, answer1, answer2, answer3, answer4) {
  console.log('`generateQuestion` ran')
  return`
  <section class="questionBox">
    <form>
    <fieldset class="questions-answers">
    <legend class='question'>${question}</legend>
      <input type="radio" required name="answers" id="answer1" value="${answer1}"><label for="answer1">${answer1}</label><br>
      <input type="radio" required name="answers" id="answer2" value="${answer2}"><label for="answer2">${answer2}</label><br>
      <input type="radio" required name="answers" id="answer3" value="${answer3}"><label for="answer3">${answer3}</label><br>
      <input type="radio" required name="answers" id="answer4" value="${answer4}"><label for="answer4">${answer4}</label>
    </fieldset>
    <button class='submitButton' type="submit">Submit</button>
    </form>
  </section> `;
}

function renderQuestion() { //arrayName[item#]
  console.log('`renderQuestion` ran')
  const question = database[STORE.questionNumber].question,
  answer1 = database[STORE.questionNumber].answer1, 
  answer2 = database[STORE.questionNumber].answer2,
  answer3 = database[STORE.questionNumber].answer3,
  answer4 = database[STORE.questionNumber].answer4,
  addToHtml = generateQuestion(question, answer1, answer2, answer3, answer4);
  $('.main').html(addToHtml);
}
//question----------------------------------------------------------------------------------A

//correct screen----------------------------------------------------------------------------V
function generateCorrectAnswer() {
  console.log('`generateCorrectAnswer` ran')
  return `
  <section class="responseBox">
    <section class='correctAnswer'>
      <span class='responseText'>That's Correct!</span>
      <img src="images/betta open mouth.jpg" alt="A betta fish with its mouth open" class="betta-reaction-img">
      <button class='nextButton'>Next Question</button>
    </section>
  </section> `;
}

function renderCorrectAnswer() {
  console.log('`renderCorrectAnswer` ran')
  const addToHtml = generateCorrectAnswer();
  $('.main').html(addToHtml);
}
//correct screen----------------------------------------------------------------------------A

//wrong screen------------------------------------------------------------------------------V
function generateWrongAnswer() {
  console.log('`generateCorrectAnswer` ran')
  return `
  <section class="responseBox">
    <section class='wrongAnswer'>
      <span class='responseText'>Sorry, That's Not Right</span>
      <img src="images/betta flared.jpg" alt="A betta fish flaring or expanding its gill plates" class="betta-reaction-img">
      <button class='nextButton'>Next Question</button>
    </section> 
  </section> `;
}

function renderWrongAnswer() {
  console.log('`renderWrongAnswer` ran')
  const addToHtml = generateWrongAnswer();
  $('.main').html(addToHtml);
}
//wrong screen------------------------------------------------------------------------------A

//final score screen------------------------------------------------------------------------V
function generateFinalScore() {
  console.log('`generateFinalScore` ran')
  let results = '';
    if (STORE.currentScore >= 10) {
      results = 'Wow! You got them all!';
    } else if (STORE.currentScore >= 8) {
      results = 'Nice Job!';
    } else if (STORE.currentScore >= 6) {
      results = 'Good Try. Read up a little more on Betta Fish!';
    } else {
      results = 'Please refrain from getting a betta fish until you\'ve done your research!';
      }  
  return `
  <section class='finalBox'>
    <span class='finalScore'>Your final score is ${STORE.currentScore}/10</span>
    <span class='results'>${results}</span>
    <button type='reset' class='retakeButton'>Retake The Quiz</button>
  </section>
   `;  
}

function renderFinalScore() {
  console.log('`renderFinalScore` ran')
  const addToHtml = generateFinalScore();
  $('.main').html(addToHtml);
}
//final score screen------------------------------------------------------------------------A

//^^^^^^^^^^^^^^^^^^^^^^^^     GENERATE/RENDER FUNCTIONS ABOVE     ^^^^^^^^^^^^^^^^^^^^^^^

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvv     HANDLE EVENTS BELOW      vvvvvvvvvvvvvvvvvvvvvvvvvvvvv

//start button------------------------------------------------------------------------------V
function handleStartButton() {
  console.log('`handleStartButton` ran');
	$('.main').on('click', '.startButton', () => {
		STORE.quizOnOff = 'on';
    renderQuestionAndScoreUpdater();
    renderQuestion();
	});
}
//start button------------------------------------------------------------------------------A

//submit button------------------------------------------------------------------------------V
function handleSubmitButton() {
  console.log('`handleSubmitButton` ran')
  $('.main').submit('.submitButton', () => {
    event.preventDefault();

    let selectedAnswer = $('input[name="answers"]:checked').val()

    if (selectedAnswer === database[STORE.questionNumber].correctAnswer) {
      renderCorrectAnswer();
      STORE.currentScore++;
    } else {
      renderWrongAnswer();
    }

    renderQuestionAndScoreUpdater();
  });
}
//submit button------------------------------------------------------------------------------A

//next button--------------------------------------------------------------------------------V
function handleNextButton() {
  console.log('`handleSubmitButton` ran')
	$('.main').on('click', '.nextButton', () => {
		if (STORE.questionNumber >= 9) {
			renderFinalScore();
		} else {
			STORE.questionNumber++;
			renderQuestion();
			renderQuestionAndScoreUpdater();
		}
	});
}
//next button--------------------------------------------------------------------------------A

//retake button------------------------------------------------------------------------------V
function handleRetakeButton() { 
  $('.main').on('click', '.retakeButton', () => {
	STORE.quizOnOff = 'off';
  STORE.questionNumber = 0;
	STORE.currentScore = 0;
	renderStartingScreen();
	renderQuestionAndScoreUpdater();
	});
}
//retake button------------------------------------------------------------------------------A

//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^     HANDLE EVENTS ABOVE      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

// TESTING!!!
function testing() {
  renderStartingScreen();
  handleStartButton();
  handleSubmitButton();
  handleNextButton();
  handleRetakeButton();
}
testing();