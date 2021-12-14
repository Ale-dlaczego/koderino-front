import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CheckboxInput } from './../components/global/CheckboxInput';
import Constants from '../Constants';
import EmailInput from './../components/inputs/EmailInput';
import { HoverableLink } from './../components/global/HoverableLink';
import LoginRegisterLayout from './../layouts/LoginRegisterLayout';
import PasswordInput from './../components/inputs/PasswordInput';
import PrimaryButton from './../components/global/PrimaryButton';
import api from '../config/api';
import { setToken } from '../store/authorizationSlice';
import { toast } from 'react-toastify';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router';

const LoginView = () => {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const autocompleteLoginFormInputs = useSelector(state => { return state.autocompleteLoginForm; });
	const [rememberMe, setRememberMe] = useState(false);
	const dispatch = useDispatch();
	const [cookies, setCookie] = useCookies();
	const navigate = useNavigate();

	const autocompleteForm = () => {
		if (autocompleteLoginFormInputs.email !== '' && autocompleteLoginFormInputs.password !== '') {
			setPassword(autocompleteLoginFormInputs.password);
			setEmail(autocompleteLoginFormInputs.email);
		}
	};

	const login = async () => {
		try {
			const res= await api.post('auth/login', {
				email,
				password
			});
			const token = res.data.tokenType + ' ' + res.data.accessToken;
			if (rememberMe) {
				localStorage.setItem(Constants.TOKEN_KEY,JSON.stringify(token) );
			}
			else {
				setCookie(Constants.TOKEN_KEY,JSON.stringify(token));
			}
			dispatch(setToken(token));
			navigate('/dashboard');
		}
		catch (err) {
			return toast.error('Wprowadź poprawne dane!');
		}
	};
	
	useEffect(() => {
		autocompleteForm();
	},[]);

	return (
		<LoginRegisterLayout>
			<h1 className='text-white font-semibold text-3xl md:text-4xl mb-4'>Zaloguj się</h1>
			<p className='mb-12 text-white text-sm md:text-base'>Zaloguj się na swoje konto koderino</p>
			<div className='flex w-full flex-col'>
				<EmailInput value={email} setValue={setEmail}/>
				<PasswordInput value={password} setValue={setPassword}/>
				<HoverableLink title='Zapomniałeś hasła?' linkTo='#' className='text-xs mt-3'/>
			</div>
			<div className='flex mt-5 items-center'>
				<CheckboxInput setValue={setRememberMe} value={rememberMe}/>
				<p className='text-white text-xs font-medium ml-3'>Zapamiętaj mnie</p>
			</div>
			<div className='flex w-full items-center mt-9 '>
				<PrimaryButton title='Zaloguj się' onClick={login} className={'bg-our-blue hover:scale-110'}/>
				<HoverableLink title='Zarejestruj się' linkTo='/register' className='ml-6'/>
			</div>
			
			<p className='mt-3 text-xs text-white text-right'>
				&copy; Koderino 2021
			</p>
		</LoginRegisterLayout>
	);
};

export default LoginView;
