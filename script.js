let currentPlayer = "X";

let array = Array(9).fill(null);  // array for input ... when the input is required from extrenal pov then we design this type of array with space of 0 to 8 that is equal to 9//

let winner = "WINNER   IS   = ";
winner.body.style.backgroundcolor=" #CDCDCD";

function checkWinner(){
    if(
        (array[0]!== null && array[0] === array[1] && array[1]=== array[2] )||
        (array[3]!== null && array[3] === array[4] && array[4]=== array[5] )||
        (array[6]!== null && array[6] === array[7] && array[7]=== array[8] )||
        (array[0]!== null && array[0] === array[3] && array[3]=== array[6] )||
        (array[1]!== null && array[1] === array[4] && array[4]=== array[7] )||
        (array[2]!== null && array[2] === array[5] && array[5]=== array[8] )||
        (array[0]!== null && array[0] === array[4] && array[4]=== array[8] )||
        (array[2]!== null && array[2] === array[4] && array[4]=== array[6] )
    ){
       document.write(winner ,currentPlayer);
       return;
    }

    if(!array.some((e)=> e === null)){
        document.write('DRAW !!!');
    }

}



function handleClick(el)
{
    const id = Number(el.id);
    if (array[id]!== null) return;
    array[id] = currentPlayer;
    el.innerText = currentPlayer;
    checkWinner();
    currentPlayer= currentPlayer==="X" ? "O" : "X";
 }


