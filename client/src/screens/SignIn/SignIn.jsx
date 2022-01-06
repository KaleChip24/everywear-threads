import { useState } from "react";
import "./SignIn.css";
import { signIn } from "../../services/users";
import { useNavigate } from "react-router-dom";
import Nav from "../../components/Nav/ResponsiveAppBar";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

const SignIn = (props) => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
    isError: false,
    errorMsg: "",
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const onSignIn = async (event) => {
    event.preventDefault();
    const { setUser } = props;
    try {
      const user = await signIn(form);
      setUser(user);
      navigate("/");
    } catch (error) {
      console.error(error);
      setForm({
        isError: true,
        errorMsg: "Invalid Credentials",
        email: "",
        password: "",
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
      return <button type="submit">Sign In</button>;
    }
  };

  const { email, password } = form;

  return (
    <div>
      <Nav />
      <div className="form-container">
        <div className="left-side">
          <div className="left-wrapper">
            <div className="inner-box">
              <h3 className="text">Welcome Back!</h3>
              <br />
              <h4 className="text">Please sign in using your credentials.</h4>
              <br />
              <form onSubmit={onSignIn}>
                <input
                  required
                  type="text"
                  name="email"
                  value={email}
                  placeholder="Email"
                  onChange={handleChange}
                />
                <input
                  required
                  name="password"
                  value={password}
                  type="password"
                  placeholder="Password"
                  onChange={handleChange}
                />
                {renderError()}
              </form>
              <br />
              <p className="sign-up">
                <div className="text">Don't have an account?</div>
                <Link to={`/sign-up`}>
                  <button>Sign Up</button>
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="right-side">
          <img
            src="https://github.com/KaleChip24/everywear-threads/raw/development/assets/SignUp%2BSignIn%2BUpload/Login.png"
            alt="signin"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default SignIn;
