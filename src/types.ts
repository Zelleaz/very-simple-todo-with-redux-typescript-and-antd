/*
* Общие типы для приложения
*/

export type Action<T, P> = {
    type: T,
    payload: P
}

export interface Task {
    id: string
    title: string
    body: string
    isCompleted: boolean
    creationDate: string
}

export interface EditedTask {
    id: string
    title: string
    body: string
    isCompleted: boolean
}

export type Todos = Task[]