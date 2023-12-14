let boxes = document.querySelectorAll(".box");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector("msg-container");
let msg = document.querySelector("#msg");


let trueO = true; // playerO and playerX

let winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];


let resetGame = () => {
    trueO = true;
    enableBoxes();
    msgContainer.className.add("hide");
};

function newBtn(){
    msg.innerHTML = "";
}


boxes.forEach((box) => {
    box.addEventListener("click", () => {

        if(trueO){ //PlayerO
            box.innerText = "O";
            trueO = false;
        }
        else{ // Player X
            box.innerText = "X";
            trueO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});


let disableBoxes = () => {

    for(let box of boxes){
        box.disabled = true;
    }
}

let enableBoxes = () => {

    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

let showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    // msgContainer.className.remove("hide");
    disableBoxes();
}

let checkWinner = () => {
    for(let pattern of winPatterns){

        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
            }
        }
    }
};

newGameBtn.addEventListener("click", resetGame);
// resetBtn.addEventListener("click", resetGame);