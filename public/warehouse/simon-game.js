

var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;

$(document).keydown(function () {  
    if (!started) {
        started = true;
        gamePattern = [];
        level = 0;
        nextSequence();
    }
});

$(".btn").click(function () {
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);

    animatePress(userChosenColor);
    playSound(userChosenColor);

    checkAnswer();
});

function nextSequence() {
    level++;
    $("h1").text("Level " + level);
    userClickedPattern = [];
    
    var randomChosenColor = buttonColors[Math.floor(Math.random() * 4)];
    gamePattern.push(randomChosenColor);

    flash(randomChosenColor);
    playSound(randomChosenColor);
}

function checkAnswer() {
    var last = userClickedPattern.length - 1;

    if (userClickedPattern[last] != gamePattern[last]) {
        startOver();
    }
    else if (userClickedPattern.length === gamePattern.length) {
        setTimeout(nextSequence, 1000);
    }
}

function startOver() {

    playSound("wrong");
    $("h1").text("Game Over, Press Any Key to Restart");
    
    $("body").addClass("game-over");
    setTimeout(function () {
        $("body").removeClass("game-over");
    }, 200);

    started = false;
}

function flash(color) {
    $("#" + color).fadeOut(100).fadeIn(100);
}

function animatePress(color) {
    $("#" + color).addClass("pressed");
    setTimeout(function () {
        $("#" + color).removeClass("pressed")
    }, 100);
}

function playSound(color) {
    var audio = new Audio("simon-game-sounds/" + color + ".mp3");
    audio.play();
}