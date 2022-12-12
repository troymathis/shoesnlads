export const randomRoll = (sides = 6) => {
    return Math.floor(Math.random() * sides) + 1;
}

export const rollDice = (die1) => {
    return {
        type: 'ROLL_DICE',
        die1,
    }
}

export const resetDice = () => {
    return {
        type: 'RESET_DICE',
    };
};