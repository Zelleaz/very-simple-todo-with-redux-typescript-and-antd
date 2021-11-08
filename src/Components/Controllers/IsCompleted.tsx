import {Checkbox, Typography} from 'antd';
import React, {FC} from 'react';
import {useAppDispatch} from "../../Hooks/useAppDispatch";
import {TodosActionCreators} from "../../Store/todoReducer/actions";

interface IsCompletedProps {
    id: string
    isCompleted: boolean
}

const IsCompleted: FC<IsCompletedProps> = ({ isCompleted, id }) => {
    const {Text} = Typography
    const dispatch = useAppDispatch()
    const toggleTodo = () => {
        dispatch(TodosActionCreators.toggleTodoStatus(id))
    }

    return (
        <div style={{cursor: 'pointer'}} onClick={toggleTodo}>
            <Checkbox style={{marginRight: 10}} checked={isCompleted} />
            {
                isCompleted ?
                    <Text type='success'>Выполнено</Text>
                    :
                    <Text type='danger'>Не выполнено</Text>
            }
        </div>
    );
}

export default IsCompleted;