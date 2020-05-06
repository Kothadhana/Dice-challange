function myfunc()
{
var n1=Math.floor(Math.random()*6)+1;
var n2=Math.floor(Math.random()*6)+1;
var image1="dice"+n1+".png";
var image2="dice"+n2+".png";
var list1=document.querySelectorAll(".dice-image")[0];
list1.setAttribute("src",image1);
var list2=document.querySelectorAll(".dice-image")[1];
list2.setAttribute("src",image2);
if(n1>n2)
{
  document.getElementsByTagName("h1")[0].innerHTML="player1 won the game"
}
else if(n2>n1)
{
   document.getElementsByTagName("h1")[0].innerHTML="player2 won the game"
}
else
{
  document.getElementsByTagName("h1")[0].innerHTML="Draw!"
}
document.getElementsByTagName("button")[0].innerHTML="Play Again";
}
