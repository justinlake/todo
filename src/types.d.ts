interface Todo {
    complete: boolean;
    id: string;
    name: string;
};

interface TodoForm {
    handleCreate: (todo: Todo) => void;
    todos: Todo[];
};

interface TodoItem {
    handleComplete: (id: string) => void;
    handleRemove: (id: string) => void;
    todo: Todo; 
};
