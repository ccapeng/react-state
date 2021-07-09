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
  console.log("increaseCount4", count);
  return {
    type: ACTIONS.COUNT4,
    payload: count
  }
}

const initialCount1 = 0;
const initialCount2 = 0;
const initialCount3 = 0;
const initialCount4 = 0;

const initialCount = {
  count1: initialCount1,
  count2: initialCount2,
  count3: initialCount3,
  count4: initialCount4
}

export const counts = (state = initialCount, action) => {
  console.log("counts:", state, action)
  switch (action.type) {
    case ACTIONS.COUNT1:
      return {...state, count1: state.count1 + action.payload};
    case ACTIONS.COUNT2:
      return {...state, count2: state.count2 + action.payload};
    case ACTIONS.COUNT3:
      return {...state, count3: state.count3 + action.payload};
    case ACTIONS.COUNT4:
      return {...state, count4: state.count4 + action.payload};
    default:
      return state;
  }
};
