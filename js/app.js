$(document).ready(function(){
/*
to do's
 - change color of bttns when disabled
 - add animation to winner image?
 - make responsive
*/

  // USER: user selects a button, display lrg version in users section on the page
  // determin which button was clicked
    $('.bttnGp').on('click', function(){
      // get data-value of bttn clicked
      // asign selected bttn data-value to a variable
      var userChoice = $(this).attr('data-value');
      console.log(userChoice + " user choice");
      // - disable .bttnGp once selected
      $('.bttnGp').prop("disabled",true);
      // -change color of bttns when disabled
      // - generate computer choice
      var compChoice = genCompChoice();
      console.log(compChoice + " comp choice");
      // - show user choice
      usersChoiceImg(userChoice, 'playerCon');
      // - show computer choice
      usersChoiceImg(compChoice, 'compCon');
      // - determine who is the winner
      var winner = determineWinner(userChoice, compChoice);
      // - show winner, track score if needed
      showWinner(winner);
      //- offer reset?
      $('#playAgain').show("slow");
    })

  // COMPUTER: generate computer choice randomly
    var genCompChoice = function(){
      var computerChoice = Math.random();
      if (computerChoice < 0.34) {
        computerChoice = "rock"; // "rock"
      } else if(computerChoice <= 0.67) {
        computerChoice = "paper"; // "paper"
      } else {
        computerChoice = "scissors"; // "scissors"
      }
      return computerChoice;
    }

    // display LRG img of palyers selected choice in each section
    var usersChoiceImg = function(choice, section){
      var userSection = document.getElementById(section);
      var choiceImg = document.createElement("IMG");
      if(choice === "rock"){
        // append rock img to parent node
        choiceImg.setAttribute("src", "img/rock.png");
        userSection.appendChild(choiceImg);
      } else if(choice === "paper"){
        // append paper img to parent node
        choiceImg.setAttribute("src", "img/paper.png");
        userSection.appendChild(choiceImg);
      } else {
        // append  scissor img to parent node
        choiceImg.setAttribute("src", "img/scissors.png");
        userSection.appendChild(choiceImg);
      }
    }
    // determine who won game
    var determineWinner = function(userChoice, computerChoice){
      var choiceLookup = {'rock': 0, 'paper': 1, 'scissors': 2};
      // This will give 1 if player 1 wins, 2 if player 2 wins, 0 for a tie.
      var result = (3 + choiceLookup[userChoice] - choiceLookup[computerChoice]) % 3;
      var winner = ["tie", "player", "computer"];
      return winner[result];
    }
    // show image of who won game
    var showWinner = function(winner){
      var banner = document.getElementById('overLay');
      var winnerImg = document.createElement("IMG");
      if(winner === "player"){
        winnerImg.setAttribute("src", "img/YouWin.png");
        banner.appendChild(winnerImg);
      } else if(winner === "computer") {
        winnerImg.setAttribute("src", "img/ComputerWins.png");
        banner.appendChild(winnerImg);
      } else{
        winnerImg.setAttribute("src", "img/ItsATie.png");
        banner.appendChild(winnerImg);
      }
    }

    $('#playAgain').click(function() {
          location.reload();
      });

});
