
var randomNumber1=Math.floor(Math.random()*6)+1;


const image1= document.querySelector(".img1");


var randomImage= "dice"+randomNumber1+".png";   
image1.src="images/"+randomImage;





let y= Math.random();
y=y*6;
y=Math.floor(y)+1;
var randomNumber2=y;

const image2= document.querySelector(".img2");

if(randomNumber2===1){
    image2.src="images/dice1.png";

}else if(randomNumber2===2){
    image2.src="images/dice2.png";

}else if(randomNumber2===3){
    image2.src="images/dice3.png";

}else if(randomNumber2===4){
    image2.src="images/dice4.png";

}else if(randomNumber2===5){
    image2.src="images/dice5.png";

}else{
    image2.src="images/dice6.png";

}

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins 🚩";
}else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 Wins 🚩";
}else if(randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML="It's a Draw";
}
