import { useEffect, useState } from 'react';
import './App.scss';
import AppDrawer from './components/AppDrawer';
import AppContent from './components/AppContent';
import { Switch, Route } from 'react-router-dom';
import TodoList from './components/TodoList';
import DBContext from './components/context/db';


import { get } from './api';

export default function App() {
	const [lists, setLists] = useState([]);
	const [todos, setTodos] = useState([])


	useEffect(() => {
		get('lists').then(setLists);
		get('todos').then(setTodos)
	}, [])

	return (
		<DBContext.Provider value ={{lists, todos}}>
			<div className = 'app'>
				<AppDrawer lists = {lists}></AppDrawer>
				<AppContent>
					<Switch>
						<Route path = '/:listId' component = {TodoList}/>
					</Switch>
				</AppContent>	
			</div>
		</DBContext.Provider>
		
	);
}


