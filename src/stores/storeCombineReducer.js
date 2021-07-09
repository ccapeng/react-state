import { combineReducers } from "redux";
import { createStore } from "redux";

const ACTIONS = {
  COUNT1: "count1",
  COUNT2: "count2",
  COUNT3: "count3",
  COUNT4: "count4"
}

export const increaseCount1 = (count) => {
  return {
    type: ACTIONS.COUNT1,
    payload: count
  }
}
  
export const increaseCount2 = (count) => {
  return {
    type: ACTIONS.COUNT2,
    payload: count
  }
}
  
export const increaseCount3 = (count) => {
  return {
    type: ACTIONS.COUNT3,
    payload: count
  }
}
  
export const increaseCount4 = (count) => {
  return {
    type: ACTIONS.COUNT4,
    payload: count
  }
}

const initialCount1 = 0;
const initialCount2 = 0;
const initialCount3 = 0;
const initialCount4 = 0;

// const initialCount = {
//   count1: initialCount1,
//   count2: initialCount2,
//   count3: initialCount3,
//   count4: initialCount4
// }

export const count1 = (state = initialCount1, action) => {
  switch (action.type) {
    case ACTIONS.COUNT1:
      return state + action.payload;
    default:
      return state;
  }
};
export const count2 = (state = initialCount2, action) => {
  switch (action.type) {
    case ACTIONS.COUNT2:
      return state + action.payload;
    default:
      return state;
  }
};
export const count3 = (state = initialCount3, action) => {
  switch (action.type) {
    case ACTIONS.COUNT3:
      return state + action.payload;
    default:
      return state;
  }
};
export const count4 = (state = initialCount4, action) => {
  switch (action.type) {
    case ACTIONS.COUNT4:
      return state + action.payload;
    default:
      return state;
  }
};

const counts = combineReducers({
  count1,
  count2,
  count3,
  count4
});

export const store = createStore(
  counts,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);