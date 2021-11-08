import React, {FC} from 'react';
import {Button, Checkbox, Form, Input, Modal} from "antd";
import {Task} from "../../types";
import {useAppDispatch} from "../../Hooks/useAppDispatch";
import {TodosActionCreators} from "../../Store/todoReducer/actions";

interface EditTodoProps {
    isVisible: boolean
    closeModal: () => void
    todo: Task
}

interface FormData {
    title: string
    isCompleted: boolean
    body: string
}

const EditTodo: FC<EditTodoProps> = ({ isVisible, closeModal, todo }) => {
    const dispatch = useAppDispatch()
    const {isCompleted, body, title} = todo

    const onFinish = (data: FormData) => {
        dispatch(TodosActionCreators.edit({
            id: todo.id,
            title: data.title,
            body: data.body,
            isCompleted: data.isCompleted
        }))
        closeModal()
    }

    return (
        <Modal title={`Изменение заметки: '${todo.title}'`} cancelText='Отменить' okText='Выйти' onOk={closeModal} onCancel={closeModal} destroyOnClose visible={isVisible}>
            <Form onFinish={onFinish}>
                <Form.Item
                    label='Заголовок'
                    initialValue={title}
                    name='title'
                    rules={[{required: true, message: 'Введите название задачи.'}]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label='Описание'
                    initialValue={body}
                    name='body'
                    rules={[{required: true, message: 'Введите описание задачи.'}]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    initialValue={isCompleted}
                    name='isCompleted'
                    valuePropName="checked"
                >
                    <Checkbox>Выполнено</Checkbox>
                </Form.Item>

                <Form.Item>
                    <Button htmlType='submit' type='primary'>Изменить</Button>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default EditTodo;