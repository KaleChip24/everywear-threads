import './Nav.css';
import { NavLink } from 'react-router-dom';

const Nav = () => {
	return (
		<nav>
			<div className='nav'>
				<NavLink className='logo' to='/'>
					ProductsApp
				</NavLink>
				<div className='links'>
					<NavLink className='link' to='/'>
						Products
					</NavLink>
					<NavLink className='link' to='/add-product'>
						Add Product
					</NavLink>
				</div>
			</div>
		</nav>
	);
};

export default Nav;
