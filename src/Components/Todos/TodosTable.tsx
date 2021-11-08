import { Table } from 'antd';
import React from 'react';
import {useAppSelector} from "../../Hooks/useAppSelector";
import IsCompleted from "../Controllers/IsCompleted";
import CreateTodoButton from "../Controllers/CreateTodoButton";
import EditButton from "../Controllers/EditButton";
import DeleteTodoButton from "../Controllers/DeleteTodoButton";

const TodosTable = () => {
    const {todos} = useAppSelector(state => state.main)

    const columns = [
        {title: 'Название', dataIndex: 'title', key: 'title'},
        {title: 'Описание', dataIndex: 'body', key: 'body'},
        {title: 'Дата создания', dataIndex: 'creationDate', key: 'creationDate'},
        {title: 'Статус выполнения', render: IsCompleted},
        {title: 'Редактирование', render: EditButton},
        {title: 'Удаление', render: DeleteTodoButton}
    ]

    return (
        <>
            <Table
                columns={columns}
                dataSource={todos}
            />
            <CreateTodoButton />
        </>
    );
};

export default TodosTable;