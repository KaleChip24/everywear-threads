import './App.css';
import { Routes } from 'react-router';
import { Route } from 'react-router-dom';

export const App = () => {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={Home}>
					This is the homepage palceholder
				</Route>
			</Routes>
		</div>
	);
};
