const createGameBoard = ()=> {
    return `
<button id="backToMenu" onclick="returnToMenu()">Back to menu</button>
<div id="gameBoard">

    ${createPlayer(true)}
    
    <div id="score">
        <div id="matchesLeft">
            📍${N-(userMatches + AIMatches)} left
        </div>
        <label>
            <input type="text" value="2">
        </label>
        <button onclick="userTurn()">Take matches</button>
    </div>
    
    ${createPlayer(false)}
    
</div>
    `;
};

const returnToMenu = ()=>{
    getEl('main').innerHTML = createMenu();
};



const changeTurn = ()=>{
    if (playersTurn) {
        getEl('user-Turn').classList.remove('active-turn');
        getEl('user-Turn').innerText = '';

        getEl('ai-Turn').classList.add('active-turn');
        getEl('ai-Turn').innerText = 'Your turn';
        //todo
        //disable user's input
        AITurn();
    } else {
        getEl('user-Turn').classList.add('active-turn');
        getEl('user-Turn').innerText = 'Your turn';

        getEl('ai-Turn').classList.remove('active-turn');
        getEl('ai-Turn').innerText = '';
    }
};

const userTurn = ()=>{
    //todo
    //get value from input
    validate();
};
const AITurn = ()=>{
    //todo
    //select how many to take
    validate();
};
const validate = (isUser, k)=>{
    //todo
    //check 2*N+1 - (userMatches + AIMatches) > 0????
    //update player's score
    if (isUser)
        userMatches += k;
    else
        AIMatches += k;

    if (areMatchedLeft){
        //todo show winner
        showWinner();
    } else {
        changeTurn();
    }

};

const areMatchedLeft = ()=>{
    if (2*N+1 - (userMatches + AIMatches) > 0)
        return true;
    return false;
};
const showWinner = ()=>{
    //todo
    //
    if (userMatches%2 === 0){
        //user won
    } else {
        //ai won
    }

}
