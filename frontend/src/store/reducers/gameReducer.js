
const initialState = {
    isGameActive: false,
    players: {
        X: {
            positions: [],
            playerName: ''
        },
        O: {
            positions: [],
            playerName: ''
        }
    },
    winner: null,
    currShape:'X'
};

export default function (state = initialState, action) {
    switch (action.type) {
        case 'ADD_POSITION':
            return {
                ...state,
                players: {
                    ...state.players,
                    [action.data.shape]: {
                        ...state.players[action.data.shape],
                        positions: [...state.players[action.data.shape].positions, action.data.squarePosition],
                    }
                },
            };
        case 'ACTIVE_GAME':
            return {
                ...state,
                isGameActive: action.isGameActive
            };
        case 'SET_WINNER':
            return {
                ...state,
                winner: action.data
            };

        case 'RESTART_GAME':
            return {
                ...state,
                players: {
                    ...action.data
                },
                winner: null
            };
        case 'DEACTIVATE_GAME':
            return {
                ...state,
                isGameActive: false
            };
        case 'ACTIVATE_GAME':
            return {
                ...state,
                isGameActive: true
            };


        default:
            return state;
    }
}