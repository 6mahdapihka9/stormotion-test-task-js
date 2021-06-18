const createPlayer = (isFirst)=> {


    if (isFirst)
        return `
        <div class="player">
            <div id="${isFirstMovePicked? 'user' : 'ai' }-Icon" class="pl-Icon">
                ${isFirstMovePicked? '😎' : '🤖' }
            </div>
            <div>
                <div id="${isFirstMovePicked? 'user' : 'ai' }-Turn" class="pl-Turn ${isFirst? 'active-turn' : '' }">
                    ${isFirst? 'Your turn ' : '' }               
                </div>
                <div id="${isFirstMovePicked? 'user' : 'ai' }-Score" class="pl-Score">
                    📍${isFirstMovePicked? userMatches : AIMatches }
                </div>
            </div>
        </div>
        `;
    else

        return `
        <div class="player">
            <div id="${isFirstMovePicked? 'ai' : 'user' }-Icon" class="pl-Icon">
                ${isFirstMovePicked? '🤖' : '😎' }
            </div>
            <div>
                <div id="${isFirstMovePicked? 'ai' : 'user' }-Turn" class="pl-Turn ${isFirst? 'active-turn' : '' }">
                    ${isFirst? 'Your turn ' : '' }   
                </div>
                <div id="${isFirstMovePicked? 'ai' : 'user' }-Score" class="pl-Score">
                    📍${isFirstMovePicked? AIMatches : userMatches }
                </div>
            </div>
        </div>
        `;
};
