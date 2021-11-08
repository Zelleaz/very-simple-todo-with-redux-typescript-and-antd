import React, {useState} from 'react';
import {Button} from "antd";
import CreateTodo from "../Modals/CreateTodo";

const CreateTodoButton = () => {
    const [isVisible, setIsVisible] = useState(false)
    return (
        <>
            <Button onClick={() => setIsVisible(true)} style={{marginLeft: 10}} type='primary'>Добавить новую</Button>
            <CreateTodo isVisible={isVisible} closeModal={() => setIsVisible(false)} />
        </>
    );
};

export default CreateTodoButton;