import { useState } from "react";
import { signUp } from "../../services/users";
import { useNavigate, Link } from "react-router-dom";
import "./SignUp.css";
import Nav from "../../components/Nav/ResponsiveAppBar";
import Footer from "../../components/Footer/Footer";

export default function SignUp(props) {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    passwordConfirmation: "",
    isError: false,
    errorMsg: "",
  });

  const handleChange = (event) =>
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });

  const onSignUp = async (event) => {
    event.preventDefault();
    const { setUser } = props;
    try {
      const user = await signUp(form);
      setUser(user);
      navigate("/");
    } catch (error) {
      console.error(error);
      setForm({
        username: "",
        email: "",
        password: "",
        passwordConfirmation: "",
        isError: true,
        errorMsg: "Sign Up Details Invalid",
      });
    }
  };

  const renderError = () => {
    const toggleForm = form.isError ? "danger" : "";
    if (form.isError) {
      return (
        <button type="submit" className={toggleForm}>
          {form.errorMsg}
        </button>
      );
    } else {
      return <button type="submit">Sign Up</button>;
    }
  };

  const { username, email, password, passwordConfirmation } = form;

  return (
    <>
      <Nav />
      <div className="form-container">
        <div className="left-side">
          <div className="left-wrapper">
            <h3 className="text">Sign Up</h3>
            <br />
            <form onSubmit={onSignUp}>
              {/* <label className="text">Username</label> */}
              <input
                required
                type="text"
                name="username"
                value={username}
                placeholder="Enter username"
                onChange={handleChange}
              />
              {/* <label className="text">Email address</label> */}
              <input
                required
                type="email"
                name="email"
                value={email}
                placeholder="Enter email"
                onChange={handleChange}
              />
              {/* <label className="text">Password</label> */}
              <input
                required
                name="password"
                value={password}
                type="password"
                placeholder="Password"
                onChange={handleChange}
              />
              {/* <label className="text">Password Confirmation</label> */}
              <input
                required
                name="passwordConfirmation"
                value={passwordConfirmation}
                type="password"
                placeholder="Confirm Password"
                onChange={handleChange}
              />
              {renderError()}
            </form>
            <br />
            <p>
              <div className="text">Already signed up?</div>
              <Link to={`/sign-in`}>
                <button>Sign In</button>
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="right-side">
        <img
          src="https://github.com/KaleChip24/everywear-threads/raw/development/assets/SignUp%2BSignIn%2BUpload/Sign-Up.png"
          alt="signin"
        />
      </div>
      <Footer />
    </>
  );
}
