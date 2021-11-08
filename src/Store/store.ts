import {combineReducers, createStore} from "redux";
import {todoReducer} from "./todoReducer/todoReducer";

const rootReducer = combineReducers({
    main: todoReducer
})

export const store = createStore(rootReducer)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch