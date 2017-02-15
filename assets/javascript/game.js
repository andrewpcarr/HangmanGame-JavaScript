$(document).ready(function() {
  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];


  var words = [];         // Array of topics
  var chosenWord;         // Selected word
  var guess;              // Geuss
  var guesses = [];       // Stored guesses
  var lives;              // Lives
  var counter;            // Count correct guesses
  var space;              // Number of spaces in word '-'

  var showLives = $('#myLives');

    // Creates letter buttons
    var buttons = function() {  
      for (var i = 0; i < alphabet.length; i++) {
        var letterBtn = $("<button>");
        
        letterBtn.addClass("letter-button letter letter-button-color");

        letterBtn.attr("data-letter", alphabet[i]);

        letterBtn.text(alphabet[i]);
      
        $("#buttons").append(letterBtn);


        }
    }
    buttons();

    // Guesses remaining
    var comments = function() {
    showLives.html('You have ' + lives + " guesses remaining.");
    if (lives < 1) {
      showLives.html('Game Over');
    }
    for (var i = 0; i < guesses.length; i++) {
      if (counter + space === guesses.length) {
        showLives.html('You Win!');
    }
  }
}

    // Creates dashes for secret word
    var result = function () {
    wordHolder = document.getElementById('hold');
    correct = document.createElement('ul');

    for (var i = 0; i < chosenWord.length; i++) {
      correct.setAttribute('id', 'my-word');
      guess = document.createElement('li');
      guess.setAttribute('class', 'guess');
      if (chosenWord[i] === "-") {
        guess.innerHTML = "-";
        space = 1;
      } else {
        guess.innerHTML = "_";
      }

      guesses.push(guess);
      wordHolder.append(correct);
      correct.append(guess);
    }
  }


  


    // Random word is chosen and is displayed as dashes on the screen
    var play = function() {
      words = ["fados", "moontower", "haymaker", "dogwood", "highball", "lalas"];
      chosenWord = words[Math.floor(Math.random() * words.length)];
      chosenWord = chosenWord.replace(/\s/g, "-");
      console.log(chosenWord);

      guesses = [];
      lives = 10;
      counter = 0;
      space = 0;
      result();
      comments();


    }
    play();


    // Click function for user guesses
    $('.letter').click(function() {
          var press = $(this).text();
          var minus = 0;
          $(this).css('color', 'red');
          for (var i = 0, len = chosenWord.length; i < len; i++) {
            if (chosenWord[i] === press) {
              console.log(press);
              minus = 100;
            } else {
              minus--;
            }
          }
          if (minus < 0) {
            lives--;
            comments();
          }
        })




    // Play Again button reset
    $('#reset').click(function() {
      correct.remove();
      $('.letter').css('color', 'black');
      play();
    });

});
