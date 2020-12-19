import React, { useState } from 'react';
import shortid from 'shortid'

const ToDoForm = ({ handleCreate }: TodoForm) => {
    const inputRef = React.useRef<HTMLInputElement>(null);
    const [value, setValue] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (inputRef && inputRef.current!.value) {
            const newTodo: Todo = {
                complete: false,
                id: shortid.generate(),
                name: value
            };

            handleCreate(newTodo);

            inputRef.current!.value = '';
        }
    };

    return (
        <form className="todo-form" onSubmit={ (e) => handleSubmit(e) }>
            <div className="form-group">
                <label htmlFor="addTodoField">Add new to do:</label>
                <div className="input-group input-group-lg">
                    <input
                        className="form-control"
                        id="addTodoField"
                        onChange={ (e) => handleInputChange(e) }
                        ref={ inputRef }
                        type="text"
                    />
                    <div className="input-group-append">
                        <button aria-label="Add to do item" className="btn btn-primary" type="submit">
                            <span className="bi bi-plus-square text-white" />
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default ToDoForm;
