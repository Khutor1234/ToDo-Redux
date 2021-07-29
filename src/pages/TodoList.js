import DBContext from '../context/db';
import { useContext, useState, useEffect } from 'react';
import TodoList from '../components/TodoList';
import Spinner from '../components/Spinner';
import TododForm from '../components/TodoForm';
import './index.scss';

export default function TodoListPage({match}){
    const db = useContext(DBContext);
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        setTodos();

        db.getListTodos(match.params.listId)
		    .then(setTodos)
	}, [db, match.params.listId]);

    const list = db.lists.find(list => list.id === match.params.listId);

    function handleSubmit(title){
        db.createTodo({
            title,
            listId: list.id
        }).then(todo => setTodos([...todos, todo]))
    }

    if(!list || !todos) return <Spinner/>

    return(
        <div id = 'todo-list-page' className = "pages">
            <TodoList 
                list = {list}
                todos = {todos} />

            <TododForm
                onSubmit = {handleSubmit} />
        </div>
    );
}