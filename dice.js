const player1 = document.querySelector('#player1');
const player2 = document.querySelector('#player2');
const rollBtn = document.querySelector('#rollBtn');
const output = document.querySelector('#output');
const diceTemplate = [[5],[1,9],[1,5,9],[1,3,7,9],[1,3,5,7,9],[1,3,4,6,7,9]];



const rollsDice = () => {
    decidesWinner();
    visualResult(decidesWinner());
}

const numberGenerator = (num) => {
    const randomNumber = Math.floor(Math.random() * num) + 1;
    return randomNumber
}

const decidesWinner = () => {
    const roll = [numberGenerator(6), numberGenerator(6)];
    let outputText;

    if (roll[0] == roll[1] ) {outputText= `It's a Draw!`}
    else if (roll[0] > roll[1] ) {outputText=`Player 1 Won`}
    else {outputText=`Player 2 won`};
    
    output.textContent = outputText;
    return roll;
}

const visualResult = (players) => {
    if (player1.hasChildNodes() && player2.hasChildNodes()) {
        player1.removeChild(player1.firstChild);
        player2.removeChild(player2.firstChild);
    }

    player1.appendChild(diceBuilder(players[0]));
    player2.appendChild(diceBuilder(players[1]));
}

const diceBuilder = (num) => {
    const diceDiv = document.createElement('div');
    const diceTemplateArr = diceTemplate[num-1];

    for(let i = 1; i < 10; i++) {
        const dotDiv = document.createElement('div');
        dotDiv.classList.add('dot')
        if (diceTemplateArr.includes(i)) {
            dotDiv.classList.add('black');
        }
        diceDiv.appendChild(dotDiv);
    }
    
    diceDiv.classList.add('dice');
    return diceDiv;
}


rollBtn.addEventListener('click', rollsDice);

