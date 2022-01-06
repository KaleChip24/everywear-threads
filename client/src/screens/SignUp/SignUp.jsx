import { useState } from "react";
import { signUp } from "../../services/users";
import { useNavigate, Link } from "react-router-dom";
import './SignUp.css';

export default function SignUp(props) {
	const navigate = useNavigate();

	const [form, setForm] = useState({
		username: '',
		email: '',
		passwordConfirmation: '',
		isError: false,
		errorMsg: '',
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
			navigate('/');
		} catch (error) {
			console.error(error);
			setForm({
				username: '',
				email: '',
				password: '',
				passwordConfirmation: '',
				isError: true,
				errorMsg: 'Sign Up Details Invalid',
			});
		}
	};

	const renderError = () => {
		const toggleForm = form.isError ? 'danger' : '';
		if (form.isError) {
			return (
				<button
					id='sign-in-button'
					type='submit'
					className={toggleForm}>
					{form.errorMsg}
				</button>
			);
		} else {
			return (
				<button id='sign-in-button' type='submit'>
					Sign Up
				</button>
			);
		}
	};

	const { username, email, password, passwordConfirmation } = form;

	return (
		<div>
			<div id='form-container-sign-up'>
				<div id='left-side-sign-up'>
					<div id='left-wrapper-sign-up'>
						<h3>Sign Up</h3>
						<br />
						<h4>
							Welcome to your new fashion journey with Everywear
							Thread! We are happy to have you here!
						</h4>
						<br />
						<form onSubmit={onSignUp}>
							<label>Username</label>
							<input
								id='sign-in-input'
								required
								type='text'
								name='username'
								value={username}
								placeholder='Enter username'
								onChange={handleChange}
							/>
							<label>Email address</label>
							<input
								id='sign-in-input'
								required
								type='email'
								name='email'
								value={email}
								placeholder='Enter email'
								onChange={handleChange}
							/>
							<label>Password</label>
							<input
								id='sign-in-input'
								required
								name='password'
								value={password}
								type='password'
								placeholder='Password'
								onChange={handleChange}
							/>
							<label>Password Confirmation</label>
							<input
								id='sign-in-input'
								required
								name='passwordConfirmation'
								value={passwordConfirmation}
								type='password'
								placeholder='Confirm Password'
								onChange={handleChange}
							/>
							{renderError()}
						</form>
						<br />
						<p id='sign-in-gateway'>Already signed up?</p>
						<br />
						<Link to={`/sign-in`}>
							<button id='sign-in-redirect-button'>
								Sign In
							</button>
						</Link>
					</div>
				</div>
				<div id='right-side-sign-up'>
					<img
						id='image-sign-up'
						src='https://github.com/KaleChip24/everywear-threads/raw/zz-dev/assets/SignUp%2BSignIn%2BUpload/Sign-Up.png'
						alt='signin'
					/>
				</div>
			</div>
		</div>
	);
}
