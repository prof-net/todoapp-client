import React, {useState} from "react";
import {Button, Input} from "antd";


interface ToDoFooter {
    onAdd(title: string): void
}

const ToDoFooter:React.FC<ToDoFooter> = (props) => {

    const [title, setTitle] = useState<string>('');

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    }

    const keyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === "Enter") {
            addClick();
        }
    }

    const addClick = () => {
        props.onAdd(title);
        setTitle('');
    }

    const btnClick = () => {
        addClick();
    }

    return (
        <div className="todoList">
            <Input
                onChange={changeHandler}
                onKeyPress={keyPressHandler}
                value={title}
                placeholder="Добавить задачу"
            />
            <Button
                className="button"
                type="primary"
                onClick={btnClick}
            >Добавить</Button>
        </div>
    )
}

export default ToDoFooter