import { ListItem, ListItemGraphic, ListItemText, Checkbox } from 'mdc-react';
import './index.scss';

export default function TodoListItem({todo, onCompleteChange}){

    return(
        <ListItem>
            <ListItemGraphic>
                <Checkbox
                    checked = {todo.completed}
                    onChange = {onCompleteChange} />
            </ListItemGraphic>
            <ListItemText>{todo.title}</ListItemText>
        </ListItem>
    );
}