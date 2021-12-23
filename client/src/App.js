// import './App.css';
import { Route, Routes } from 'react-router-dom';
import Products from './screens/Products/Products.js';

const App = () => {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Products />}/>
			</Routes>
		</div>
	);
};

export default App