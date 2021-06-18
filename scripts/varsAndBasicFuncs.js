//shortcuts for doc funcs
const crEl = tag => document.createElement(tag);
const getEl = id => document.getElementById(id);

//variables
let isFirstMovePicked, M, N, currentlyTaken, playersTurn, userMatches, AIMatches;


//funcs
const setValues = (m = 3, n = 12, fm = true)=>{
    playersTurn = isFirstMovePicked = fm;
    M = m;  N = n;
    currentlyTaken = userMatches = AIMatches = 0;
}

//initiation

getEl('main').innerHTML = createMenu();

//show menu of gameboard
//validate input



