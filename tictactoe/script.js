let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector("#reset-btn");
let newbtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turn0 = true;

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],

];

boxes.forEach((box) => {
    box.addEventListener("click", () => {

        // box.innerText = "h";
        if (turn0) {
            box.innerText = "O";
            turn0 = false;
        } else {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    });




});

function checkWinner() {

    for (let pattern of winPattern) {
        let positionVal1 = boxes[pattern[0]].innerText;
        let positionVal2 = boxes[pattern[1]].innerText;
        let positionVal3 = boxes[pattern[2]].innerText;

        if (positionVal1 != "" && positionVal2 != "" && positionVal3 != "") {


            if (positionVal1 === positionVal2 && positionVal2 === positionVal3) {
                console.log("winner", positionVal1);
                showWinner(positionVal1);

            }
        }

    }

};






function showWinner(win) {

    msg.innerText = `Congrats winner is ${win}`;
    msgcontainer.classList.remove("hide");
 disableBox() 
};


const disableBox = ()=>{
    for (let box of boxes) {
        box.disabled = true;
    }
}



const enableBoxes = ()=>{
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";


    }
}

const resetGame = () => {
    turn0 = true;
    // enableBoxes();
    enableBoxes() 

   
    msgcontainer.classList.add("hide");
}


newbtn.addEventListener("click", resetGame);
resetButton.addEventListener("click", resetGame);