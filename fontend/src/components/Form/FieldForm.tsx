import React, { useState, useEffect } from 'react';
import { FaCircleNotch } from 'react-icons/fa';
export interface iFieldForm {
	name: string;
	type: string;
	selectOptions?: any;
	dataForm?: any;
	setDataForm?: any;
}
const FieldForm: React.FC<iFieldForm> = ({
	name,
	type,
	dataForm,
	selectOptions,
	setDataForm,
}: iFieldForm): JSX.Element => {
	// convert camelCase to Sentence case
	let nameDisplay = name;
	let lengthName = nameDisplay.length - 1;
	while (lengthName >= 0) {
		if (nameDisplay[lengthName] === nameDisplay[lengthName].toUpperCase()) {
			nameDisplay =
				nameDisplay.slice(0, lengthName) +
				' ' +
				nameDisplay.slice(lengthName).toLowerCase();
		}
		--lengthName;
	}

	// Value from input element
	const [value, setValue] = useState<string>('');

	// Check if Input element has been focused first
	const [touched, setTouched] = useState<number>(0);

	// Check verifying
	const [checking, setChecking] = useState<boolean>(false);

	// For show error
	const [err, setErr] = useState<string>('');

	// Handle verify value
	const handleValue = (data: string): any => {
		// Special characters
		let format = /[!#@$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

		// Check if the user has entered data yet
		if (!(data.length > 0)) {
			return setErr('Enter your ' + nameDisplay + ' pls!');
		}

		// check password's length
		if (type === 'password' && data.length < 6) {
			return setErr('Passwords must be at least 6 characters!');
		}
		// check email
		if (
			(!(data.slice(-10) === '@gmail.com') && type === 'email') ||
			(format.test(data) && type !== 'email')
		) {
			return setErr('Your ' + nameDisplay + ' is not valid!');
		}

		// check phone number
		if (name === 'phoneNumber' && !data.match(/^[0-9]+$/)) {
			return setErr('Your ' + nameDisplay + ' is not valid!');
		}

		// check re-password
		dataForm[name] = value;
		if (
			name === 'rePassword' &&
			dataForm.rePassword &&
			dataForm.password &&
			dataForm.rePassword !== dataForm.password
		) {
			return setErr('Re password incorrect!');
		}
		setDataForm(dataForm);

		// verify success
		return setErr('success');
	};

	useEffect(() => {
		if (touched > 0) {
			// start verify
			setChecking(true);
			const delay = setTimeout(() => {
				// verifying
				handleValue(value.trim());
				// end verify
				setChecking(false);
			}, 1000);

			// cleanup function
			return () => {
				clearTimeout(delay);
			};
		}
	}, [value || touched]);

	return (
		<div className='min-h-[95px] w-full sm:min-w-[280px]'>
			<label
				className='block text-gray-700 text-sm font-bold mb-2'
				htmlFor={name}
			>
				{nameDisplay.charAt(0).toUpperCase() + nameDisplay.slice(1)}
			</label>
			<div className=' relative'>
				{type !== 'select' ? (
					<input
						className={`shadow appearance-none border ${
							touched
								? err === 'success'
									? 'border-green-300'
									: 'border-red-500'
								: undefined
						} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:border-blue-300  focus:outline-none focus:shadow-outline`}
						id={name}
						type={type}
						name={name}
						placeholder={'Enter your ' + nameDisplay}
						onChange={(e) => {
							setValue(e.target.value);
							setTouched((prev) => ++prev);
						}}
						required
					/>
				) : (
					<select
						id={name}
						name={name}
						onChange={(e) => {
							setValue(e.target.value);
							setTouched((prev) => ++prev);
						}}
						required
						className={`shadow appearance-none border ${
							touched
								? err === 'success'
									? 'border-green-300'
									: 'border-red-500'
								: undefined
						} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:border-blue-300  focus:outline-none focus:shadow-outline`}
					>
						{selectOptions.map((option: any) => {
							return (
								<option key={option.value} value={option.value}>
									{option.key}
								</option>
							);
						})}
					</select>
				)}
				<div className=' absolute top-[50%] translate-y-[-50%] right-3 opacity-40 '>
					{checking ? <FaCircleNotch className='animate-spin' /> : undefined}
				</div>
			</div>
			<p
				className={`${
					err === 'success' ? 'text-green-500' : 'text-red-500'
				}  text-xs px-1 pt-2 py-1`}
			>
				{err === 'success'
					? 'Validate: Perfect!'
					: err
					? 'Validate: ' + err
					: err}
			</p>
		</div>
	);
};

export default FieldForm;
