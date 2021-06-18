const createMenu = ()=>{
    return `
        <div id="menu" title="Note: If entered values aren't valid, they will set by default.">
            <div class="input">
                <label for="fm">Pick first move</label>
                <input id="fm" name="fm" type="checkbox" checked >
            </div>
            <div class="input">
                <label for="m">Enter m</label>
                <input id="m" name="m" type="text" value="3">
            </div>
            <div class="input">
                <label for="n">Enter n in 2*n+1</label>
                <input id="n" name="n" type="text" value="12">
            </div>
            <button onclick="setGameStarted()">Start game</button>
        </div>
    `;
}

const setGameStarted = ()=>{
    if (isNaN(+getEl('m').value) || isNaN(+getEl('n').value) ||
            +getEl('m').value > +getEl('n').value ||
            +getEl('m').value < 1 || +getEl('n').value < 1) {
        setValues();
    }else
        setValues(+getEl('m').value, +getEl('n').value, getEl('fm').checked);


    getEl('main').innerHTML = createGameBoard();
};
