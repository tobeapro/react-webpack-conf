export const ADD_TODO = 'add_todo'
export function ADD_TODO_FN(value) {
  return {
    type: ADD_TODO,
    value,
  }
}
