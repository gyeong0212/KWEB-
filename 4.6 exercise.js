const minRow = 0;
const maxRow = 6;
const minCol = 0;
const maxCol = 7;
const currentposition = {row: 5, col: 0};

function getElementByPosition(position) {
    const rows = position.row;
    const cols = position.col;

    const pos = document.getElementsByClassName('cells')[rows];
    return pos.getElementsByClassName('cell')[cols];
}

function getNewPositionByKey(key) {
    const currentpos = {
        row: currentposition.row,
        col: currentposition.col,
    };

    switch(key) {
        case 'ArrowUp': 
            currentpos.row = currentpos.row - 1;
            break;
        case 'ArrowDown':
            currentpos.row = currentpos.row + 1;
            break;
        case 'ArrowLeft':
            currentpos.col = currentpos.col - 1;
            break;
        case 'ArrowRight':
            currentpos.col = currentpos.col + 1;
            break;
    }
    return currentpos;
}

function isPositionInRange(position) {
    const row = position.row;
    const col = position.col;

    return (row >= minRow) && (row <= maxRow) && (col >= minCol) && (col <= maxCol);
}

function isPositionWall(position) {
    return getElementByPosition(position).classList.contains('wall');
}

document.addEventListener('keyup', event => {
    const key = event.key;
    const currentelement = getElementByPosition(currentposition);
    currentelement.classList.remove('current');
 
    const newpos = getNewPositionByKey(key);

    if(newpos && isPositionInRange(newpos) && !isPositionWall(newpos)) {
        currentposition.row = newpos.row;
        currentposition.col = newpos.col;
    }
    const newelm = getElementByPosition(currentposition);
    newelm.classList.add('current');
    
    if(newelm.classList.contains('target')){
        alert('You Escaped!');
    }
});

