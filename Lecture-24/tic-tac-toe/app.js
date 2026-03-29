const cellElements = document.querySelectorAll('.cell')

// console.log(cellElements);

let circle_turn = false;

for(let cell of cellElements){
    cell.addEventListener('click', handleClick, {once:true})
}

function handleClick(e){
    let clickedCell = e.target;
    let currentClass = circle_turn ? "circle" : "x";
    // marking symbol
    clickedCell.classList.add(currentClass)
    // check win
    if(checkWin(currentClass)){
        document.querySelector('.final-winner').innerHTML = `Winner ${currentClass}`;
        document.querySelector('.final-winner').parentElement.classList.add('show')
    }
    // check draw
    else if(checkDraw()){
        document.querySelector('.final-winner').innerHTML = `Draw Game`;
        document.querySelector('.final-winner').parentElement.classList.add('show')
    }
    // switch x and o
    else{
        circle_turn = !circle_turn;
    }
}
let WINNING_COMBINATION = 
[ 
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6] 
]
function checkWin(currentClass){
    return WINNING_COMBINATION.some((itemRow)=>{
        return itemRow.every((item)=>{
            return cellElements[item].classList.contains(currentClass)
        })
    })
}

function checkDraw(){
    return [...cellElements].every((cell)=>{
        return cell.classList.contains('x') ||  cell.classList.contains('circle')
    })
}

function restartGame(){
    window.location.reload();
}

// document.getElementById('restart-btn').onclick = restartGame;
document.getElementById('restart-btn').addEventListener('click' , restartGame)