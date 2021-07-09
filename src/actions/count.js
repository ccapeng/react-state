export const ACTIONS = {
  COUNT1: "count1",
  COUNT2: "count2",
  COUNT3: "count3",
  COUNT4: "count4"
}

export const setCount1 = (count) => {
  return {
    type: ACTIONS.COUNT1,
    payload: count
  }
}
  
export const setCount2 = (count) => {
  return {
    type: ACTIONS.COUNT2,
    payload: count
  }
}
  
export const setCount3 = (count) => {
  return {
    type: ACTIONS.COUNT3,
    payload: count
  }
}
  
export const setCount4 = (count) => {
  return {
    type: ACTIONS.COUNT4,
    payload: count
  }
}