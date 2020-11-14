import { ADD_TODO } from './action'
const preState = {
  todoList: [],
}
const reducer = (state = preState, action) => {
  if (action.type === ADD_TODO) {
    let newState = Object.assign({}, state)
    newState.todoList.push(action.value)
    return newState
  }
  return state
}
export default reducer
