import EmailInput from './../components/inputs/EmailInput';
import { HoverableLink } from '../components/global/HoverableLink';
import LoginRegisterLayout from '../layouts/LoginRegisterLayout';
import PasswordInput from './../components/inputs/PasswordInput';
import PrimaryButton from './../components/global/PrimaryButton';
import React from 'react';

const LoginView = () => {
	return (
		<LoginRegisterLayout>
			<h1 className='text-white font-semibold text-4xl mb-20'>ZALOGUJ SIĘ</h1>
			<div className='flex w-full flex-col'>
				<EmailInput />
				<PasswordInput />
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
