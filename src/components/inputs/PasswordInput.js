import React from 'react';

const PasswordInput = () => {
	return (
		<div className="border-white border-solid border-2 h-11 flex items-center px-3 rounded-md shadow-lg bg-white w-full">
			<i className="bx bxs-lock-alt mr-2 text-md text-our-blue" />
			<input placeholder={'Password'} className="text-opacity-50 outline-none  placeholder-opacity-50 w-full text-sm font-medium text-our-blue" />
			<i className='bx bxs-hide pl-2 cursor-pointer text-our-blue' />
		</div>
	);
};

export default PasswordInput;
