import React, { useState, useEffect } from 'react';
import { FaCircleNotch } from 'react-icons/fa';

const Login: React.FC = (): JSX.Element => {
	// Email
	const [emailValue, setEmailValue] = useState<string>('');
	const [emailTouched, setEmailTouched] = useState<number>(0);
	const [emailChecking, setEmailChecking] = useState<boolean>(false);
	const [emailErr, setEmailErr] = useState<string>('');

	const handleEmailValue = (email: string): any => {
		let format = /[!#$%^&*()_+\-=\[\]{};':"\\|,<>\/?]/;
		if (!(email.length > 0)) {
			return setEmailErr('Enter your email pls!');
		}

		if (!email.includes('@gmail.com') || format.test(email)) {
			return setEmailErr('Your email is not valid!');
		}
		return setEmailErr('success');
	};

	useEffect(() => {
		if (emailTouched > 0) {
			setEmailChecking(true);
			const delayEmail = setTimeout(() => {
				handleEmailValue(emailValue.trim());
				setEmailChecking(false);
			}, 1000);
			return () => {
				clearTimeout(delayEmail);
			};
		}
	}, [emailValue || emailTouched]);

	// Password
	const [pwValue, setPwValue] = useState<string>('');
	const [pwTouched, setPwTouched] = useState<number>(0);
	const [pwChecking, setPwChecking] = useState<boolean>(false);
	const [pwErr, setPwErr] = useState<string>('');

	const handlePwValue = (pw: string): any => {
		let format = /[!#$@%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
		if (!(pw.length > 0)) {
			return setPwErr('Enter your password pls!');
		}

		if (pw.length < 6) {
			return setPwErr('Passwords must be at least 6 characters!');
		}

		if (format.test(pw)) {
			return setPwErr('Your password is not valid!');
		}
		return setPwErr('success');
	};

	useEffect(() => {
		if (pwTouched > 0) {
			setPwChecking(true);
			const delayPw = setTimeout(() => {
				handlePwValue(pwValue.trim());
				setPwChecking(false);
			}, 1000);
			return () => {
				clearTimeout(delayPw);
			};
		}
	}, [pwValue || pwTouched]);

	const handleSubmit = (event: React.FormEvent): void => {
		event.preventDefault();
		if (pwErr !== 'success' || emailErr !== 'success') {
			setEmailTouched((prev) => ++prev);
			setPwTouched((prev) => ++prev);
			handlePwValue(pwValue.trim());
			handleEmailValue(emailValue.trim());
		} else {
			const data = {
				email: emailValue,
				pw: pwValue,
			};
			console.log(data);
		}
	};

	return (
		<div className='flex justify-center items-center'>
			<div className='w-full max-w-xs pt-32'>
				<form
					method='POST'
					onSubmit={(e) => {
						handleSubmit(e);
					}}
					className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
				>
					<div className='text-center font-bold text-xl mb-[5vh]'>
						<h1>Login</h1>
					</div>
					<div className='min-h-[95px]'>
						<label
							className='block text-gray-700 text-sm font-bold mb-2'
							htmlFor='username'
						>
							Email
						</label>
						<div className=' relative'>
							<input
								className={`shadow appearance-none border ${
									emailTouched
										? emailErr === 'success'
											? 'border-green-300'
											: 'border-red-500'
										: undefined
								} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:border-blue-300  focus:outline-none focus:shadow-outline`}
								id='Email'
								type='text'
								name='email'
								placeholder='Enter your email'
								onChange={(e) => {
									setEmailValue(e.target.value);
									setEmailTouched((prev) => ++prev);
								}}
							/>
							<div className=' absolute top-[50%] translate-y-[-50%] right-3 opacity-40 '>
								{emailChecking ? (
									<FaCircleNotch className='animate-spin' />
								) : undefined}
							</div>
						</div>
						<p
							className={`${
								emailErr === 'success' ? 'text-green-500' : 'text-red-500'
							}  text-xs px-1 pt-2 py-1`}
						>
							{emailErr === 'success' ? 'Perfect!' : emailErr}
						</p>
					</div>
					<div className='min-h-[95px]'>
						<label
							className='block text-gray-700 text-sm font-bold mb-2'
							htmlFor='password'
						>
							Password
						</label>
						<div className=' relative'>
							<input
								className={`shadow appearance-none border ${
									pwTouched
										? pwErr === 'success'
											? 'border-green-300'
											: 'border-red-500'
										: undefined
								} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:border-blue-300  focus:outline-none focus:shadow-outline`}
								id='Password'
								type='password'
								name='password'
								placeholder='Enter your password'
								onChange={(e) => {
									setPwValue(e.target.value);
									setPwTouched((prev) => ++prev);
								}}
							/>
							<div className=' absolute top-[50%] translate-y-[-50%] right-3 opacity-40 '>
								{pwChecking ? (
									<FaCircleNotch className='animate-spin' />
								) : undefined}
							</div>
						</div>
						<p
							className={`${
								pwErr === 'success' ? 'text-green-500' : 'text-red-500'
							}  text-xs px-1 pt-2 py-1`}
						>
							{pwErr === 'success' ? 'Perfect!' : pwErr}
						</p>
					</div>

					<div className='flex items-center justify-between mt-2'>
						<button
							className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
							type='submit'
						>
							Login
						</button>
						<a
							className='inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800'
							href='#'
						>
							Forgot Password?
						</a>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
