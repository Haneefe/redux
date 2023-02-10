const redux = require("redux");
const createStore = redux.createStore;
const produce = require("immer").produce;
/*Handling nested state without immer */
/* initial state */

// const initialstate = {
//   name: "haneef",
//   address: {
//     street: "street",
//     city: "chennai",
//     state: "Tamil Nadu",
//   },
// };

// /* action creator*/
// const STREET_UPDATED = " STREET_UPDATED";

// const updateStreet = (street) => {
//   return {
//     type: STREET_UPDATED,
//     payload: street,
//   };
// };
// /* reducer */
// const reducer = (state = initialstate, action) => {
//   switch (action.type) {
//     case STREET_UPDATED:
//       return {
//         ...state,
//         address: { ...state.address, street: action.payload },
//       };
//     default:
//       return state;
//   }
// };
// /* store */
// const store = redux.createStore(reducer);
// /* initial state*/
// console.log("Initial state", store.getState());

// //updated state

// const unsubscribe = store.subscribe(() =>
//   console.log("updated state", store.getState())
// );
// store.dispatch(updateStreet("groove street "));
// unsubscribe();

/* working with nested state with immer */

const initialstate = {
  name: "haneef",
  address: {
    street: "street",
    city: "chennai",
    state: "Tamil Nadu",
  },
};

/* action creator*/
const STREET_UPDATED = " STREET_UPDATED";

const updateStreet = (street) => {
  return {
    type: STREET_UPDATED,
    payload: street,
  };
};
/* reducer */
const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case STREET_UPDATED:
      return produce(state, (draft) => {
        draft.address.street = action.payload;
      });
    default:
      return state;
  }
};
/* store */
const store = redux.createStore(reducer);
/* initial state*/
console.log("Initial state", store.getState());

//updated state

const unsubscribe = store.subscribe(() =>
  console.log("updated state", store.getState())
);
store.dispatch(updateStreet("groove street "));
unsubscribe();
