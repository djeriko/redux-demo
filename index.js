const redux = require('redux')
const createStore = redux.createStore

const BUY_CAKE = "BUY_CAKE";

// Action
function buyCake() {
 return {
    type: BUY_CAKE,
    info: "First redux aciton"
  }
}

// State
const initialState = {
    numOfCakes: 10
}

// Reducer
// (previousState, aciton) => newState
const reducer = (state = initialState, action) => {
  switch(action.type){
    case BUY_CAKE: return {
        ...state,
        numOfCakes: state.numOfCakes - 1
    }

    default: return state
  }
}

// REDUX STORE
// Holds application state
const store = createStore(reducer)

// Allows access to state via getState()
console.log('Initial state', store.getState())

// Registers listeners via subscribe(listeners)
const unsubscribe = store.subscribe(()=> console.log('Updated state', store.getState()))

// Allows state to be updated via dispatch(action)
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())

unsubscribe()

