import React from 'react';
import {useAppSelector} from "../../Hooks/useAppSelector";
import TodosTable from "./TodosTable";
import EmptyTodos from "./EmptyTodos";

const Todos = () => {

    const { todos } = useAppSelector(state => state.main)

    return (
        <>
            { todos.length > 0 ? <TodosTable /> : <EmptyTodos /> }
        </>
    );
};

export default Todos;