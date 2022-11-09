import { h, Component } from 'preact';
import { useContext, useState } from 'preact/hooks';
import { AppState } from '../app';

const AddTodo = () => {
    const { todos } = useContext(AppState)
    const [newTodo, setNewTodo] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        todos.value = [...todos.value,{text:newTodo, completed: false}];
        setNewTodo('')
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
            <input type="submit" value="submit" />
        </form>
    );
};

export default AddTodo;