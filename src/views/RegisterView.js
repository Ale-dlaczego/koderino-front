import React, {useState} from 'react';

import EmailInput from './../components/inputs/EmailInput';
import { HoverableLink } from './../components/global/HoverableLink';
import LoginRegisterLayout from './../layouts/LoginRegisterLayout';
import PasswordInput from './../components/inputs/PasswordInput';
import PrimaryButton from './../components/global/PrimaryButton';
import { RepeatPasswordInput } from '../components/inputs/RepeatPasswordInput';

export const RegisterView = () => {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [repeatPassword, setRepeatPassword] = useState('');

	return (
		<LoginRegisterLayout>
			<h1 className='text-white font-semibold text-4xl mb-4'>Zarejestruj się</h1>
			<p className='mb-12 text-white'>Dołącz do społeczności koderino</p>
			<div className='flex w-full flex-col'>
				<EmailInput value={email} setValue={setEmail}/>
				<PasswordInput value={password} setValue={setPassword} />
				<RepeatPasswordInput value={repeatPassword} setValue={setRepeatPassword}/>
			</div>
			<div className='flex w-full items-center mt-14'>
				<PrimaryButton title='Zarejestruj się' />
				<HoverableLink title='Zaloguj się' linkTo='/login' className='ml-6'/>
			</div>
			<p className='mt-3 text-xs text-white text-right'>
				&copy; Koderino 2021
			</p>
		</LoginRegisterLayout>
	);
};
