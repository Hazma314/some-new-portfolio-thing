var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors");

var playerChoice
var compChoice

rock.onclick = function rockChosen() {
    playerChoice = 0
    console.log("rock")
    compChoice = Math.floor(Math.random()*3)
    console.log(compChoice)

    if (playerChoice == compChoice) {
        document.getElementById("comp").innerHTML="The computer chose rock."
        console.log("Tie")
        document.getElementById("outcome").innerHTML="Tie"
    }
    if (compChoice == 1) {
        document.getElementById("comp").innerHTML="The computer chose paper."
        console.log("Loss")
        document.getElementById("outcome").innerHTML="You Lost."
    }
    if(compChoice == 2) {
        document.getElementById("comp").innerHTML="The computer chose scissors."
        console.log("Win")
        document.getElementById("outcome").innerHTML="You Win!"
    }
}

paper.onclick = function paperChosen() {
    playerChoice = 1
    console.log("paper")
    compChoice = Math.floor(Math.random()*3)
    console.log(compChoice)

    if (playerChoice == compChoice) {
        document.getElementById("comp").innerHTML="The computer chose paper."
        console.log("Tie")
        document.getElementById("outcome").innerHTML="Tie"
    }
    if (compChoice == 2) {
        document.getElementById("comp").innerHTML="The computer chose scissors."
        console.log("Loss")
        document.getElementById("outcome").innerHTML="You Lost."
    }
    if(compChoice == 0) {
        document.getElementById("comp").innerHTML="The computer chose rock."
        console.log("Win")
        document.getElementById("outcome").innerHTML="You Win!"
    }
}

scissors.onclick = function scissorsChosen() {
    playerChoice = 2
    console.log("scissors")
    compChoice = Math.floor(Math.random()*3)
    console.log(compChoice)

    if (playerChoice == compChoice) {
        document.getElementById("comp").innerHTML="The computer chose scissors."
        console.log("Tie")
        document.getElementById("outcome").innerHTML="Tie"
    }
    if (compChoice == 0) {
        document.getElementById("comp").innerHTML="The computer chose rock."
        console.log("Loss")
        document.getElementById("outcome").innerHTML="You Lost."
    }
    if(compChoice == 1) {
        document.getElementById("comp").innerHTML="The computer chose paper."
        console.log("Win")
        document.getElementById("outcome").innerHTML="You Win!"
    }
}

