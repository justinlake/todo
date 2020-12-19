import React from 'react';

const TodoFilter = ({ handleChange, searchTerm }:TodoFilter) => (
    <div className="form-group">
        <label htmlFor="filterTodosField">Filter to dos:</label>
        <div className="input-group input-group-lg">
            <div className="input-group-prepend">
                <span aria-hidden className="input-group-text bi bi-filter" />
            </div>
            <input
                className="form-control"
                id="filterTodosField"
                onChange={ handleChange }
                type="text"
                value={ searchTerm }
            />
        </div>
    </div>
);

export default TodoFilter;
