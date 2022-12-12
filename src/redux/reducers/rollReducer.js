
const rollReducer = (state = 0, action) => {
    switch(action.type) {
        case 'RESET_DICE':
            return 0;
        case 'ROLL_DICE':
            return {
                die1: action.die1,
            }
        default:
            return state;
    }
}

export default rollReducer;