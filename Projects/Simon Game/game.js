var buttonColors = ["green","red","yellow","blue"];
var gamePattern = [];
var userClickedPattern = [];
var randomNumber;
var randomChosenColor;
var level = 0;
var clickNumber = 0;
var gameOver = true;

$(document).keyup(function()
{
  if(gameOver == true)
  {
    gameOver = false;
    level = 0;
    gamePattern = [];
    nextSequence();
  }
});

function nextSequence()
{
  randomNumber = Math.floor(Math.random()*4);
  randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);

  level += 1;
  clickNumber = 0;
  userClickedPattern = [];
  $("#level-title").text("Level "+level);

  $("#"+randomChosenColor).fadeOut();
  setTimeout(function(){
    $("#"+randomChosenColor).fadeIn();
  }, 1);

  playSound(randomChosenColor);
}

$(".btn").click(function(e){
  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);
  if (patternCheck() == true)
  {
    playSound(userChosenColor);
    animatePress(userChosenColor);
    if (clickNumber == level) nextSequence();
  }
  else
  {
    playSound("wrong");
    animatePress(userChosenColor);
    $("body").addClass("game-over");
    setTimeout(function(){
      $("body").removeClass("game-over");
    }, 1);
    $("#level-title").text("Game Over! 😣 Press any key to Restart");
    gameOver = true;
  }
});

function animatePress(currentColor)
{
  $("#"+currentColor).addClass("pressed");
  setTimeout(function(){
    $("#"+currentColor).removeClass("pressed");
  }, 1);
}

function patternCheck()
{
  if(gamePattern[clickNumber] == userClickedPattern[clickNumber])
  {
    clickNumber += 1;
    return true;
  }
  else
    return false;
}

function playSound(colorName)
{
  switch (colorName)
  {
    case "green":
      var greenSound = new Audio("sounds/green.mp3");
      greenSound.play();
      break;
    case "red":
      var redSound = new Audio("sounds/red.mp3");
      redSound.play();
      break;
    case "yellow":
      var yellowSound = new Audio("sounds/yellow.mp3");
      yellowSound.play();
      break;
    case "blue":
      var blueSound = new Audio("sounds/blue.mp3");
      blueSound.play();
      break;
    case "wrong":
      var wrongSound = new Audio("sounds/wrong.mp3");
      wrongSound.play();
    default:
      console.log("Deafault case - Switch statement");
  }
}
