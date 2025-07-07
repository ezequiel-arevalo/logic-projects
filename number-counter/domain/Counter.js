export const createCounter = () => {
    let value = 0;

    return {
        getValue: () => value,
        increment: () => { value++ },
        decrement: () => { (value > 0) && value-- },
        reset: () => { value = 0},
    };
}