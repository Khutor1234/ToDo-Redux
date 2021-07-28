import DBContext from '../context/db';
import { useContext } from 'react';

export default function TodoList({todos}){

    const db = useContext(DBContext)
    return(
        <ul>
            {db.todos.map(todo => 
                <li key = {todo.id}>{todo.title}</li>
            )}
        </ul>
    );
}