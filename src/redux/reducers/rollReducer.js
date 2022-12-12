const initialState = {
    die1: null,
}

const rollReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'RESET_DICE':
            return initialState;
        case 'ROLL_DICE':
            return {
                die1: action.die1,
            }
        default:
            return state;
    }
}

export default rollReducer;