const createGameBoard = ()=> {
    return `
<button id="backToMenu" onclick="returnToMenu()">Back to menu</button>
<div id="gameBoard">

    ${createPlayer(true)}
    
    <div id="score">
        <div id="matchesLeft">
            📍${N-currentlyTaken} left
        </div>
<!--        <div id="playersInput">-->
            <label>
                <input type="text" >
            </label>
            <button onclick="userTurn()">Take matches</button>
<!--        </div>-->
        
    </div>
    
    ${createPlayer(false)}
    
</div>
    `;
};

const returnToMenu = ()=>{
    getEl('main').innerHTML = createMenu();
};


const userTurn = ()=>{

    changeTurn();
};

const changeTurn = ()=>{
    if (playersTurn) {
        getEl('user-Turn').classList.remove('active-turn');
        getEl('user-Turn').innerText = '';

        getEl('ai-Turn').classList.add('active-turn');
        getEl('ai-Turn').innerText = 'Your turn';
    } else {
        getEl('user-Turn').classList.add('active-turn');
        getEl('user-Turn').innerText = 'Your turn';

        getEl('ai-Turn').classList.remove('active-turn');
        getEl('ai-Turn').innerText = '';
    }
};
const AITurn = ()=>{

};
