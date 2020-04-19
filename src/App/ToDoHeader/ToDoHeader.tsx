import React from "react";
import {Input, Radio} from "antd";

const ToDoHeader:React.FC = () => {
    return (
        <div className="todoList">
            <Input placeholder="Поиск" style={{width: '340px'}}/>
            <Radio.Group value={'large'} >
                <Radio.Button value="large">Сделаные</Radio.Button>
                <Radio.Button value="default">По разделам</Radio.Button>

            </Radio.Group>
        </div>
    )
}

export default ToDoHeader