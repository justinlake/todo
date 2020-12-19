interface Todo {
    complete: boolean;
    id: string;
    name: string;
};

interface TodoForm {
    handleCreate: (todo: Todo) => void;
    todos: Todo[];
};
