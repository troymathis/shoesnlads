const initialState = {
    die1: null,
}

const rollReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'RESET_DICE':
            return initialState;
        case 'ROLL_DICE':
            return state;
        default:
            return state;
    }
}