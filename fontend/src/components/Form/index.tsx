import React, { useState } from 'react';
import FieldForm, { iFieldForm } from './FieldForm';

interface iForm {
	nameForm: string;
	fields: iFieldForm[];
	authen?: boolean;
}

const Form = ({ nameForm, fields, authen = false }: iForm): JSX.Element => {
	const [dataForm, setDataForm] = useState<any>({});
	const handleSubmit = (event: React.FormEvent): void => {
		event.preventDefault();
		console.log('>>> check dataForm', dataForm);
	};
	return (
		<div className='flex justify-center items-center'>
			<form
				method='POST'
				onSubmit={(e) => {
					handleSubmit(e);
				}}
				className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-[95%] sm:max-w-max '
			>
				<div className='text-center font-bold text-xl mb-[5vh]'>
					<h1>{nameForm}</h1>
				</div>
				{/* <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-x-6'> */}
				<div
					className={
						fields.length < 3
							? ''
							: 'grid md:grid-cols-2 lg:grid-cols-3 gap-x-6'
					}
				>
					{/* <div className='grid  gap-x-6  grid-flow-col auto-cols-max'> */}
					{fields.map((field: iFieldForm): JSX.Element => {
						return (
							<FieldForm
								key={field.name}
								name={field.name}
								type={field.type}
								selectOptions={field?.selectOptions}
								dataForm={dataForm}
								setDataForm={setDataForm}
							/>
						);
					})}
				</div>

				<div className='flex items-center justify-between mt-2'>
					<button
						className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
						type='submit'
					>
						{nameForm}
					</button>
					{authen ? (
						<a
							className='inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800'
							href='#'
						>
							Forgot Password?
						</a>
					) : undefined}
				</div>
			</form>
		</div>
	);
};

export default Form;