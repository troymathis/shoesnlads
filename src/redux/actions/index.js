function randomRoll(sides = 6) {
    return Math.floor(Math.random() * sides) + 1;
}

export const rollDice = () => {
    return {
        type: 'ROLL_DICE',
        die1: randomRoll(),
    }
}