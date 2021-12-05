import React, {useState} from 'react';

export const RepeatPasswordInput = ({ value, setValue, isError }) => {
	const [passwordShown, setPasswordShown] = useState(false);

	const handlePasswordInput = (e) => {
		setValue(e.target.value);
	};
	const toggleShowPassword = () => {
		setPasswordShown(passwordShown ? false : true);
	};

	return (
		<div className={`${isError ? 'border-red-500' : 'border-white'} border-solid border-2 h-11 flex items-center px-3 rounded-md shadow-lg bg-white w-full mt-5`}>
			<i className="bx bxs-lock-alt mr-2 text-md text-our-blue" />
			<input placeholder={'Powtórz hasło'} value={value} onChange={handlePasswordInput} type={passwordShown? 'text' : 'password'} className="text-opacity-50 outline-none  placeholder-opacity-50 w-full text-sm font-medium text-our-blue" />
			<i className='bx bxs-hide pl-2 cursor-pointer text-our-blue' onClick={toggleShowPassword}/>
		</div>
	);
};
