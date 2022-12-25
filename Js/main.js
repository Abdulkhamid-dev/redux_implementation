import { store } from "./store/store.js"
import { COUNT_TYPES } from "./store/Counter/CountActions.js"

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


