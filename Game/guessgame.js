const max=prompt("enter range ");
let random=Math.floor(Math.random()*max)+1;
let guess=prompt("guess the number");

while(true){
    if(guess=="quit"){
        console.log("your quit!!");
        break;
    }
    else if(guess==random){
        console.log("you guessed right number!!",random);
        break;

    }
    else if(guess<random){
        guess=prompt("hint:your guess was too small");
    }
    else {
        guess=prompt("hint: your guess was too large");
    }
}