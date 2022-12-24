const COUNT_TYPES = {
    INCREMENT: "INCREMENT",
    DECREMENT: "DECREMENT",
}
const counter = (state = 0, action) => {
    switch (action.type) {
        case COUNT_TYPES.INCREMENT:
            return state + 1;
        case COUNT_TYPES.DECREMENT:
            return state - 1;
        default:
            return state;
    }
};

const createStore = (reducer) => {
    let state;
    let listeners = [];
    const getState = () => state;
    const dispatch = (action) => {
        state = reducer(state, action);
        console.log(listeners);
        listeners.forEach((listener) => listener());
    };
    const subscribe = (listener) => {
        listeners.push(listener);
        return () => {
            listeners = listeners.filter((l) => l !== listener);
        };
    };
    dispatch({});
    return { getState, dispatch, subscribe };
};

const store = createStore(counter);

const renderRealCount = () => {
    document.getElementById("count").innerText = store.getState()
}
const renderFirstComp = () => {
    document.getElementById("firstC").innerText = store.getState()
}
const renderSecondComp = () => {
    document.getElementById("secondC").innerText = store.getState()
}
renderRealCount()
renderFirstComp()
renderSecondComp()

const increment = () => {
    store.dispatch({ type: COUNT_TYPES.INCREMENT });
};
const decrement = () => {
    store.dispatch({ type: COUNT_TYPES.DECREMENT });
};
//  increment & decrement btns
const incBtn = document.getElementById("inc")
const decBtn = document.getElementById("dec")
incBtn.addEventListener("click", () => {
    increment()
})
decBtn.addEventListener("click", () => {
    decrement()
})


//  SUBSCRIPTIONS
store.subscribe(renderRealCount)
let subscribeFirstC = store.subscribe(renderFirstComp)
let subscribeSecondC = store.subscribe(renderSecondComp)
const firstSubsbtn = document.getElementById("firstCompSubs")
const secondSubsbtn = document.getElementById("secondCompSubs")

firstSubsbtn.addEventListener("click", () => {
    store.subscribe(renderFirstComp)
})
secondSubsbtn.addEventListener("click", () => {
    store.subscribe(renderSecondComp)
})
// UNSUBSCRIPTIONS

const firstUnSubsbtn = document.getElementById("firstCompUnSubs")
const secondUnSubsbtn = document.getElementById("secondCompUnSubs")
firstUnSubsbtn.addEventListener("click", () => {
    subscribeFirstC()
})
secondUnSubsbtn.addEventListener("click", () => {
    subscribeSecondC()
})


