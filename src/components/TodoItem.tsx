import React from 'react';
import clsx from 'clsx';

const TodoItem = ({ handleComplete, handleRemove, todo }: TodoItem) => (
    <li
        className={ clsx(
            'list-group-item',
            'todo-item',
            { 'complete': todo.complete }
        ) }
    >
        <input
            defaultChecked={ todo.complete }
            className="item-checkbox sr-only"
            id={ `item-${todo.id}` }
            onClick={ () => handleComplete(todo.id) }
            type="checkbox"
        />
        <label
            className="item-label"
            htmlFor={ `item-${todo.id}` }
        >
            { todo.name }
        </label>
        <button
            aria-label="Remove to do item"
            className="btn btn-danger remove-item-button"
            onClick={ () => handleRemove(todo.id) }
        >
            <span className="bi bi-trash" />
        </button>
    </li>
);

export default TodoItem;
