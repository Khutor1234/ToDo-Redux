import { useEffect, useState } from 'react';
import './App.scss';
import AppDrawer from './components/AppDrawer';
import AppContent from './components/AppContent';
import { Switch, Route } from 'react-router-dom';
import TodoList from './pages/TodoList';
import DBContext from './context/db';


import * as api from './api';

export default function App() {
	const [lists, setLists] = useState([]);
	


	useEffect(() => {
		api.getLists().then(setLists);
	}, [])

	return (
		<DBContext.Provider value ={{lists, ...api}}>
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


