interface Todo {
    complete: boolean;
    id: string;
    name: string;
};

interface TodoFilter {
    handleChange: function;
    searchTerm: string;
}

interface TodoForm {
    handleCreate: (todo: Todo) => void;
    todos: Todo[];
};

interface TodoItem {
    handleComplete: (id: string) => void;
    handleRemove: (id: string) => void;
    todo: Todo; 
};

interface TodoList {
    handleComplete: (id: string) => void;
    handleRemove: (id: string) => void;
    todos: Todo[]; 
};
