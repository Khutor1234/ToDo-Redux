
import TodoListItem from '../TodoListItem';
import { List, Typography } from 'mdc-react';
import './index.scss';

export default function TodoList({ list, todos }){

    return(
        <div className = 'todo-list'>
            <Typography className = 'todo-list__title' variant = 'headline4' >{list.title}</Typography>
            <List className = 'todo-list__items'>
                {todos.map(todo => 
                    <TodoListItem 
                        key = {todo.id}
                        todo = {todo} ></TodoListItem>
                )}
            </List>
        </div>
    );
}