const redux = require("redux")
const reduxLogger = require('redux-logger')

const createStore = redux.createStore
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()

const BUY_CAKE = "BUY_CAKE"
const BUY_ICECREAM = "BUY_ICECREAM"

// Action
function buyCake() {
  // action creator
  return {
    type: BUY_CAKE,
    info: "First redux action"
  };
}

function buyIceCream() {
  return {
    type: BUY_ICECREAM,
    info: "Second redux action"
  };
}

// State
const initialCakeState = {
    numOfCakes: 10
}

const initialIceCreamState = {
    numberOfIceCreams: 20
}

// Reducer
// (previousState, aciton) => newState
const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1
      };

    default:
      return state;
  }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numberOfIceCreams: state.numberOfIceCreams - 1
      };

    default:
      return state;
  }
}

// Multiple reducers
const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

// REDUX STORE
// Holds application state
const store = createStore(rootReducer, applyMiddleware(logger))

// Allows access to state via getState()
console.log("Initial state", store.getState());

// Registers listeners via subscribe(listeners)
const unsubscribe = store.subscribe(() =>{})

// Allows state to be updated via dispatch(action)
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());

unsubscribe();
