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
    // Your JavaScript code from app.js here
}


username = getname();

play = playconfirmation(username);

if (play == true){

    getinput();
    alert("Hell yeah " + username + " thanks for playing! See you around.")
}


function getinput()
{
    let choice1, choice2, choice3, choice4, choice5;

    choice1 = prompt("Am I trying to be a Software Developer?");
    choice1 = choice1.toLowerCase();
    checkinput1(choice1);

    choice2 = prompt("Am I currently in the Air Force?");
    choice2 = choice2.toLowerCase();
    checkinput2(choice2);

    choice3 = prompt("Am I working towards my Bachelors?")
    choice3 = choice3.toLowerCase();
    checkinput2(choice3);

    choice4 = prompt("Am I a G A M E R ?");
    choice4 = choice4.toLowerCase();
    checkinput1(choice4);

    choice5 = prompt("Do I play the Cello?");
    choice5 = choice5.toLowerCase();
    checkinput2(choice5);

    
}

function checkinput1(choice)
{
    switch (choice){

        case 'yes':

            console.log("You are correct!")
            break;

        case 'no':

            console.log("Sorry that's incorrect.");
            break;

        default:

            console.log("Sorry I didn't understand, so I'll just say you didn't get it.");
            break;
        
    }

}

function checkinput2(choice)
{
    switch (choice){

        case 'no':

            console.log("You are correct!")
            break;

        case 'yes':

            console.log("Sorry that's incorrect.");
            break;

        default:

            console.log("Sorry I didn't understand, so I'll just say you didn't get it.");
            break;
        
    }
}

function getname(name){

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
function playconfirmation(name){

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

        console.log("Hell yeah let's go " + name + "!");
        return true;

    case 'no':

        console.log("Yeah I feel ya, maybe next time " + name + ", take care!");
        return false;

    default:

        console.log("Well you didn't say no so Yes you are !");
        return true;

    }

    


}