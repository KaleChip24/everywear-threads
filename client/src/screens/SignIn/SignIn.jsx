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
        <button id="sign-in-button" type="submit" className={toggleForm}>
          {form.errorMsg}
        </button>
      );
    } else {
      return (
        <button id="sign-in-button" type="submit">
          Sign In
        </button>
      );
    }
  };

  const { email, password } = form;

  return (
		<div>
			<div id='form-container'>
				<div id='left-side'>
					<div id='left-wrapper'>
						<div className='text'>
							<h3>Welcome Back!</h3>
						</div>
						<h4>Please sign in using your credentials.</h4>
						<br />
						<form onSubmit={onSignIn}>
							<input
								id='sign-in-input'
								required
								type='text'
								name='email'
								value={email}
								placeholder='Email'
								onChange={handleChange}
							/>
							<input
								id='sign-in-input'
								required
								name='password'
								value={password}
								type='password'
								placeholder='Password'
								onChange={handleChange}
							/>
							{renderError()}
						</form>
						<br />
						<p id='sign-up-gateway'>
							<div className='text'>Don't have an account?</div>
							<br />
							<Link to={`/sign-up`}>
								<button id='sign-up-redirect-button'>
									Sign Up
								</button>
							</Link>
							<br />
							<Link to={`/`}>
								<button id='back-redirect-button'>Back</button>
							</Link>
						</p>
					</div>
				</div>
				<div id='right-side'>
					<img
						id='image-sign-in'
						src='https://github.com/KaleChip24/everywear-threads/raw/zz-dev/assets/SignUp%2BSignIn%2BUpload/Login.png'
						alt='signin'
					/>
				</div>
			</div>
		</div>
  );
};
export default SignIn;
