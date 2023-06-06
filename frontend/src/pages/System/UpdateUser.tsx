import React from 'react';

const UpdateUser: React.FC = (): JSX.Element => {
	return <div>{localStorage.getItem('userUpdate')}</div>;
};

export default UpdateUser;
