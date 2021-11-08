import React, {FC, useState} from 'react';
import {Button} from "antd";
import EditTodo from "../Modals/EditTodo";
import {Task} from "../../types";

const EditButton: FC<Task> = ({ id, title, body, creationDate, isCompleted }) => {
    const [isVisible, setIsVisible] = useState(false)
    return (
        <>
            <Button onClick={() => setIsVisible(true)} type='primary'>
                Изменить
            </Button>
            <EditTodo
                isVisible={isVisible}
                closeModal={() => setIsVisible(false)}
                todo={{id, title, body, creationDate, isCompleted}}
            />
        </>
    );
};

export default EditButton;