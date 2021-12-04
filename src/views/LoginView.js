import React, { useState } from 'react';

import EmailInput from './../components/inputs/EmailInput';
import { HoverableLink } from '../components/global/HoverableLink';
import LoginRegisterLayout from '../layouts/LoginRegisterLayout';
import PasswordInput from './../components/inputs/PasswordInput';
import PrimaryButton from './../components/global/PrimaryButton';

const LoginView = () => {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleEmailInput = (e) => {
		setEmail(e.target.value);
	};

	const handlePasswordInput = (e) => {
		setPassword(e.target.value);
	};

	



	return (
		<LoginRegisterLayout>
			<h1 className='text-white font-semibold text-4xl mb-20'>ZALOGUJ SIĘ</h1>
			<div className='flex w-full flex-col'>
				<EmailInput value={email} onChange={handleEmailInput}/>
				<PasswordInput value={password} onChange={handlePasswordInput}/>
				<HoverableLink title='Zapomniałeś hasła?' linkTo='#' fontSize='text-xs' margin='mt-3'/>
			</div>
			<div className='flex w-full items-center mt-14'>
				<PrimaryButton title='Zaloguj się' />
				<HoverableLink title='Zarejestruj się' linkTo='#' margin='ml-6'/>
			</div>
		

		</LoginRegisterLayout>
	);
};

export default LoginView;
