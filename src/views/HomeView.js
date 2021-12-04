import React from 'react';
import PrimaryButton from '../components/PrimaryButton';
import EmailInput from '../components/inputs/EmailInput';
import PasswordInput from '../components/inputs/PasswordInput';

const HomeView = () => {
	return (
		<div>
			<PrimaryButton title={'Button'}/>
			<EmailInput/>
			<PasswordInput/>
		</div>
	);
};

export default HomeView;
