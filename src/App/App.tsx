import React from 'react';
import './App.css';
import {Button, Input, List, Radio } from 'antd';
import { DownloadOutlined, CheckOutlined, CloseOutlined } from '@ant-design/icons';
import ToDoApp from "./ToDoHeader/ToDoApp";



const App = () => {

    const data = [
        'Task 1',
        'Task 2',
        'Task 3',
        'Task 4',
        'Task 5',
    ];

  return (
    <div className="appMain">


        <div className="todoList">
            <Input placeholder="Поиск" style={{width: '340px'}}/>
            <Radio.Group value={'large'} >
                <Radio.Button value="large">Сделаные</Radio.Button>
                <Radio.Button value="default">По разделам</Radio.Button>

            </Radio.Group>
        </div>

        <div>
            <List
                size="small"

                bordered
                dataSource={data}
                renderItem={
                    item =>
                        <List.Item className="todoItem">
                            <div>
                                {item}
                            </div>
                            <div>
                                <Button className="button" type="primary" shape="circle" icon={<CheckOutlined />} size={'large'} />
                                <Button className="button"  shape="circle" icon={<CloseOutlined />} size={'large'} />
                            </div>
                        </List.Item>}
            />
        </div>

        <ToDoApp />
    </div>
  );
}

export default App;
