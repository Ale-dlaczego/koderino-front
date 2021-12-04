import React from 'react';

const PasswordInput = () => {
	return (
		<div className="border-pink-800 border-solid border-2 w-64 h-9 flex items-center px-3	rounded-md mt-2">
			<i className="bx bxs-lock-alt mr-2 text-md text-pink-800"/>
			<input placeholder={'Password'} className="text-pink-800 text-opacity-50 outline-none placeholder-pink-800 placeholder-opacity-50	text-sm font-medium"/>
		</div>
	);
};

export default PasswordInput;
