import React, {FC} from 'react';
import {Button} from "antd";
import {useAppDispatch} from "../../Hooks/useAppDispatch";
import {TodosActionCreators} from "../../Store/todoReducer/actions";

interface DeleteTodoButtonProps {
    id: string
}

const DeleteTodoButton: FC<DeleteTodoButtonProps> = ({ id }) => {
    const dispatch = useAppDispatch()

    const deleteTodo = () => {
        dispatch(TodosActionCreators.delete(id))
    }

    return (
        <Button onClick={deleteTodo} danger type='primary'>
            Удалить
        </Button>
    );
};

export default DeleteTodoButton;