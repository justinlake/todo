import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
const App: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const handleCreate = (todo: Todo) => {
        setTodos([...todos, todo]);
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
