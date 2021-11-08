import React from 'react';
import Todos from "../../Components/Todos/Todos";
import {Typography} from "antd";

const Home = () => {
    return (
        <div className='container'>
            <Typography.Title>Список задач</Typography.Title>

            <Todos />
        </div>
    );
};

export default Home;