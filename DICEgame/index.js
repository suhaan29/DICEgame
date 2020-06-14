
//now we have to roll the dice and do that

var playerDice1 = Math.round((Math.random()*5) + 1);
var playerDice2 = Math.round((Math.random()*5) + 1); //round these numbers

var getSource1 = "images/dice" + playerDice1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", getSource1);

var getSource2 = "images/dice" + playerDice2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", getSource2);



// try using class list toggle

if(playerDice1 > playerDice2)
{
  document.querySelector("h1").innerHTML = "🎉Player 1 has won!";

}
else if (playerDice2 > playerDice1) {
  document.querySelector("h1").innerHTML = "Player 2 has won!🏅";
}
else{
  document.querySelector("h1").innerHTML = "its a draw wowza! 🎎";
}

// if(playerDice1 == 1)
// {
//   document.querySelector(.img1).setAttribute("src", "images/dice1.png");
// }
