import {TodoAction, TodoActionTypes, TodoState} from "./types";

const initialState: TodoState = {
    todos: [],
}

export const todoReducer = (state: TodoState = initialState, action: TodoAction): TodoState => {
    switch (action.type) {
        case TodoActionTypes.CREATE_TODO:
            return {
                ...state,
                todos: [action.payload, ...state.todos]
            }
        case TodoActionTypes.DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            }
        case TodoActionTypes.EDIT_TODO:
            return <TodoState>{
                ...state,
                todos: state.todos.map(todo => {
                    if (todo.id === action.payload.id) {
                        return {...todo, ...action.payload}
                    }

                    return todo
                })
            }
        case TodoActionTypes.TOGGLE_TODO_STATUS:
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (todo.id === action.payload) {
                        return {...todo, isCompleted: !todo.isCompleted}
                    }

                    return todo
                })
            }
        default: return state
    }
}