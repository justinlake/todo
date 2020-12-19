import React, { useEffect, useState } from 'react';
import TodoFilter from './TodoFilter';
import TodoItem from './TodoItem';

const TodoList = ({ handleComplete, handleRemove, todos }: TodoList) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([] as any);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    useEffect(() => {
        const results = todos.filter(todo =>
            todo.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(results);
    }, [searchTerm, todos]);

    return (
        <>
            <TodoFilter searchTerm={ searchTerm } handleChange={ (e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}/>
            <ul className="list-group mb-3 todo-list">
                { searchTerm && JSON.stringify(searchResults) === '[]' &&
                    <div className="alert alert-danger" role="alert">
                        No to do items found.
                    </div>
                }

                { searchResults.map((todo: Todo) => (
                    <TodoItem
                        handleComplete={ handleComplete }
                        handleRemove={ handleRemove }
                        key={ todo.id }
                        todo={ todo }
                    />
                )) }
            </ul>
        </>
    );
};

export default TodoList;
