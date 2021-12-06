import React, {useState} from 'react';

import EmailInput from './../components/inputs/EmailInput';
import { HoverableLink } from './../components/global/HoverableLink';
import LoginRegisterLayout from './../layouts/LoginRegisterLayout';
import PasswordInput from './../components/inputs/PasswordInput';
import PrimaryButton from './../components/global/PrimaryButton';
import { RepeatPasswordInput } from '../components/inputs/RepeatPasswordInput';
import api from './../config/api';
import registerErrors from './../errors/registerErrors';
import { setLoginInputs } from '../store/autocompleteLoginFormSlice';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

export const RegisterView = () => {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [repeatPassword, setRepeatPassword] = useState('');
	const [errors, setErrors] = useState([]);
	const dispatch = useDispatch();
	const navigate = useNavigate();


	const register = async () => {
		
		try {
			await api.post('users', {
				email,
				password
			});
			if (repeatPassword === '') {
				setErrors([...errors, 'Repeat password should not be empty']);
				return;
			}
			if (repeatPassword !== password) {
				setErrors([...errors, 'Repeat password is not equal to password']);
				return;
			}
			dispatch(setLoginInputs({email, password}));
			showSuccessAlert();
			setErrors([]);
			navigate('/login');
		} catch (err) {
			const resErrors = err.response.data.message;
			setErrors(typeof resErrors === 'object' ? [...resErrors] : [resErrors]);
		}
	};

	const showSuccessAlert = () => {
		return toast.success('Zostałeś pomyślnie zarejestrowany!');
	};

	const translateErrorsMessage = () => {
		if (errors.length === 0) return;
		switch (errors[0]) {
		case registerErrors.EMAIL_MUST_BE_AN_EMAIL:
			return 'Email musi być poprawny.';
		case registerErrors.EMAIL_SHOULD_NOT_BE_EMPTY:
			return 'Pole email nie może być puste.';
		case registerErrors.USER_EMAIL_IS_NOT_UNIQUE:
			return 'Email już istnieje.';
		case registerErrors.PASSWORD_MUST_BE_LONGER_THAN_OR_EQUAL_TO_8_CHARACTERS:
			return 'Hasło musi mieć przynajmniej 8 znaków.';
		case registerErrors.REPEAT_PASSWORD_IS_NOT_EQUAL_TO_PASSWORD:
			return 'Hasła nie zgadzają się.';
		case registerErrors.REPEAT_PASSWORD_SHOULD_NOT_BE_EMPTY:
			return 'Pole powtórz hasło nie może być puste.';
		default:
			return 'Coś poszło wyjątkowo źle.';
		}
	};

	return (
		<LoginRegisterLayout>
			<h1 className='text-white font-semibold text-3xl md:text-4xl mb-4'>Zarejestruj się</h1>
			<p className='mb-12 text-white text-sm md:text-base'>Dołącz do społeczności koderino</p>
			<div className='flex w-full flex-col'>
				<EmailInput value={email} setValue={setEmail} isError={errors.includes(registerErrors.EMAIL_MUST_BE_AN_EMAIL) ||errors.includes(registerErrors.USER_EMAIL_IS_NOT_UNIQUE) ||errors.includes(registerErrors.EMAIL_SHOULD_NOT_BE_EMPTY)}/>
				<PasswordInput value={password} setValue={setPassword} isError={errors.includes(registerErrors.PASSWORD_MUST_BE_LONGER_THAN_OR_EQUAL_TO_8_CHARACTERS) || errors.includes(registerErrors.PASSWORD_SHOULD_NOT_BE_EMPTY)} />
				<RepeatPasswordInput value={repeatPassword} setValue={setRepeatPassword} isError={errors.includes(registerErrors.REPEAT_PASSWORD_SHOULD_NOT_BE_EMPTY) || errors.includes(registerErrors.REPEAT_PASSWORD_IS_NOT_EQUAL_TO_PASSWORD) }/>
			</div>
			<p className='text-red-500 text-xs font-semibold mt-5'>{translateErrorsMessage()}</p>
			<div className='flex w-full items-center mt-9'>
				<PrimaryButton title='Zarejestruj się' onClick={register} className={'bg-our-blue hover:scale-110'}/>
				<HoverableLink title='Zaloguj się' linkTo='/login' className='ml-6'/>
			</div>
			<p className='mt-3 text-xs text-white text-right'>
				&copy; Koderino 2021
			</p>
		</LoginRegisterLayout>
	);
};
