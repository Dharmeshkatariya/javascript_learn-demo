let userScore = 0;
let computerscore = 0;
let choices = document.querySelectorAll(".choice");

let compParaScore = document.getElementById("Computer-score")
let userParaScore = document.getElementById("user-score");

const msg = document.querySelector("#msg");

///  genarate computer choices 

const genarateComputeChoidses = () => {
    const options = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random() * 3);
    return options[index];
}

const drawGame = () => {
    msg.innerText = "Game Was Draw";
    msg.style.backgroundColor = "blue";
}

const playGame = (choicedId) => {
    let compchoise = genarateComputeChoidses()
    console.log("user", choicedId);
    console.log("comp", compchoise);

    if (choicedId === compchoise) {
        drawGame()
    } else {
        let userwin = true;

        if (choicedId === "rock") {
            // paper and sessior 

            userwin = compchoise === "paper" ? false : true;

        } else if (choicedId === "paper") {

            userwin = compchoise === "scissors" ? false : true;


        } else {
            userwin = compchoise === "rock" ? false : true


        }

        showWinner(userwin, choicedId, compchoise)

    }
}



const showWinner = (uwin, choicedId, compchoise) => {
    if (uwin) {
        // let user = userParaScore.innerText;
        // let usersco = parseInt(user);
        // usersco++;
        userScore++;


        userParaScore.innerText = userScore;

        console.log("you win");
        msg.innerText = `YOu win Your ${choicedId} beats on ${compchoise}`;
        msg.style.backgroundColor = "green";


    } else {
        // let comp = compParaScore.innerText;
        // let compscore0 = parseInt(comp);
        // compscore0++;
        computerscore++



        compParaScore.innerText = computerscore;

        console.log("you lose");
        msg.innerText = `You lost ${compchoise}  beates on ${choicedId}`;
        msg.style.backgroundColor = "red";

    }

}

choices.forEach((c) => {
    console.log(c);
    c.addEventListener("click", () => {
        const choicedId = c.getAttribute("id");
        playGame(choicedId)


    })

});