const redux = require("redux");
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const reduxLogger = require("redux-logger");

/* Creating logger */

const logger = reduxLogger.createLogger();
/* Action */

const CAKE_ORDERED = "CAKE_ORDERED";
const orderCake = (qty = 1) => {
  return {
    type: CAKE_ORDERED,
    payload: qty,
  };
};
const CAKE_ADDED = "CAKE_ADDED";
const restockCake = (qty = 1) => {
  return {
    type: CAKE_ADDED,
    payload: qty,
  };
};

const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const orderIceCream = (qty = 1) => {
  return {
    type: ICECREAM_ORDERED,
    payload: qty,
  };
};
const ICECREAM_ADDED = "ICECREAM_ADDED";
const icreCreamAdded = (qty = 1) => {
  return {
    type: ICECREAM_ADDED,
    payload: qty,
  };
};
/*Initial State */

// const initialState = {
//   numOfCakes: 10,
//   numofIceCream: 20,
// };

const initialCakeState = {
  numOfCakes: 10,
};
const initialIceCreamState = {
  numofIceCream: 20,
};

/* Reducer */
const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCakes: state.numOfCakes - action.payload,
      };
    case CAKE_ADDED:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload,
      };
    default:
      return state;
  }
};
const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case ICECREAM_ORDERED:
      return {
        ...state,
        numofIceCream: state.numofIceCream - action.payload,
      };
    case ICECREAM_ADDED:
      return {
        ...state,
        numofIceCream: state.numofIceCream + action.payload,
      };
    default:
      return state;
  }
};
/** Create Store */
const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});
const store = createStore(rootReducer, applyMiddleware(logger));

/**Getting state using getstate method */
console.log("Initial state", store.getState());

/** Allow app to subscribe to state using subscribe method */
const unsubscribe = store.subscribe(() => {});

/** updating the state using dispatch method */
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(restockCake(5));

/** updating state using  bindActionCreators helper function*/
const action = bindActionCreators(
  { orderCake, restockCake, orderIceCream, icreCreamAdded },
  store.dispatch
);

action.orderCake(3);
action.restockCake(3);
action.orderIceCream(3);
action.icreCreamAdded(3);

unsubscribe();
