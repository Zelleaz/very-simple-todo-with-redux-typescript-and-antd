import {EditedTask, Task} from "../../types";
import {
    createTodo,
    deleteTodo,
    editTodo,
    TodoActionTypes,
    toggleTodoStatus
} from "./types";

export const TodosActionCreators = {
    create(payload: Task): createTodo {
        return {
            type: TodoActionTypes.CREATE_TODO,
            payload
        }
    },

    delete(payload: string): deleteTodo {
        return {
            type: TodoActionTypes.DELETE_TODO,
            payload
        }
    },

    edit(payload: EditedTask): editTodo {
        return {
            type: TodoActionTypes.EDIT_TODO,
            payload
        }
    },

    toggleTodoStatus(todoId: string): toggleTodoStatus {
        return {
            type: TodoActionTypes.TOGGLE_TODO_STATUS,
            payload: todoId
        }
    },
}