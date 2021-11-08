import React, {useState} from 'react';
import CreateTodoButton from "../Controllers/CreateTodoButton";

const EmptyTodos = () => {


    return (
        <div>
            Задачи не найдены.
            <CreateTodoButton />
        </div>
    );
};

export default EmptyTodos;