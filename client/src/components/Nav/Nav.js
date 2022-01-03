// <<<<<<< kashfr
// import "./Nav.css";
// import { NavLink } from "react-router-dom";

// const Nav = () => {
//   return (
//     <nav>
//       <div className="nav">
//         <NavLink className="logo" to="/">
//           Everywear Threads
//         </NavLink>
//         <div className="links">
//           <NavLink className="link" to="/">
//             Products
//           </NavLink>
//           <NavLink className="link" to="/add-product">
//             Add Product
//           </NavLink>
//           <NavLink className="link" to="/sign-out">
//             Sign Out
//           </NavLink>
//           <NavLink className="link" to="/sign-up">
//             Sign Up
//           </NavLink>
//           <NavLink className="link" to="/sign-in">
//             Sign In
//           </NavLink>
//         </div>
//       </div>
//     </nav>
//   );
// =======
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
