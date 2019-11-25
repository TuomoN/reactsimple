import { createStore } from "redux";

const initialState = {
  name: 'Tuomo Nyrhilä',
  date: new Date()
}
  
export const setName = name => ({
  type: 'setName',
  name
})

const reducer = (state, action) => {
  if(state == undefined) {
    return initialState()
  }

  switch(action.type) {
    case 'setName':
      return {
        date: new Date(),
        name: action.name
      }
    default:
      return state
  }
}

export const store = createStore(reducer, initialState)