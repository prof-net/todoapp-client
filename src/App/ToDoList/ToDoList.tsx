import React from "react";
import {Button, List} from "antd";
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import {ITodo} from "../Interfacrs/interfacrs";

type ToDoListProps = {
    todos: ITodo[],
    onToggle(id: number): void,
    onRemove(id: number): void,

}


const ToDoList:React.FC<ToDoListProps> = ({todos, onRemove, onToggle}) => {


    return (
        <div>
            <List
                size="small"
                bordered
                dataSource={todos}
                renderItem={
                    item => {
                        let todoItemCompleted = '';

                        if (item.completed) {
                            todoItemCompleted = "todoItemCompleted";
                        }
                        return (
                            <List.Item className="todoItem">
                                <div className={todoItemCompleted}>
                                    {item.title}
                                </div>
                                <div>
                                    {
                                        item.completed ?
                                            <Button className="button"  shape="circle" icon={<CloseOutlined />} size={'large'} /> :
                                            <Button
                                                className="button"
                                                type="primary"
                                                shape="circle"
                                                icon={<CheckOutlined />}
                                                size={'large'}
                                                onClick={()=>onToggle(item.id)}
                                            />
                                    }


                                </div>
                            </List.Item>
                        )
                    }

                }
            />
        </div>
    )
}

export default ToDoList