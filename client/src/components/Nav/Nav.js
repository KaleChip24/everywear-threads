import './Nav.css';
import { NavLink } from 'react-router-dom';
import ResponsiveAppBar from "./ResponsiveAppBar";

const Nav = () => {
	return (
		<nav>
			<ResponsiveAppBar />
		</nav>
	);
};

export default Nav;
