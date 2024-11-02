let boxes = document.querySelectorAll(".box");
let resetbutton = document.querySelector("#resetbtn");
let newbtn = document.querySelector("#newbtn");
let msgcont = document.querySelector(".msgcontainer");
let msg = document.querySelector("#msg");
let turnO = true;

const patterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 6],
    [6, 7, 8],
    
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerHTML = "O";
            turnO = false;

        } else {
            box.innerHTML = "X";
            turnO = true;
            
        }
        box.disabled = true;
        checkWinner();


    })
});


const showwinner = (winner) => {
    msg.innerText = `congrts, the winner is ${winner}`;
    msgcont.classList.remove("hide");
    disableboxes();
};


const resetgame = () => {
    turnO = true;
    enableboxes();
    msgcont.classList.add("hide");

}


const enableboxes = () => {
    for (let b of boxes) {
        b.disabled = false;
        b.innerText = "";
    }
};

const disableboxes = () => {
    for (let b of boxes) {
        b.disabled = true;
        
    }
};

const checkWinner = () => {
    for (let pattern of patterns) {
        
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
    
        if (pos1 != "" && pos2 != "" && pos3 != "" && pos1 === pos2 && pos2 === pos3) {
                console.log("winner",pos1);
            showwinner(pos1);
    
        }
    }

};
    
newbtn.addEventListener("click",resetgame);
resetbutton.addEventListener("click",resetgame);