const createGameBoard = ()=> {
    return `
<button id="backToMenu" onclick="getEl('main').innerHTML = createMenu()">Back to menu</button>
<div id="gameBoard">

    ${createPlayer(true)}
    
    <div id="score">
        <div id="matchesLeft">
            📍${2*N+1-(userMatches + AIMatches)} left
        </div>
        <label>
            <input id="matchValueInput" type="text" value="1">
        </label>
        <button id="takeMatches" onclick="userTurn()">Take matches</button>
    </div>
    
    ${createPlayer(false)}
    
</div>
    `;
};

const changeTurn = ()=>{
    if (playersTurn) {
        getEl('user-Turn').classList.remove('active-turn');
        getEl('user-Turn').innerText = '';

        getEl('ai-Turn').classList.add('active-turn');
        getEl('ai-Turn').innerText = 'Your turn';

        getEl('matchValueInput').disabled = true;
        getEl('takeMatches').disabled = true;

        playersTurn = !playersTurn;
        AITurn();
    } else {
        getEl('user-Turn').classList.add('active-turn');
        getEl('user-Turn').innerText = 'Your turn';

        getEl('ai-Turn').classList.remove('active-turn');
        getEl('ai-Turn').innerText = '';

        getEl('matchValueInput').disabled = false;
        getEl('takeMatches').disabled = false;

        playersTurn = !playersTurn;
    }
};

const userTurn = () => validate(true, +getEl('matchValueInput').value);
const AITurn = ()=> {
    let lefty = 2 * N + 1 - (userMatches + AIMatches);
    if (isFirstMovePicked){
        if ((lefty - 1) % 4 === 0 || (lefty - 1) % 4 === 1)
            validate(false,1);
        else if ((lefty - 2) % 4 === 0 || (lefty - 2) % 4 === 1)
            validate(false, 2);
        else if ((lefty - 3) % 4 === 0 || (lefty - 3) % 4 === 1) {
            validate(false,3);
        }
    } else {
        if ((lefty - 1) % 4 === 0 || (lefty - 1) % 4 === 1)
            validate(false, (!AIMatches) ? 1 : 1);
        else if ((lefty - 2) % 4 === 0 || (lefty - 2) % 4 === 1)
            validate(false, (!AIMatches) ? 1 : 2);
        else if ((lefty - 3) % 4 === 0 || (lefty - 3) % 4 === 1) {
            validate(false, (!AIMatches) ? 1 : 3);
        }
    }
};
const validate = (isUser, val)=>{
    console.log(
        !isNaN(val),
        val > 0,
        val <= M,
        val <= 2*N+1 - (userMatches + AIMatches)
    )

    if (!isNaN(val) &&
        val > 0 &&
        val <= M &&
        val <= 2*N+1 - (userMatches + AIMatches)){

        if (isUser) {
            userMatches += val;

        } else
            AIMatches += val;

        subtractValFrom2N1();
    } else {
        alert('Invalid value! Try again.')
    }
};

const subtractValFrom2N1 = ()=>{
    getEl('matchesLeft').innerText = `📍${2*N+1-(userMatches + AIMatches)} left`;
    getEl('user-Score').innerText = `📍${userMatches}`;
    getEl('ai-Score').innerText = `📍${AIMatches}`;

    if (areMatchedLeft()){
        changeTurn();
    } else {
        showWinner();
    }
};
const areMatchedLeft = ()=>{
    if (2*N+1 - (userMatches + AIMatches) > 0)
        return true;
    return false;
};
const showWinner = ()=>{
    if (userMatches%2 === 0){
        getEl('user-Turn').classList.add('active-turn');
        getEl('user-Turn').innerText = 'YOU WON!';

        getEl('ai-Turn').classList.remove('active-turn');
        getEl('ai-Turn').innerText = 'You lose';
    } else {
        getEl('ai-Turn').classList.add('active-turn');
        getEl('ai-Turn').innerText = 'YOU WON!';

        getEl('user-Turn').classList.remove('active-turn');
        getEl('user-Turn').innerText = 'You lose';
    }

    getEl('matchValueInput').disabled = true;
    getEl('takeMatches').disabled = true;
}
