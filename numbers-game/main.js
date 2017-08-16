
(function(){
  var secretElement;
  var gameStartBtn = document.querySelector('#start-game');
  var startScreen = document.querySelector('#start-screen');
  var gameplayScreen = document.querySelector('#gameplay-screen');

  gameStartBtn.addEventListener('click', startGame);

  function startGame() {
    var minValue = parseFloat(document.querySelector('#min-value').value);
    var maxValue = parseFloat(document.querySelector('#max-value').value);

    secretElement = minValue + Math.round(Math.random() * (maxValue - minValue));
    console.log(secretElement);

    if(minValue && maxValue) {
      document.querySelector('#min-value').value = '';
      document.querySelector('#max-value').value = '';
      theGame();
    }
  }

  function theGame() {
    var userAnswer = document.querySelector('#user-answer');
    var checkAnswerBtn = document.querySelector('#check-answer');
    var gameResult = document.querySelector('#game-result');

    hideElement(startScreen);
    showElement(gameplayScreen);

    gameResult.innerHTML = "<p>Choose yor number!</p>";

    checkAnswerBtn.addEventListener('click', function(){
        if(userAnswer.value == secretElement) {
          gameResult.innerHTML = "<p> You Won! Secret number is " + secretElement + "!</p>";
          hideElement(gameplayScreen);
          showElement(startScreen);
          alert("You Won! The secret number is " + secretElement)
        } else if (userAnswer.value > secretElement) {
          gameResult.innerHTML = "<p> Your number is too high!</p>";
        } else if (userAnswer.value < secretElement) {
          gameResult.innerHTML = "<p> Your number is too low!</p>";
        }
      })
  }

    function showElement(element) {
      element.style.display = 'block';
    }

    function hideElement(element) {
      element.style.display ='none';
    }

}() );
