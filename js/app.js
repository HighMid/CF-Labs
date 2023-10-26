/**
 * 
 * PlaceHolder for Comments
 * 
 */

"use strict";

// Variables Dec

let username, play = true;

alert("Hey Friend, Welcome to this page!")

window.onload = function() {
    username = getname();

play = playconfirmation(username);

if (play == true){

    getinput();
    alert("Hell yeah " + username + " thanks for playing! See you around.")
}
}


function getinput()
{
    let choice1, choice2, choice3, choice4, choice5, choice6, choice7;
    let randNum, chances = 4, score = 0, scoreInt = 0;
    let manyoptions = ['Pokemon Emerald' , 'Nier Automata' , 'Final Fantasy X' , 'Final Fantasy 7/Crisis Core' , 
                        'Dark Souls' , 'Danganronpa' , 'DOOM' , 'Halo 3' , 'Super Smash Bros.' , 'Stray'];
    let found = false;

    choice1 = prompt("Am I trying to be a Software Developer?");
    choice1 = choice1.toLowerCase();
    scoreInt += checkinput1(choice1);
    console.log(scoreInt);

    choice2 = prompt("Am I currently in the Air Force?");
    choice2 = choice2.toLowerCase();
    scoreInt += checkinput2(choice2);
    console.log(scoreInt);

    choice3 = prompt("Am I working towards my Bachelors?")
    choice3 = choice3.toLowerCase();
    scoreInt += checkinput2(choice3);
    console.log(scoreInt);

    choice4 = prompt("Am I a G A M E R ?");
    choice4 = choice4.toLowerCase();
    scoreInt += checkinput1(choice4);
    

    choice5 = prompt("Do I play the Cello?");
    choice5 = choice5.toLowerCase();
    scoreInt += checkinput2(choice5);
    

    alert("Let's play a number guessing game! You have 4 chances to guess the number! ");
    randNum = guessgame(1, 8); 
    numberGuessingGame();
    alert("Alright, next question there are many answers! Pretty easy too.");
    manyAnswers();


    function numberGuessingGame(){

    
    for (let i = 0; i <= 4; i++)
    {
        
        choice6 = 0
        choice6 = prompt("Im guessing a number between 1 - 8, what is it? Remaining Chances = " + chances);
        choice6 = parseInt(choice6);



        if (chances == 0)
        {
            alert("Sorry " + username + ", the number was " + randNum + ". You'll get it next time!");
        }

        if (isNaN(choice6))
        {

            alert("Wait that's not a number. Sorry man, gonna have to strike you down by 1.");
            chances--;
            continue;

        }

        if (choice6 != randNum)
        {

            if (choice6 < randNum){

                alert("Sorry friendo, that's too low!");
                chances--;

            }else if(choice6 === 1337){

                alert("Holy, ok Debugger, move along!");
                break;
            }
            else if(choice6 > randNum){

                alert("Sorry friendo, that's too high!");
                chances--;

            }

        }else if(choice6 = randNum)
        {
                alert("HELL YEAH, the number was " + randNum + " !");
                scoreInt += 1;
                break;
        }

    }
    } 

    
    function manyAnswers() {

    for (let i = 6; i > 0; i--)
    {
        choice7 = prompt("Name one game that I liked! Remaining Chances = " + i);
        choice7 = choice7.toLowerCase();

        for (let u = 0; u < manyoptions.length; u++)
        {
            if (choice7 == manyoptions[u].toLowerCase()){
                alert("Hell yeah that's one of them!");
                found = true;
                scoreInt += 1;
                break;
            }
        }
        if(!found){
            alert("Not sure how you did it, but you're WRONG!");

        }else if(found = true){
            break;
        }
        
    }
}
    score = parseInt(scoreInt);
    alert("Hell yeah " + username + ", you got " + score + " out of 7 correct!");
    
}

function checkinput1(choice)
{
    switch (choice){

        case 'yes':

            alert("You are correct!")
            return 1;

        case 'no':

            alert("Sorry that's incorrect.");
            return 0;

        default:

            alert("Sorry I didn't understand, so I'll just say you didn't get it.");
            return 0;
        
    }

}

function checkinput2(choice)
{
    switch (choice){

        case 'no':

            alert("You are correct!")
            return 1;

        case 'yes':

            alert("Sorry that's incorrect.");
            return 0;

        default:

            alert("Sorry I didn't understand, so I'll just say you didn't get it.");
            return 0;
        
    }
}

function getname(name)
{

    name = prompt("Hey you mind if I catch your name?")

    if (name == null || name == ''){

        alert("Sweet mother of god not again!")
        name = prompt("Ok fine I'll just have to name you myself if you don't enter one now.");
        
        if (name == null || name == ''){
            name = "Jameson";
            alert("Well since you want me to name you so badly, I'll name you Jameson.");
        }
    }    
    alert("Pleasure to meet you " + name + " !");
    return name;
}
function playconfirmation(name)
{

    let option;

    option = prompt("Hey " + name + " want to play the About Me guessing game? Yes/No")
    if (option == null || option == ''){

        alert("Alright you could have just said no shesh, enjoy your stay!")
        return false;

    }else{

        option = option.toLowerCase();
    }
    
    switch (option){

        case 'yes':

        alert("Hell yeah let's go " + name + "!");
        return true;

    case 'no':

        alert("Yeah I feel ya, maybe next time " + name + ", take care!");
        return false;

    default:

        alert("Well you didn't say no so, Yes you are!");
        return true;

    }

    


}

function guessgame(min, max) //  Generates a number between 1 and 3, including both. Because who doesn't love randomness!
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**function checknumbers(num)
{
    if (num !== undefined){

    }
}
*/

