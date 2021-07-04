var randomNumber1 = Math.floor((Math.random()*6)+1);
var randomNumber2 = Math.floor((Math.random()*6)+1);

var img1_newImage = "images/dice" + randomNumber1 + ".png";
var img2_newImage = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img1").setAttribute("src",img1_newImage);
document.querySelector(".img2").setAttribute("src",img2_newImage);

if(randomNumber1 < randomNumber2)
{
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  document.querySelector("h1").classList.add("winnerBoard");
}

else if(randomNumber2 < randomNumber1)
{
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
  document.querySelector("h1").classList.add("winnerBoard");
}

else
{
  document.querySelector("h1").innerHTML = "🏳️ Draw! 🏳️";
}
