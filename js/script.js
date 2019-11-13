// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW
    $("#shoot").click(function() {
        let computerChoice = Math.ceil(Math.random() * 3);
        console.log(computerChoice);
        var choice = $("#input").val();
        $("#userChoice").text(choice);

        if(computerChoice === 1) {
            $("#computerChoice").text('rock')
        } else if(computerChoice === 2) {
            $("#computerChoice").text("paper")
        } else if(computerChoice === 3) {
            $("#computerChoice").text("scissors")
        };

        if(computerChoice === 1 && choice === "scissors" || computerChoice === 2 && choice === "rock" || computerChoice === 3 && choice === "paper") {
            $("#result").text("computer Wins :(");
        } else if(computerChoice === 1 && choice === "paper" || computerChoice === 2 && choice === "scissors" || computerChoice === 3 && choice === "rock") {
                $("#result").text("You Win!!");
        } else if(computerChoice === 1 && choice === "rock" || computerChoice === 2 && choice === "paper" || computerChoice === 3 && choice === "scissors") {
            $("#result").text("tie, try again.");
        };

    });
