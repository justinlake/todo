import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
const App: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const handleCreate = (todo: Todo) => {
        setTodos([...todos, todo]);
    };

    const handleRemove = (id: string) => {
        const newTodo: Todo[] = todos.filter((todo: Todo) => todo.id !== id);
        setTodos(newTodo);
    };

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
            <TodoForm
                handleCreate={ handleCreate }
                todos={ todos }
            />
        </div>
  );
};

export default App;
