import React from "react";
import {Button, Input} from "antd";

const ToDoApp:React.FC = () => {
    return (
        <div className="todoList">
            <Input placeholder="Добавить задачу" />
            <Button className="button" type="primary"   >Добавить</Button>
        </div>
    )
}

export default ToDoApp