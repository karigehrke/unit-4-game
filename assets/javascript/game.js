$(document).ready(function () {


    var winTally = 0;
    var loseTally = 0;
    var computerNum = 25;
    var min = 19;
    var max = 120;

function getRandomInt (min, max) {
    return Math.floor(Math.random() * 102) + 19;
    console.log(computerName);
    }
    


    // Here we set the "number-to-guess" header to match the "targetNumber".
    // Eventually this will allow us to change the HTML to match the value in the JavaScript.
    $("#number-goal").text(computerNum);

   

    var counter = 0;
    
    // Next we create a for loop to create crystals for every crystalValue.
    var numberOptions = [11, 4, 8, 5];
    //var increment = crystalValue[Math.round(Math.random())];
    for (var i = 0; i < numberOptions.length; i++) {
        console.log(numberOptions);

        // For each iteration, we will create an imageCrystal
        var crystalPic1 = $("<img>");
        crystalPic1.addClass("crystal-image");
        crystalPic1.attr("src", "assets/images/crystal1.jpg");
        crystalPic1.attr("crystal-value", numberOptions[i]);

        //var crystalPic2 = $("<img>");
        //crystalPic2.addClass("crystal-image");
        //crystalPic2.attr("src", "assets/images/crystal2.jpg");
        //crystalPic2.attr("crystal-value", numberOptions[i]);

        //var crystalPic3 = $("<img>");
        //crystalPic3.addClass("crystal-image");
        //crystalPic3.attr("src", "assets/images/crystal3.jpg");
        //crystalPic3.attr("crystal-value", numberOptions[i]);

        //var crystalPic4 = $("<img>");
        //crystalPic4.addClass("crystal-image");
        //crystalPic4.attr("src", "assets/images/crystal4.jpg");
        //crystalPic4.attr("crystal-value", numberOptions[i]);

        // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
        $("#crystals").append(crystalPic1);
    }
        //, crystalPic2, crystalPic3, crystalPic4

    
    // Here we created an on-click event that responds to button clicks of the crystal image.
    $(".crystal-image").on("click", function () {

        var crystalValue = ($(this).attr("crystal-value"));
        crystalValue = parseInt(crystalValue);

        counter += crystalValue;

        // Clicking the button triggers an alert message.
        alert("Your Score is: " + counter);

        if (counter === computerNum) {
            // Clicking the button triggers an alert message.
            alert("You Win");
            winTally++;
            //var winsText = $("win").innerHTML;
            //winsText.textContent = winTally;
            updateWinCount();
           console.log("Win: " + winTally);
        }

        else if (counter >= computerNum) {
            alert("You Lose!");
            loseTally++;
            //var loseText = $("win").innerHTML;
            //loseText.textContent = loseTally;
            //$("#lose").innerHTML = loseTally;
           console.log("Lose: " + loseTally);
           function updateLosses();
        }

    })
    function updateWinCount() {
        $("#win").textContent = winTally;
    }
    function updateLosses() {
        $("#lose").textContent = loseTally;
    }
    function restartGame() {
        counter = 0;
        if (counter >= computerNum) {
            restartGame();
        }
    }
});