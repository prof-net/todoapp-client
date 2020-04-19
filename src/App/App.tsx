import React, {useState} from 'react';
import './App.css';

import ToDoFooter from "./ToDoApp/ToDoFooter";
import ToDoList from "./ToDoList/ToDoList";
import ToDoHeader from "./ToDoHeader/ToDoHeader";
import {ITodo} from "./Interfacrs/interfacrs";

const App = () => {


    const [todos, setTodos] = useState<ITodo[]>([]);

    const listAdd = (title: string) => {
        const newTodo = {
            id: todos.length+1,
            title: title,
            completed: false
        }
        setTodos(prev =>[newTodo, ...prev])
    }

    const toggleTodo = (id: number) => {
        setTodos(prev => prev.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        }) )
    }

    const removeTodo = (id: number) => {
        setTodos(prev => prev.filter(todo => todo.id!==id))
    }

    return (
        <div className="appMain">
            <ToDoHeader/>

            <ToDoList todos={todos} onRemove={removeTodo} onToggle={toggleTodo}/>

            <ToDoFooter onAdd={listAdd}/>
        </div>
    );
}

export default App;
