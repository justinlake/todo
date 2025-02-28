import React, { useEffect, useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

import './app.scss';

const App: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
        const todos = JSON.parse(localStorage.getItem('todos')!);
        if (todos) {
            setTodos(todos);
        }
    }, []);

    const handleCreate = (todo: Todo) => {
        setTodos([...todos, todo]);
    };

    const handleRemove = (id: string) => {
        const newTodo: Todo[] = todos.filter((todo: Todo) => todo.id !== id);
        setTodos(newTodo);
    };

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);
    
    const handleComplete = (id: string) => {
        const newTodos: Todo[] = [...todos];
        
        newTodos.find(
            (todo: Todo) => todo.id === id
        )!.complete = !newTodos.find(
            (todo: Todo) => todo.id === id
        )!.complete;
        setTodos(newTodos)
    };

    return (
        <div className="todo-app">
            { !!todos.length &&
                <TodoList
                    handleRemove={ handleRemove }
                    handleComplete={ handleComplete }
                    todos={ todos }
                />
            }
            <TodoForm
                handleCreate={ handleCreate }
                todos={ todos }
            />
        </div>
    );
};

export default App;
