
function GenRPS(){
    var antwoorden = ["Rock", "Paper", "Scissors"];
    const random = antwoorden[Math.floor(Math.random() * antwoorden.length)];
    document.getElementById("Answer").innerHTML = random;

    var rps = random;

    return rps;
}


function CalcR(){
    var rps = GenRPS();

    if(rps == "Rock"){
        document.getElementById("winloss").innerHTML = "It's a draw!";
    }
    else if(rps == "Paper"){
        document.getElementById("winloss").innerHTML = "You lose!"
    }
    else if(rps == "Scissors"){
        document.getElementById("winloss").innerHTML = "You win!"
    }

}

function CalcP(){
    var rps = GenRPS();
    
    if(rps == "Rock"){
        document.getElementById("winloss").innerHTML = "You win!";
    }
    else if(rps == "Paper"){
        document.getElementById("winloss").innerHTML = "It's a draw!"
    }
    else if(rps == "Scissors"){
        document.getElementById("winloss").innerHTML = "You lose!"
    }
    
    }

function CalcS(){
    var rps = GenRPS();

    if(rps == "Rock"){
        document.getElementById("winloss").innerHTML = "You lose!";
    }
    else if(rps == "Paper"){
        document.getElementById("winloss").innerHTML = "You win!"
    }
    else if(rps == "Scissors"){
        document.getElementById("winloss").innerHTML = "It's a draw!"
    }
        
}