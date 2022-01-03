import './Nav.css';
import { NavLink } from 'react-router-dom';
import ResponsiveAppBar from './ResponsiveAppBar';

const Nav = () => {
	return (
		<nav>
			<NavLink className='link' to='/sign-out'>
				Sign Out
			</NavLink>
			<NavLink className='link' to='/sign-up'>
				Sign Up
			</NavLink>
			<ResponsiveAppBar />
		</nav>
	);
};

export default Nav;
