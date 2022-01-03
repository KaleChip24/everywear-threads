// import './App.css';
import { Route, Routes } from 'react-router-dom';
import Products from './screens/Products/Products.js';
import { verifyUser } from './services/users'
import SignUp from './screens/SignUp/SignUp'
import SignIn from './screens/SignIn/SignIn'
import SignOut from './screens/SignOut/SignOut'
import { useState, useEffect  } from 'react';

const App = () => {
	const [user, setUser] = useState(null);

	useEffect(() => {
		const fetchUser = async () => {
			const user = await verifyUser();
			user ? setUser(user) : setUser(null);
		};
		fetchUser();
	}, []);

	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Products user={user} />} />
				<Route path='/sign-up' element={<SignUp setUser={setUser} />} />
				<Route path='/sign-in' element={<SignIn setUser={setUser} />} />
				<Route
					path='/sign-out'
					element={<SignOut setUser={setUser} />}
				/>
			</Routes>
		</div>
	);
};

export default App;
