import {Action, EditedTask, Task, Todos} from "../../types";

export interface TodoState {
    todos: Todos,
}

export enum TodoActionTypes {
    CREATE_TODO = 'CREATE_TODO',
    EDIT_TODO = 'EDIT_TODO',
    DELETE_TODO = 'DELETE_TODO',
    TOGGLE_TODO_STATUS = 'TOGGLE_TODO_STATUS',
}

export type createTodo = Action<TodoActionTypes.CREATE_TODO, Task>
export type editTodo = Action<TodoActionTypes.EDIT_TODO, EditedTask>
export type deleteTodo = Action<TodoActionTypes.DELETE_TODO, string>
export type toggleTodoStatus = Action<TodoActionTypes.TOGGLE_TODO_STATUS, string>

export type TodoAction =
    createTodo |
    editTodo |
    deleteTodo |
    toggleTodoStatus
