// main homepage of app
import React, {useState} from 'react';
import TodoForm from "./TodoForm";
import TodoItems from "./TodoItems";

const TodoList = () => {
    const [todos, setTodos] = useState([]);         // Each Todo: {id, text, strikeout}

    const addTodo = todo => {
        if (todo.text) {
            const newTodos = [todo, ...todos];
            setTodos(newTodos);
        }
        //console.log({todos});
    }

    const deleteTodo = todo => {
        const newTodos = [...todos].filter(t => t.id !== todo.id);
        setTodos(newTodos);
    }

    const strikeoutTodo = todo => {
        const newTodos = [...todos];
        let foundTodo = newTodos.find(t => t.id === todo.id);
        foundTodo.strikeout = !foundTodo.strikeout;
        setTodos(newTodos);
        // console.log(todos);
    }

    return (
        <div>
            <h1>What's Planned For Today?</h1>
            <TodoForm onSubmit={addTodo} />
            <div className="todoItemsList">
                <TodoItems todos={todos} strikeoutTodo={strikeoutTodo} />
            </div>
        </div>
    )

};

export default TodoList;