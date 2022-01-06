import "./Nav.css";
import { NavLink } from "react-router-dom";
import ResponsiveAppBar from "./ResponsiveAppBar";

const authenticatedOptions = (
  <>
    <NavLink className="link" to="/add-product">
      Add Product
    </NavLink>
    <NavLink className="link" to="/sign-out">
      Sign Out
    </NavLink>
  </>
);

const unauthenticatedOptions = (
  <>
    <NavLink className="link" to="/sign-up">
      Sign Up
    </NavLink>
    <NavLink className="link" to="/sign-in">
      Sign In
    </NavLink>
  </>
);


const Nav = ({ user }) => {
	return (
		<nav>
			<div className='nav'>
				<ResponsiveAppBar />
				<div className='links'>
					{user && (
						<div className='link welcome'>
							Bonjour, {user.username}
						</div>
					)}
					{user ? authenticatedOptions : unauthenticatedOptions}
				</div>
			</div>
		</nav>
	);
};

export default Nav;
