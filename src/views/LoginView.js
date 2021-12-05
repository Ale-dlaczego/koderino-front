import React, { useEffect, useState } from 'react';

import EmailInput from './../components/inputs/EmailInput';
import { HoverableLink } from '../components/global/HoverableLink';
import LoginRegisterLayout from '../layouts/LoginRegisterLayout';
import PasswordInput from './../components/inputs/PasswordInput';
import PrimaryButton from './../components/global/PrimaryButton';
import { useSelector } from 'react-redux';

const LoginView = () => {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const autocompleteLoginFormInputs = useSelector(state => {return state.autocompleteLoginForm;});

	const autocompleteForm = () => {
		if (autocompleteLoginFormInputs.email !== '' && autocompleteLoginFormInputs.password !== '') {
			setPassword(autocompleteLoginFormInputs.password);
			setEmail(autocompleteLoginFormInputs.email);
		}
	};
	
	useEffect(() => {
		autocompleteForm();
	});

	return (
		<LoginRegisterLayout>
			<h1 className='text-white font-semibold text-3xl md:text-4xl mb-4'>Zaloguj się</h1>
			<p className='mb-12 text-white text-sm md:text-base'>Zaloguj się na swoje konto koderino</p>
			<div className='flex w-full flex-col'>
				<EmailInput value={email} setValue={setEmail}/>
				<PasswordInput value={password} setValue={setPassword}/>
				<HoverableLink title='Zapomniałeś hasła?' linkTo='#' className='text-xs mt-3'/>
			</div>
			<div className='flex w-full items-center mt-14 '>
				<PrimaryButton title='Zaloguj się' />
				<HoverableLink title='Zarejestruj się' linkTo='/register' className='ml-6'/>
			</div>
			<p className='mt-12 text-xs text-white text-right'>
				&copy; Koderino 2021
			</p>
		</LoginRegisterLayout>
	);
};

export default LoginView;
