export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET_COUNTER = 'RESET_COUNTER';

export function increment() {
    return {type: INCREMENT};
}

export function decrement() {
    return {type: DECREMENT};
}

export const resetCounter = () => ({type: RESET_COUNTER});