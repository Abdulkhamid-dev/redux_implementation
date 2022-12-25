import {COUNT_TYPES} from './CountActions.js'

export const counter = (state = 0, action) => {
    switch (action.type) {
        case COUNT_TYPES.INCREMENT:
            return state + 1;
        case COUNT_TYPES.DECREMENT:
            return state - 1;
        default:
            return state;
    }
};
