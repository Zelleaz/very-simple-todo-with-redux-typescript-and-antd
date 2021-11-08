import React, {FC} from 'react';
import {Button, Checkbox, Form, Input, Modal} from 'antd'
import {v4} from "uuid";
import {useAppDispatch} from "../../Hooks/useAppDispatch";
import {TodosActionCreators} from "../../Store/todoReducer/actions";
import {getCreationDate} from "../../Utils/getCreationDate";

interface CreateTodoProps {
    isVisible: boolean
    closeModal: () => void
}

interface FormData {
    title: string
    body: string
    isCompleted: boolean
}

const CreateTodo: FC<CreateTodoProps> = ({ isVisible,closeModal }) => {
    const dispatch = useAppDispatch()
    const onFinish = ({ title, isCompleted, body }: FormData) => {
        dispatch(TodosActionCreators.create({
            id: v4(),
            body,
            isCompleted,
            title,
            creationDate: getCreationDate()
        }))
        closeModal()
    }

    return (
        <Modal cancelText='Отменить' okText='Выйти' onOk={closeModal} title='Создание новой заметки' onCancel={closeModal} destroyOnClose visible={isVisible}>
            <Form onFinish={onFinish}>
                <Form.Item
                    label='Заголовок'
                    name='title'
                    rules={[{required: true, message: 'Введите заголовок заметки.'}]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label='Описание'
                    name='body'
                    rules={[{required: true, message: 'Укажите описание заметки.'}]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name='isCompleted'
                    valuePropName="checked"
                >
                    <Checkbox>Выполнено</Checkbox>
                </Form.Item>

                <Form.Item>
                    <Button htmlType='submit' type='primary'>Создать</Button>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default CreateTodo;